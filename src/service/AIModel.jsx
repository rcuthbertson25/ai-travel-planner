import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list (ensure no duplicates) with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with day(ie. 'day': 1), placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit (ie. 9:00am - 10:00am). Provide in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"travelPlan\": {\n    \"location\": \"Las Vegas\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\",\n    \"hotels\": [\n      {\n        \"hotelName\": \"The D Las Vegas\",\n        \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n        \"price\": \"$60 - $100 per night\",\n        \"hotelImageURL\": \"https://www.the-d.com/images/gallery/hotel/the-d-hotel-exterior-01.jpg\",\n        \"geoCoordinates\": \"36.1699° N, 115.1399° W\",\n        \"rating\": 4.0,\n        \"description\": \"Located in the heart of Fremont Street, The D offers affordable rooms, a casino, and a rooftop pool with city views.\"\n      },\n      {\n        \"hotelName\": \"Golden Nugget Las Vegas\",\n        \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n        \"price\": \"$70 - $120 per night\",\n        \"hotelImageURL\": \"https://www.goldennugget.com/las-vegas/images/golden-nugget-exterior.jpg\",\n        \"geoCoordinates\": \"36.1695° N, 115.1407° W\",\n        \"rating\": 4.5,\n        \"description\": \"Known for its impressive shark tank, the Golden Nugget offers a variety of dining options, entertainment, and a casino.\"\n      },\n      {\n        \"hotelName\": \"Circus Circus Hotel & Casino\",\n        \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n        \"price\": \"$50 - $80 per night\",\n        \"hotelImageURL\": \"https://www.circuscircus.com/media/images/hotels/circus-circus-las-vegas/exterior-day.jpg\",\n        \"geoCoordinates\": \"36.1053° N, 115.1721° W\",\n        \"rating\": 3.5,\n        \"description\": \"A classic Las Vegas hotel with a circus theme, Circus Circus features a variety of family-friendly entertainment and a large casino.\"\n      },\n      {\n        \"hotelName\": \"The Orleans Hotel & Casino\",\n        \"hotelAddress\": \"4500 W Tropicana Ave, Las Vegas, NV 89103\",\n        \"price\": \"$65 - $105 per night\",\n        \"hotelImageURL\": \"https://www.orleanscasino.com/media/images/hotel/exterior-hotel-wide.jpg\",\n        \"geoCoordinates\": \"36.0964° N, 115.1999° W\",\n        \"rating\": 4.0,\n        \"description\": \"Offering a relaxed atmosphere, The Orleans features a casino, multiple dining options, a bowling alley, and a spa.\"\n      }\n    ],\n    \"itinerary\": [\n      {\n        \"day\": 1,\n        \"activities\": [\n          {\n            \"placeName\": \"Fremont Street Experience\",\n            \"placeDetails\": \"Walk under the iconic canopy, enjoy street performers, and experience the vibrant atmosphere of Fremont Street.\",\n            \"placeImageURL\": \"https://www.fremontstreetexperience.com/sites/default/files/styles/fp-hero-image/public/hero-images/hero-fremont-street-experience-01-2.jpg?itok=4H47G8_F\",\n            \"geoCoordinates\": \"36.1699° N, 115.1400° W\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.5,\n            \"time\": \"9:00am - 12:00pm\"\n          },\n          {\n            \"placeName\": \"The Neon Museum\",\n            \"placeDetails\": \"Explore the history of Las Vegas through iconic neon signs preserved in this outdoor museum.\",\n            \"placeImageURL\": \"https://www.neonmuseum.org/sites/default/files/styles/hero_image/public/hero-images/2020-11-04_neonmuseum-exterior_0.jpg\",\n            \"geoCoordinates\": \"36.1705° N, 115.1453° W\",\n            \"ticketPricing\": \"$20 - $30\",\n            \"rating\": 4.0,\n            \"time\": \"1:00pm - 3:00pm\"\n          },\n          {\n            \"placeName\": \"Arts District\",\n            \"placeDetails\": \"Stroll through this trendy neighborhood, visit art galleries, and enjoy the street art murals.\",\n            \"placeImageURL\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_large/public/images/things-to-do/arts-district.jpg\",\n            \"geoCoordinates\": \"36.1676° N, 115.1361° W\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.0,\n            \"time\": \"4:00pm - 6:00pm\"\n          }\n        ]\n      },\n      {\n        \"day\": 2,\n        \"activities\": [\n          {\n            \"placeName\": \"Hoover Dam\",\n            \"placeDetails\": \"Take a day trip to the iconic Hoover Dam and learn about its history and engineering marvel.\",\n            \"placeImageURL\": \"https://www.nps.gov/hdam/learn/nature/images/hoover_dam_overview_sm.jpg\",\n            \"geoCoordinates\": \"36.0290° N, 114.9635° W\",\n            \"ticketPricing\": \"$30 - $40\",\n            \"rating\": 4.5,\n            \"time\": \"9:00am - 1:00pm\"\n          },\n          {\n            \"placeName\": \"Red Rock Canyon National Conservation Area\",\n            \"placeDetails\": \"Hike through scenic trails, enjoy breathtaking rock formations, and explore the natural beauty of Red Rock Canyon.\",\n            \"placeImageURL\": \"https://www.nps.gov/redr/learn/nature/images/red_rock_canyon_trail_sm.jpg\",\n            \"geoCoordinates\": \"36.1423° N, 115.2052° W\",\n            \"ticketPricing\": \"$15\",\n            \"rating\": 4.5,\n            \"time\": \"2:00pm - 5:00pm\"\n          }\n        ]\n      },\n      {\n        \"day\": 3,\n        \"activities\": [\n          {\n            \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n            \"placeDetails\": \"Admire the stunning floral displays and seasonal themes in this beautiful conservatory.\",\n            \"placeImageURL\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory/conservatory-hero.jpg\",\n            \"geoCoordinates\": \"36.1159° N, 115.1727° W\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.5,\n            \"time\": \"10:00am - 12:00pm\"\n          },\n          {\n            \"placeName\": \"The Venetian and The Palazzo\",\n            \"placeDetails\": \"Explore the Grand Canal Shoppes, admire the elaborate architecture, and enjoy the Venetian atmosphere.\",\n            \"placeImageURL\": \"https://www.venetian.com/content/dam/venetian/images/hero-images/hero-venetian-exterior-daytime-wide.jpg\",\n            \"geoCoordinates\": \"36.1202° N, 115.1707° W\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.0,\n            \"time\": \"1:00pm - 4:00pm\"\n          },\n          {\n            \"placeName\": \"The LINQ Promenade\",\n            \"placeDetails\": \"Walk along the outdoor shopping and dining promenade, enjoy the High Roller observation wheel, and experience the lively atmosphere.\",\n            \"placeImageURL\": \"https://www.thelinq.com/sites/default/files/styles/hero-image-breakpoint-768/public/hero-images/thelinq-hero.jpg?itok=N8k3R_Q4\",\n            \"geoCoordinates\": \"36.1227° N, 115.1713° W\",\n            \"ticketPricing\": \"Free\",\n            \"rating\": 4.0,\n            \"time\": \"5:00pm - 7:00pm\"\n          }\n        ]\n      }\n    ]\n  }\n}\n```"},
          ],
        },
      ],
});