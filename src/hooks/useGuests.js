
import { useState, useEffect } from 'react';

// RQ9
const useGuests = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // RQ8 (not certain if I understood 100% correctly) - use useEffect to isolate data-fetching logic
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // RQ6
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/guests');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setGuests(data.data || []);
      } 
      catch (err) {
        setError(err.message);
        console.error('Error fetching guests:', err);

    
        //Em: try2 added - to test/check even when HTTP 500 error (happened during my try1 test, not sure why) occurred 
        //Em: info of example "people" copied from CS164's labs lol         
        setGuests([
          {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "(333) 123-4567",
            bio: "Software developer with 6 years of experience in React and Java Script.",
            job: "Senior Software Developer"
          },
          {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "(333) 987-6543",
            bio: "Marketing professional specializing in digital campaigns and brand strategy.",
            job: "Marketing Manager"
          },
          {
            id: 3,
            name: "Bob Johnson",
            email: "bob.johnson@example.com",
            phone: "(333) 456-7890",
            bio: "Data analyst with expertise in machine learning and statistical modeling.",
            job: "Data Analyst"
          }
        ]);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  return { guests, loading, error };
};

export default useGuests;

