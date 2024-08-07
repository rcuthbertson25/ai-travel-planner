export const SelectTravelList=[
    {
        id:1,
        title:'Just Me',
        desc:'Who needs anyone else to have fun?',
        icon:'🧍',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travels in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adventure',
        icon:'👨‍👩‍👧',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'🍹',
        people:'5 to 10 People'
    }
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'🪙'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💵'
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸'
    }
]

export const AI_PROMPT="Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list (ensure no duplicates) with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with day(ie. 'day': 1), placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit (ie. 9:00am - 10:00am). Provide in JSON format."