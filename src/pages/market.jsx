import React from 'react';
import Plot from 'react-plotly.js';

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      stockSymbol: '',
      stockName: '',
      currentPrice: '',
    };
  }

  fetchStock = () => {
    const { stockSymbol } = this.state;
    const API_KEY = process.env.MARKET_API_KEY;
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(response => response.json())
      .then(data => {
        console.log('API Data:', data);

        if (data['Meta Data'] && data['Time Series (Daily)']) {
          const timeSeries = data['Time Series (Daily)'];
          const stockName = data['Meta Data']['2. Symbol'];
          const latestDate = Object.keys(timeSeries)[0];
          const latestClose = timeSeries[latestDate]['4. close'];

          for (let key in timeSeries) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(timeSeries[key]['1. open']);
          }

          this.setState({
            stockChartXValues: stockChartXValuesFunction.reverse(),
            stockChartYValues: stockChartYValuesFunction.reverse(),
            stockName: stockName,
            currentPrice: latestClose,
          });
        } else {
          console.error('Error fetching data:', data);
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchStock();
  };

  render() {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center mt-6">
        <div className="w-full bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
            Stock Market Tracker
          </h1>
          <form
            className="flex flex-col items-center gap-4"
            onSubmit={this.handleSubmit}
          >
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Symbol
              </label>
              <input
                type="text"
                name="stockSymbol"
                value={this.state.stockSymbol}
                onChange={this.handleInputChange}
                placeholder="Enter stock symbol (e.g., AAPL)"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition"
            >
              Fetch Stock Data
            </button>
          </form>

          {this.state.stockName && (
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {this.state.stockName.toUpperCase()}
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Current Price: ${parseFloat(this.state.currentPrice).toFixed(2)}
              </p>
            </div>
          )}

          <div className="mt-8">
            <div className="bg-white shadow-md rounded-lg p-4">
              <Plot
                data={[
                  {
                    x: this.state.stockChartXValues,
                    y: this.state.stockChartYValues,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'green' },
                  },
                ]}
                layout={{
                  title: 'Market Summary (100 days)',
                  xaxis: { title: 'Date' },
                  yaxis: { title: 'Opening Price ($)' },
                }}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Market;
