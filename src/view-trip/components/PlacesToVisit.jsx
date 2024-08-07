import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {
    return (
        <div>
            <div className='flex items-center'>
                <h2 className='font-bold text-xl mt-5'>Places to Visit</h2>
                <p className='mt-5 text-gray-600 ml-2'>(All attractions are within reasonable walking/driving distance)</p>
            </div>
            <div>
                {trip?.tripData?.travelPlan?.itinerary.map((item, index) => (
                    <div className='mt-5'>
                        <h2 className='font-medium text-lg'>Day {item.day}</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {item.activities.map((place, index) => (
                                <div className='my-2'>
                                    <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                                    <PlaceCardItem place={place} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlacesToVisit