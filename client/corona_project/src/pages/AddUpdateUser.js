import { useState, useEffect } from 'react'
import axios from 'axios'
import Patient from '../Components/Patient.js';
import { useParams } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import ShowUserVaccination from '../Components/ShowUserVaccination.js'

  function AddUpdateUser({status}) {
    const navigate = useNavigate();
      const UserId=useParams().id
    const [user, setUser] = useState({UserId: "",FirstName:"",LastName: "",City: "",Street: "",HouseNumber: "",BirthDate: "", PhoneNumber: "", CellPhone: ""});
    useEffect(() => {
        if (status=="update"){
            getUser();
        }
    }, []);
    const getUser = async()=>
 {
    console.log(UserId)
    if (UserId) {
        const fetchData = async () => {
          const response = await axios.post('http://localhost:5000/api/v1/users/GetUserById',{UserId: UserId})
          let data=response.data
          data.BirthDate=data.BirthDate.substring(0,10);
          setUser(data);
        };
        fetchData();
      }
 }


    const handleSubmit = async (e) => {
      e.preventDefault();

  
      
        if (status === 'add') {
          try {
            if (!user.UserId || !user.FirstName || !user.LastName || !user.City || !user.Street || !user.HouseNumber || !user.BirthDate || !user.PhoneNumber || !user.CellPhone) {
              window.alert("Not enough data has been entered");
            }
            const existingUser = await axios.post('http://localhost:5000/api/v1/users/GetUserById', { UserId: user.UserId });
            if (existingUser) { window.alert("קיים משתמש כזה"); }
          } catch (err) {
            await axios.post('http://localhost:5000/api/v1/users/AddUser', user);
            alert('המשתמש נוסף בהצלחה!');
            navigate("/users");
          }
        }
      else {
        await axios.put('http://localhost:5000/api/v1/users/UpdateUser',user);
        // הצג הודעה שהמשתמש עודכן
        alert('המשתמש עודכן בהצלחה!');
        navigate("/users")
      }
  };
    const changeHandler = e => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    
   
  return (
    <div>
      <h1>{status === 'add' ? 'הוספת משתמש חדש' : 'עדכון פרטי משתמש'}</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="UserId">תז :</label>
        <input type="text" id="UserId" name="UserId" value={user.UserId} onChange={changeHandler} disabled={status === "update"}   />
        <br />
        <label htmlFor="FirstName">שם פרטי:</label>
        <input type="text" id="FirstName" name="FirstName" value={user.FirstName} onChange={changeHandler} />
        <br />
        <label htmlFor="LastName">שם משפחה:</label>
        <input type="text" id="LastName" name="LastName" value={user.LastName} onChange={changeHandler}/>
        <br />
        <label htmlFor="city">עיר:</label>
        <input type="text" id="city" name="City" value={user.City} onChange={changeHandler} />
        <br />
        <label htmlFor="Street">רחוב:</label>
        <input type="text" id="Street" name="Street" value={user.Street} onChange={changeHandler} />
        <br />
        <label htmlFor="HouseNumber">מספר בית:</label>
        <input type="number" id="HouseNumber" name="HouseNumber" value={user.HouseNumber} onChange={changeHandler} />
        <br />
        <label htmlFor="BirthDate">תאריך לידה:</label>
        <input type="date" id="BirthDate" name="BirthDate" value={user.BirthDate} onChange={changeHandler}/>
        <br />
        <label htmlFor="PhoneNumber">מספר טלפון:</label>
        <input type="tel" id="PhoneNumber" name="PhoneNumber" value={user.PhoneNumber} onChange={changeHandler} />
        <br />
        <label htmlFor="CellPhone">נייד:</label>
        <input type="tel" id="CellPhone" name="CellPhone" value={user.CellPhone} onChange={changeHandler}/>
        <br />
        {status=="update"&&<Patient  UserId={user.UserId} ></Patient>}
       {status=="update"&&<ShowUserVaccination  UserId={user.UserId}></ShowUserVaccination>}
        <button type="submit" onClick={handleSubmit}>{status === 'add' ? 'הוסף משתמש' : 'עדכן משתמש'}</button>
      </form>
    </div>
  );
  }
  export default AddUpdateUser