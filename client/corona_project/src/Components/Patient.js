import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Patient = ({ UserId }) => {
  const [illnessData, setIllnessData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `http://localhost:5000/api/v1/patients/GetPatientByUserId/${UserId}`
        );
        if (response.data) {
          setIllnessData(response.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [UserId]);

  if (isLoading) {
    return <div>טוען נתונים...</div>;
  }

  if (!illnessData) {
    return null; // לא מציג את הקומפוננטה אם אין נתונים
  }

  return (
    <div>
      <h2>פרטי מחלה והחלמה</h2>
      {illnessData && (
        <>
          <p>
            <strong>תאריך תחילת המחלה:</strong>{' '}
            {illnessData.SickDate.substring(0, 10)}
          </p>
          <p>
            <strong>תאריך החלמה:</strong>{' '}
            {illnessData.RecoveryDate.substring(0, 10)}
          </p>
        </>
      )}
    </div>
  );
};

export default Patient;
