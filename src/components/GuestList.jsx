
import React from "react";

// RQ1
const GuestList = ({ guests, onGuestSelect, loading, error }) => {
    if (loading) {
      return <div className="loading">Loading guests...</div>;
    }
  
    if (error) {
      return <div className="error">Error loading guests: {error}</div>;
    }
  
    return (
      <div>
        <h1>Guest List</h1>
        <div className="guest-list">
          {guests.map((guest) => (
            <div
              key={guest.id}
              className="guest-item"
              // RQ2
              onClick={() => onGuestSelect(guest.id)}
            >
              {/* RQ1 */}
              <h3>{guest.name}</h3>
              <p>{guest.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
