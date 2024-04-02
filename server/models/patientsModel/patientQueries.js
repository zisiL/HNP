const getPatientById = "SELECT FirstName,LastName,PhoneNumber,SickDate,RecoveryDate FROM Patients natural join Users WHERE UserId = ?"
const getPatient = "SELECT * FROM Patients WHERE UserId =?"
const addPatient = "INSERT INTO Patients (UserId, SickDate , RecoveryDate) VALUES(?,?,?)"
const deletePatient = "DELETE FROM Patients WHERE UserId =? "
 const getAllPatients = "SELECT * FROM Patients natural join Users"
export default{
    getPatientById,
    addPatient,
    deletePatient,
    getAllPatients,
    getPatient

}