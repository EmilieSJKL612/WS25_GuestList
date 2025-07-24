
import React from "react";


const GuestDetails = ({ guest, onBack, loading, error }) => {
    if (loading) {
      return <div className="loading">Loading guest details...</div>;
    }
  
    if (error) {
      return <div className="error">Error loading guest details: {error}</div>;
    }
  
    if (!guest) {
      return <div className="error">Guest not found</div>;
    }
  
    return (
      <div>
        <h1>Guest Details</h1>
        <div className="guest-details">
          {/* RQ3 + Em: use strong tags for bold display here on infos */}
          <h2>{guest.name}</h2>
          <p><strong>Email:</strong> {guest.email}</p>
          <p><strong>Phone:</strong> {guest.phone}</p>
          <p><strong>Job:</strong> {guest.job}</p>
          <p><strong>Bio:</strong> {guest.bio}</p>
        </div>
        {/* RQ4 */}
        <button className="back-button" onClick={onBack}>
          Back to Guest List
        </button>
      </div>
    );
  };
  
  export default GuestDetails;


