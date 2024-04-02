import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom'



const AddPatient = () => {
  const [UserId, setUserId] = useState('');
  const [SickDate, setSickDate] = useState('');
  const [RecoveryDate, setRecoveryDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
          let er1=true;
    try {
        if (!UserId || !SickDate || !RecoveryDate) {
          window.alert("Not enough data has been entered");
        }
        if(SickDate>RecoveryDate){window.alert("תאריכים לא חוקיים")}
        try{
            // בדיקת קיום משתמש
            const existingUser = await axios.post('http://localhost:5000/api/v1/users/GetUserById', { UserId: UserId });
          
            if (!existingUser) {
              window.alert("לא קיים לקוח כזה");
              return;
            }}
          catch(err){     
               window.alert("לא קיים לקוחח כזה");
                er1= false;
        }
        try{
        const response = await axios.post(`http://localhost:5000/api/v1/patients/GetPatientByUserId/${UserId}`);
        if (response.data) {window.alert(" קיים חולה כזה"); }
        }catch(err){console.log(err);}
       const sickDate1 = new Date(SickDate); 
       const RecoveryDate1 =new Date(RecoveryDate)
        let user ={
            UserId: UserId,
            SickDate: sickDate1.toISOString().substring(0, 10),
            RecoveryDate: RecoveryDate1.toISOString().substring(0, 10),
          }
          if(er1){
        await axios.post('http://localhost:5000/api/v1/patients/AddPatient', user);
        alert('נתוני המחלה נקלטו בהצלחה');
        resetForm();}
      } catch (err) {
          console.log(err);
        
      }
    };

    
 const resetForm = () => {
  setUserId('');
  setSickDate('');
  setRecoveryDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="UserId">תעודת זהות:</label>
      <input
        type="text"
        id="UserId"
        name="UserId"
        value={UserId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <label htmlFor="SickDate">תאריך תחילת מחלה:</label>
      <input
        type="date"
        id="SickDate"
        name="SickDate"
        value={SickDate}
        onChange={(e) => setSickDate(e.target.value)}
      />

      <label htmlFor="RecoveryDate">תאריך החלמה:</label>
      <input
        type="date"
        id="RecoveryDate"
        name="RecoveryDate"
        value={RecoveryDate}
        onChange={(e) => setRecoveryDate(e.target.value)}
      />

      <button type="submit" onClick={handleSubmit}>הוסף חולה</button>
    </form>
  );
};

export default AddPatient;
