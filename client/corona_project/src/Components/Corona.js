import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Corona = () => {
  const [unvaccinatedUsersCount, setUnvaccinatedUsersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Added for loading state
  const [error, setError] = useState(null); // Added for error handling

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get('http://localhost:5000/api/v1/vaccinations/getNumPeopleDidntGetYet');
        console.log(response.data+"jhgfdfghj");
        setUnvaccinatedUsersCount(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error); // Store error for potential display
      } finally {
        setIsLoading(false); // Set loading state to false after fetch (success or error)
      }
    };

    fetchData();
  }, []);

  // Handle loading and error states appropriately in your JSX (optional)
  if (isLoading) {
    return <div>טוען נתונים...</div>; // Display loading message in Hebrew
  }

  if (error) {
    return <div>שגיאה: {error.message}</div>; // Display user-friendly error
  }

  return (
    <div>
      <p>מספר משתמשים שלא התחסנו: {unvaccinatedUsersCount}</p>
    </div>
  );
};

export default Corona;
