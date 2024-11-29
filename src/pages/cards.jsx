import React from "react";

export const Cards = () => {
    const cardTiers = [
        {
            tier: "Tier 1: Starter Cards",
            cards: [
                {
                    name: "Discover it Student Cash Back",
                    annualFee: "$0",
                    rewards: "5% cash back on rotating categories quarterly, 1% on all other purchases",
                    introOffer: "Unlimited cashback match on the 1st year",
                    img: "https://www.nerdwallet.com/cdn-cgi/image/width=1000,quality=85/cdn/images/marketplace/credit_cards/44278d8b-631e-49c9-90df-f11b6e101539/1e30d48429dfe33c0d61d0c069acfec0e1328a89851742e18d6e6056cb272769.jpg",
                },
                {
                    name: "Bank of America Customized Cash Rewards",
                    annualFee: "$0",
                    rewards: "3% cash back in your chosen category, 2% at grocery stores and wholesale clubs, 1% on other purchases",
                    introOffer: "$200",
                    img: "https://www.nerdwallet.com/cdn-cgi/image/width=1000,quality=85/cdn/images/marketplace/credit_cards/56683306-5399-4ad5-873f-925ac4b61e9a/23d912d96ac81d193ab39c406df527a75d130cf5e8c1c2b2596121df884fba0e.jpg",
                },
                {
                    name: "Capital One Savor",
                    annualFee: "$0",
                    rewards: "3% cash back on dining, entertainment, grocery stores, and streaming services, 1% on other purchases",
                    introOffer: "$200",
                    img: "https://ecm.capitalone.com/WCM/card/products/new-savor-card-art/mobile.png",
                },
            ],
        },
        {
            tier: "Tier 2: No Annual Fee Cards",
            cards: [
                {
                    name: "Chase Freedom Unlimited",
                    annualFee: "$0",
                    rewards: "5% on travel through Chase Ultimate Rewards, 3% on dining and drugstores, 1.5% on other purchases",
                    introOffer: "$200",
                    img: "https://creditcards.chase.com/K-Marketplace/images/cardart/freedom_unlimited_card.png",
                },
                {
                    name: "Citi Custom Cash",
                    annualFee: "$0",
                    rewards: "5% on your top spend category, 1% on other purchases",
                    introOffer: "$200",
                    img: "https://www.citi.com/CRD/images/citi-custom-cash/citi-custom-cash_222x140.png",
                },
                {
                    name: "American Express Blue Cash Everyday",
                    annualFee: "$0",
                    rewards: "3% on gas, groceries, and online shopping, 1% on other purchases",
                    introOffer: "$200",
                    img: "https://icm.aexp-static.com/acquisition/card-art/NUS000000305_480x304_straight_withname.png",
                },
            ],
        },
        {
            tier: "Tier 3: Mid Tier Cards",
            cards: [
                {
                    name: "Chase Sapphire Preferred",
                    annualFee: "$95",
                    rewards: "5x on travel via Chase, 3x on dining, 2x on travel, 1x on other purchases",
                    perks: "25% more value on travel redemptions, $50 annual travel credit",
                    introOffer: "60,000 points",
                    img: "https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_preferred_card.png",
                },
                {
                    name: "Capital One Venture Rewards",
                    annualFee: "$95",
                    rewards: "5 miles per dollar on travel via Capital One, 2 miles on other purchases",
                    perks: "$100 Global Entry Credit",
                    introOffer: "75,000 miles",
                    img: "https://ecm.capitalone.com/WCM/card/products/venture-card-art/mobile.png",
                },
                {
                    name: "American Express Gold",
                    annualFee: "$325",
                    rewards: "4x points on restaurants and supermarkets, 3x on flights, 1x on other purchases",
                    perks: "$120 Uber Cash, $120 Dining Credit",
                    introOffer: "60,000 points",
                    img: "https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/gold-card.png",
                },
            ],
        },
        {
            tier: "Tier 4: Premium Cards",
            cards: [
                {
                    name: "Chase Sapphire Reserve",
                    annualFee: "$550",
                    rewards: "10x points on hotels and dining through Chase Ultimate Rewards",
                    perks: "50% more value when you redeem for travel through Chase, $300 Annual Travel Credit, $100 Global Entry",
                    introOffer: "60,000 points",
                    img: "https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_reserve_card.png",
                },
                {
                    name: "Capital One Venture X",
                    annualFee: "$395",
                    rewards: "10 miles per dollar on hotels and rental cars through Capital One Travel, 5 miles on flights through Capital One, 2 miles on all other purchases",
                    perks: "10,000 Miles Anniversary Bonus, $300 Annual Travel Credit, $100 Global Entry",
                    introOffer: "75,000 miles",
                    img: "https://www.nerdwallet.com/cdn-cgi/image/width=1000,quality=85/cdn/images/marketplace/credit_cards/5310581c-475f-11ee-92db-7b6738046e2a/e22bfd43a435dd8d16ddaf59573f9af031859e0fed221f83da3682981c4dc82b.jpg" ,
                },
                {
                    name: "American Express Platinum",
                    annualFee: "$695",
                    rewards: "5x on flights and hotels through Amex Travel, 1x on all other purchases.",
                    perks: "$200 Hotel Credit, $200 Uber Cash, $200 Airline Fee Credit, $189 CLEAR Plus Credit",
                    introOffer: "125,000 reward points",
                    img: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2018/03/amex-platinum-April-2021.png",
                },
            ],
        },
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mt-6 mb-8 text-green-500">Credit Cards</h1>
            {cardTiers.map((tier, index) => (
                <div
                    key={index}
                    className="mb-8 border border-gray-300 rounded-lg shadow-md bg-white p-6"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{tier.tier}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tier.cards.map((card, cardIndex) => (
                            <div
                                key={cardIndex}
                                className="p-4 border rounded-lg shadow-md flex flex-col bg-gray-50 hover:shadow-lg transition"
                            >
                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className="mb-4 rounded-lg object-cover h-50 w-full sm:h-32 md:h-60 lg:h-72"
                                />
                                <h3 className="text-lg font-bold text-gray-700">{card.name}</h3>
                                <p className="text-sm text-gray-600">
                                    <strong>Annual Fee:</strong> {card.annualFee}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Rewards Rate:</strong> {card.rewards}
                                </p>
                                {card.perks && (
                                    <p className="text-sm text-gray-600">
                                        <strong>Perks:</strong> {card.perks}
                                    </p>
                                )}
                                <p className="text-sm text-gray-600">
                                    <strong>Intro Offer:</strong> {card.introOffer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
