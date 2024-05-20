import React from 'react';
import Plot from 'react-plotly.js';
import "../design/styleM.css";

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      stockSymbol: '',
      outputSize: '',
      stockName: '',
      currentPrice: '',
    };
  }

  fetchStock = () => {
    const { stockSymbol, outputSize } = this.state;
    const API_KEY = '1QCARVSR811IU7IN';
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=${outputSize}&apikey=${API_KEY}`;
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
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchStock();
  }

  render() {
    return (
      <div className="market-container">
        <h1>Stock Market</h1>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label>
              Stock Symbol:
              <input 
                type="text" 
                name="stockSymbol" 
                value={this.state.stockSymbol} 
                onChange={this.handleInputChange} 
              />
            </label>
          </div>
          <div>
            <label>
              Output Size:
              <select 
                name="outputSize" 
                value={this.state.outputSize} 
                onChange={this.handleInputChange}
              >
                <option value="compact">Compact (100 days)</option>
                <option value="full">Full (All Historical Data)</option>
              </select>
            </label>
          </div>
          <button type="submit">Fetch Stock Data</button>
        </form>
        {this.state.stockName && (
          <div className="stock-info">
            <h2>{this.state.stockName.toUpperCase()}</h2>
            <p>Current Price: ${parseFloat(this.state.currentPrice).toFixed(2)}</p>
          </div>
        )}
        <div className="plot-container">
          <Plot
            data={[
              {
                x: this.state.stockChartXValues,
                y: this.state.stockChartYValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
              }
            ]}
            layout={{title: 'Market Summary' }}
          />
        </div>
      </div>
    );
  }
}

export default Market;
