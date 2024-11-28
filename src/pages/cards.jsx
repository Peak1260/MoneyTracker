export const Cards = () => {
    return (
        <div className="mx-auto w-11/12 flex flex-wrap justify-between p-0">
            <h1 className="text-center text-4xl mb-5">Credit Cards</h1>

            {/* Tier 1: Starter Cards */}
            <div className="border border-gray-300 rounded-lg mb-5 bg-white p-4 w-full">
                <h2 className="text-[#2c3e50] mb-2">Tier 1: Starter Cards</h2>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://www.nerdwallet.com/cdn-cgi/image/width=1000,quality=85/cdn/images/marketplace/credit_cards/44278d8b-631e-49c9-90df-f11b6e101539/1e30d48429dfe33c0d61d0c069acfec0e1328a89851742e18d6e6056cb272769.jpg" 
                        alt="Discover it Student Cash Back" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">Discover it Student Cash Back</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $0</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 5% cash back on different categories quarterly, 1% on all other purchases</p>
                        <p className="text-lg text-[#333]">Intro Offer: Unlimited cashback match on the 1st year</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://www.nerdwallet.com/cdn-cgi/image/width=1000,quality=85/cdn/images/marketplace/credit_cards/56683306-5399-4ad5-873f-925ac4b61e9a/23d912d96ac81d193ab39c406df527a75d130cf5e8c1c2b2596121df884fba0e.jpg" 
                        alt="Bank of America Customized Cash Rewards" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">Bank of America Customized Cash Rewards</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $0</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 3% cash back in the category of your choice, 2% at grocery stores and wholesale clubs, 1% on all other purchases</p>
                        <p className="text-lg text-[#333]">Intro Offer: $200</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://www.forbes.com/advisor/wp-content/uploads/2021/08/247ae730-ff6b-11eb-bb36-9183285abe2c.png" 
                        alt="Capital One SavorOne" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">Capital One SavorOne</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $0</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 3% cash back on dining, entertainment, popular streaming services and at grocery stores, 1% on all other purchases.</p>
                        <p className="text-lg text-[#333]">Intro Offer: $200</p>
                    </div>
                </div>
            </div>

            {/* Tier 2: No Annual Fee Cards */}
            <div className="border border-gray-300 rounded-lg mb-5 bg-white p-4 w-full">
                <h2 className="text-[#2c3e50] mb-2">Tier 2: No Annual Fee Cards</h2>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://creditcards.chase.com/K-Marketplace/images/cardart/freedom_unlimited_card.png" 
                        alt="Chase Freedom Unlimited" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">Chase Freedom Unlimited</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $0</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 5% cash back on travel through Chase Ultimate Rewards, 3% on dining and drugstores, 1.5% on all other purchases</p>
                        <p className="text-lg text-[#333]">Intro Offer: $200</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://www.citi.com/CRD/images/citi-custom-cash/citi-custom-cash_222x140.png" 
                        alt="Citi Custom Cash" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">Citi Custom Cash</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $0</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 5% cash back on your top spend category, 1% on all other purchases</p>
                        <p className="text-lg text-[#333]">Intro Offer: $200</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/blue-cash-everyday.png" 
                        alt="American Express Blue Cash Everyday" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">American Express Blue Cash Everyday</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $0</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 3% cash back on gas, groceries, and online retail purchases, entertainment, 1% on all other purchases.</p>
                        <p className="text-lg text-[#333]">Intro Offer: $200</p>
                    </div>
                </div>
            </div>

            {/* Tier 3: Mid Tier Cards */}
            <div className="border border-gray-300 rounded-lg mb-5 bg-white p-4 w-full">
                <h2 className="text-[#2c3e50] mb-2">Tier 3: Mid Tier Cards</h2>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_preferred_card.png" 
                        alt="Chase Sapphire Preferred" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">Chase Sapphire Preferred</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $95</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 5x points on travel through Chase Ultimate Rewards, 3x on dining, takeout, and delivery services, 2x on other travel purchases, 1x on all other purchases</p>
                        <p className="text-lg text-[#333]">Perks: 25% more value when you redeem for travel through Chase, $50 Annual Travel Credit</p>
                        <p className="text-lg text-[#333]">Intro Offer: 60,000 bonus points</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://ecm.capitalone.com/WCM/card/products/venture-card-art/mobile.png" 
                        alt="Capital One Venture Rewards" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">Capital One Venture Rewards</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $95</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 5 miles per dollar through Capital One Travel, 2 miles on all other purchases</p>
                        <p className="text-lg text-[#333]">Perks: $50 Annual Travel Credit, $100 Global Entry</p>
                        <p className="text-lg text-[#333]">Intro Offer: 75,000 bonus miles</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://icm.aexp-static.com/acquisition/card-art/NUS000000174_480x304_straight_withname.png" 
                        alt="American Express Gold" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">American Express Gold</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $250</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 4x points at restaurants and U.S. supermarkets, 3x on flights through Amex Travel, 1x on all other purchases.</p>
                        <p className="text-lg text-[#333]">Perks: $120 Uber Cash, $120 Dining Credit</p>
                        <p className="text-lg text-[#333]">Intro Offer: 60,000 reward points</p>
                    </div>
                </div>
            </div>

            {/* Tier 4: Premium Cards */}
            <div className="border border-gray-300 rounded-lg mb-5 bg-white p-4 w-full">
                <h2 className="text-[#2c3e50] mb-2">Tier 4: Premium Cards</h2>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_reserve_card.png" 
                        alt="Chase Sapphire Reserve" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">Chase Sapphire Reserve</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $550</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 10x points on hotels and dining through Chase Ultimate Rewards, 5x on flights through Chase, 3x on dining, takeout, and delivery services, 1x on all other purchases</p>
                        <p className="text-lg text-[#333]">Perks: 50% more value when you redeem for travel through Chase, $300 Annual Travel Credit, $100 Global Entry</p>
                        <p className="text-lg text-[#333]">Intro Offer: 60,000 bonus points</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://www.nerdwallet.com/cdn-cgi/image/width=1000,quality=85/cdn/images/marketplace/credit_cards/5310581c-475f-11ee-92db-7b6738046e2a/e22bfd43a435dd8d16ddaf59573f9af031859e0fed221f83da3682981c4dc82b.jpg" 
                        alt="Capital One Venture X" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">Capital One Venture X</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $395</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 10 miles per dollar on hotels and rental cars through Capital One Travel, 5 miles on flights through Capital One, 2 miles on all other purchases</p>
                        <p className="text-lg text-[#333]">Perks: 10,000 Miles Anniversary Bonus, $300 Annual Travel Credit, $100 Global Entry</p>
                        <p className="text-lg text-[#333]">Intro Offer: 75,000 bonus miles</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    <img 
                        src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2018/03/amex-platinum-April-2021.png" 
                        alt="American Express Platinum" 
                        className="rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 md:w-1/3"
                    />
                    <div className="ml-0 md:ml-8 flex-1">
                        <h3 className="text-xl font-bold text-[#333]">American Express Platinum</h3>
                        <p className="text-lg text-[#333]">Annual Fee: $695</p>
                        <p className="text-lg text-[#333]">Rewards Rate: 5x on flights and hotels through Amex Travel, 1x on all other purchases.</p>
                        <p className="text-lg text-[#333]">Perks: $200 Hotel Credit, $200 Uber Cash, $200 Airline Fee Credit, $189 CLEAR Plus Credit</p>
                        <p className="text-lg text-[#333]">Intro Offer: 125,000 reward points</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;