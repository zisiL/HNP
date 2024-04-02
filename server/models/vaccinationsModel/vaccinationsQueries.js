const numOfPeopleDidNotNotGetV="SELECT COUNT(*) AS num_unvaccinated_users FROM Users u LEFT JOIN Vaccinations v ON u.UserId = v.UserId WHERE v.UserId IS NULL;"

const getVaccinationsByUserId = "SELECT UserId,VaccinationId,DateOfVaccination,VaccinationNumber,ManufacturerName FROM  Vaccinations natural join Manufacturer WHERE UserId = ?"
const addVaccination = "INSERT INTO vaccinations(UserId, DateOfVaccination, VaccinationNumber, ManufacturerId) VALUES(?,?,?,?)"
const getNumUserVaccinations = "SELECT COUNT(*) AS total FROM vaccinations WHERE UserId = ?"
export default
{
    getVaccinationsByUserId,
    addVaccination,
    getNumUserVaccinations,
    numOfPeopleDidNotNotGetV
    
}