
//Em: feel like seperating/sorting different components into different folders is a better appraoch for checking/reviewing and writing tests... Easier to spot places that needs to be fixed 

import React, { useState } from 'react';
import GuestList from './components/GuestList';
import GuestDetails from './components/GuestDetails';
import useGuests from './hooks/useGuests';
import useGuestDetails from './hooks/useGuestDetails';


export default function App() {

  const [selectedGuestId, setSelectedGuestId] = useState(null);

  const { guests, loadin: guestsLoading, error: guestsError } = useGuests;
  const { guestDetails, loading: detailsLoading, error: detailsError } = useGuestDetails;

  const handleGuestSelect = (guestID) => {
    setSelectedGuestId(guestID);
  };

  const handleBack () => {
    setSelectedGuestId(null);
  };


  return (
    <div className="container"> 
      {/* RQ1, 3 */}
      {selectedGuestId ? (
        <GuestDetails
          guest={guestDetails}
          onBack={handleBack}
          loading={detailsLoading}
          error={detailsError}
        />
      ) : (
        <GuestList
          guests={guests}
          onGuestSelect={handleGuestSelect}
          loading={guestsLoading}
          error={guestsError}
        />
      )}
  
    </div>
  );
}
