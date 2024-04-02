import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AddUpdateUser from '../pages/AddUpdateUser';
const ShowUserVaccination = ({ UserId }) => {
  const [vaccinationData, setVaccinationData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('http://localhost:5000/api/v1/vaccinations/GetUserVaccinations',{UserId: UserId});
      setVaccinationData(response.data);
    };
    fetchData();
  }, [UserId]);

  if (vaccinationData==null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    {vaccinationData[0] && <>
      <h2>היסטוריית חיסונים</h2>
      <ul>
        {vaccinationData.map((vaccination) => (
          <li key={vaccination.VaccinationId}>
            <p>
              <strong>תאריך החיסון:</strong> {vaccination.DateOfVaccination.substring(0, 10)}
            </p>
            <p>
              <strong>מספר חיסון:</strong> {vaccination.VaccinationNumber}
            </p>
            <p>
              <strong>יצרן:</strong> {vaccination.ManufacturerName}
            </p>
          </li>
        ))}
      </ul></>
}
    </div>
  );
};

export default ShowUserVaccination;