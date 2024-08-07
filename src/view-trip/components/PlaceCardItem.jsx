import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
import React, {useState, useEffect} from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function PlaceCardItem({ place }) {

    const [photoUrl,setPhotoUrl] = useState()

    useEffect(()=>{
        place&&GetPlacePhoto();
    },[place])

    const GetPlacePhoto=async()=>{
        const data={
            textQuery:place.placeName
        }

        const result=await GetPlaceDetails(data).then(resp=>{
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
            setPhotoUrl(PhotoUrl)
        })
    }

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName} target='_blank' >
            <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
                <img src={photoUrl?photoUrl:'/unavailable-image.jpg'} className='w-[130px] h-[130px] rounded-xl object-cover' />
                <div>
                    <h2 className='font-bold text-lg'>{place.placeName}</h2>
                    <p className='text-sm text-gray-400'>{place.placeDetails}</p>
                </div>
            </div>
        </Link>
    )
}

export default PlaceCardItem