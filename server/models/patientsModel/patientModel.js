import ConnectDB from "../../db/connect.js"
import PatientQueries from "./patientQueries.js"
 export const AddPatient= async (UserId, SickDate , RecoveryDate)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const patient = (await pool.query(PatientQueries.addPatient,[UserId, SickDate , RecoveryDate]))[0]
        return patient;
    } catch(err) {
        console.log('Error: ', err);
    }
}
 export const GetPatientById=async(UserId)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const patient= (await pool.query(PatientQueries.getPatientById, [UserId]))[0]
             return patient;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const GetPatient=async(UserId)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        
        const pat= (await pool.query(PatientQueries.getPatient, [UserId]))[0]
             return pat;
    } catch(err) {
        console.log('Error: ', err);
    }
}

 export const GetAllPatients =async()=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        
            const patients = (await pool.query(PatientQueries.getAllPatients))
             if(patients)
             return patients;
        return []
    } catch(err) {
        console.log('Error: ', err);
    }
}

