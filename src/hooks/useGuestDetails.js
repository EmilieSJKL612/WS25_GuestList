
import { useState, useEffect } from "react";

const useGuestDetails = (guestId) => {
    const [guestDetails, setGuestDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    // REQUIREMENT: useEffect is used to isolate data-fetching logic
    useEffect(() => {
      if (!guestId) {
        setGuestDetails(null);
        return;
      }
  
      const fetchGuestDetails = async () => {
        try {
          setLoading(true);
          setError(null);
          
          // RQ7
          const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/guests/${guestId}`);
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          setGuestDetails(data.data);
        } 
        catch (err) {
          setError(err.message);
          console.error('Error fetching guest details:', err);
          
          
        //Em: try2 added - to test/check even when HTTP 500 error (happened during my try1 test, not sure why) occurred 
          const placeholderGuests = {
            1: {
              id: 1,
              name: "John Doe",
              email: "john.doe@example.com",
              phone: "(333) 123-4567",
              bio: "Software developer with 6 years of experience in React and Java Script. Successfully built several user-friendly applications.",
              job: "Senior Software Developer"
            },
            2: {
              id: 2,
              name: "Jane Smith",
              email: "jane.smith@example.com",
              phone: "(333) 987-6543",
              bio: "Marketing professional specializing in digital campaigns and brand strategy. Led successful campaigns that increased brand awareness by 87%.",
              job: "Marketing Manager"
            },
            3: {
              id: 3,
              name: "Bob Johnson",
              email: "bob.johnson@example.com",
              phone: "(333) 456-7890",
              bio: "Data analyst with expertise in machine learning and statistical modeling. Published three research papers on predictive analytics in business intelligence.",
              job: "Data Analyst"
            }
          };
          
          setGuestDetails(placeholderGuests[guestId] || null);
        } 
        finally {
          setLoading(false);
        }
      };
  
      fetchGuestDetails();
    }, [guestId]);
  
    return { guestDetails, loading, error };
  };
  
  export default useGuestDetails;
