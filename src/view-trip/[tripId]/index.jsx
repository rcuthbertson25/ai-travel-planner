import { db } from '@/service/filebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import Footer from '../components/Footer'
import Hotels from '../components/Hotels'
import InfoSection from '../components/InfoSection'
import PlacesToVisit from '../components/PlacesToVisit'

function Viewtrip() {

    const {tripId} = useParams()
    const [trip,setTrip] = useState()

    useEffect(()=>{
        tripId && GetTripData();
    },[tripId])

    // Get trip data from firebase
    const GetTripData = async ()=>{
        const docRef = doc(db,'AITrips',tripId);
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            console.log('Document:',docSnap.data())
            setTrip(docSnap.data())
        }
        else {
            console.log('No Such Document')
            toast('No trip found')
        }
    }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* Information Section */}
        <InfoSection trip={trip} />
      {/* Recommended Hotels */}
        <Hotels trip={trip} />
      {/* Daily Plan */}
        <PlacesToVisit trip={trip} />
      {/* Footer */}
        <Footer trip={trip} />

    </div>
  )
}

export default Viewtrip
