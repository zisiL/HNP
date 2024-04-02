import ConnectDB from "../../db/connect.js"
import VaccinationsQueries from "./vaccinationsQueries.js"
 
export const AddVaccination = async (UserId, DateOfVaccination, VaccinationNumber, ManufacturerId)=>{
    const pool = ConnectDB.getConnectionPool()
    try {
             const Vaccination = (await pool.query(VaccinationsQueries.addVaccination,[UserId, DateOfVaccination, VaccinationNumber, ManufacturerId.ManufacturerId]))[0]
             return Vaccination;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const GetUserVaccinations = async (UserId)=>{
    const pool = ConnectDB.getConnectionPool()
    try {
             const Vaccinations = (await pool.query(VaccinationsQueries.getVaccinationsByUserId,[UserId]))
             if(Vaccinations)
             return Vaccinations;
        return []
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const GetNumUserVaccinations = async (UserId)=>{
    const pool = ConnectDB.getConnectionPool()
    try {
             const numOfVacc = (await pool.query(VaccinationsQueries.getNumUserVaccinations,[UserId]))[0]
             if(numOfVacc)
             return numOfVacc;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const NumOfPeopleDidNotNotGetV =async()=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
            const numVaccinations = (await pool.query(VaccinationsQueries.numOfPeopleDidNotNotGetV))[0]
             if(numVaccinations)
             return numVaccinations;
    } catch(err) {
        console.log('Error: ', err);
    }
}