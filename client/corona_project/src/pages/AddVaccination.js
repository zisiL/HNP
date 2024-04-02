import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AddVaccination = () => {
  const [UserId, setUserId] = useState('');
  const [DateOfVaccination, setDateOfVaccination] = useState('');
  const [ManufacturerId, setManufacturerId] = useState('');
  const [Manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    const fetchManufacturers = async () => {
        try{
      const response = await axios.get('http://localhost:5000/api/v1/Manufacturers/showManufacturers');
      setManufacturers(response.data);
        }catch(err){console.log(err);}
    };
    fetchManufacturers();
  }, []);



  const handleSubmit = async (e) => {
      let er1= true;
    //   let er2=true;
    e.preventDefault();
  
    if (!UserId || !DateOfVaccination || !ManufacturerId) {
      alert('נא למלא את כל השדות');
      return;
    }
  try{
    // בדיקת קיום משתמש
    const existingUser = await axios.post('http://localhost:5000/api/v1/users/GetUserById', { UserId: UserId });
  
    if (!existingUser) {
      window.alert("לא קיים mmmmmמשתמש כזה");
      return;
    }}
  catch(err){     
       window.alert("לא קיים משתמש כזה");
        er1= false;
}
// try{
//     const numVacc = await axios.post('http://localhost:5000/api/v1/vaccinations/ShowUserVaccinationsNum', { UserId: UserId });

//     //     numVacc.then((response) => {
//     //     // 'response' מכיל את נתוני התגובה
//     //     const total = response.data.total;
//     //     console.log(total + "tytytytytytytytytytytyt");
//     //     if (total >= 4) {
//     //       window.alert("יותר מ4 חיסונים");
//     //       er2 = false;
//     //     }
//     //   });
//       if(numVacc){
//     console.log(numVacc.total+"tytytytytytytytytytytyt");
//     if(numVacc.total.text>=4){     
//           window.alert("יותר מ4 חיסונים");
//           er2=false
//         }}
//     }catch(err){console.log(err);}
    // הוספת חיסון
    const vaccination = {
      UserId: UserId,
      DateOfVaccination: DateOfVaccination,
      ManufacturerName: ManufacturerId,
    };
  
    try {
        if(er1){
      const response = await axios.post('http://localhost:5000/api/v1/vaccinations/AddVaccination', vaccination);
      alert('החיסון נוסף בהצלחה!');
      resetForm();
        }
    } catch (err) {
      console.log(err);
    }
  };
  
  const resetForm = () => {
    setUserId('');
    setDateOfVaccination('');
    setManufacturerId('');
  };

  return (
    <div id="add-vaccination">
      <h2>הוספת חיסון חדש</h2>
      <form onSubmit={handleSubmit}>
        <label for="UserId">תעודת זהות:</label>
        <input
          type="text"
          id="userId"
          name="UserId"
          value={UserId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <br />
        <label for="dateOfVaccination">תאריך החיסון:</label>
        <input
          type="date"
          id="dateOfVaccination"
          name="DateOfVaccination"
          value={DateOfVaccination}
          onChange={(e) => setDateOfVaccination(e.target.value)}
          required
        />
        <br />
        <label for="manufacturerId">יצרן החיסון:</label>
        <select
          id="manufacturerId"
          name="ManufacturerId"
          value={ManufacturerId}
          onChange={(e) => setManufacturerId(e.target.value)}
          required
        >
          <option value="">בחר יצרן...</option>
          {Manufacturers.map((manufacturer) => (
            <option key={manufacturer.ManufacturerId} value={manufacturer.ManufacturerName}>
              {manufacturer.ManufacturerName}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">הוסף חיסון</button>
      </form>
    </div>
  );
};

export default AddVaccination;