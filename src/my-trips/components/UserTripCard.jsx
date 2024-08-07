import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function UserTripCard({trip}) {

    const [photoUrl,setPhotoUrl] = useState()

    useEffect(()=>{
        trip&&GetPlacePhoto();
    },[trip])

    const GetPlacePhoto=async()=>{
        const data={
            textQuery:trip?.userSelection?.location?.label
        }

        const result=await GetPlaceDetails(data).then(resp=>{
            console.log(resp.data.places[0].photos[3].name)

            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
            setPhotoUrl(PhotoUrl)
        })
    }

  return (
    <Link to={'/view-trip/' + trip?.id}>
        <div className='hover:scale-105 transition-all'>
            <img className='object-cover rounded-xl h-[220px]' src={photoUrl?photoUrl : 'unavailable-image.jpg'} />
            <div>
                <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
                <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Day trip with {trip?.userSelection?.budget} budget</h2>
            </div>
        </div>
    </Link>
  )
}

export default UserTripCard