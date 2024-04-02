const getManufacturerNameById = "SELECT ManufacturerName FROM Manufacturer WHERE ManufacturerId = ? "
const getManufacturerIdByName = "SELECT ManufacturerId FROM Manufacturer WHERE ManufacturerName = ? "
const addManufacturer = "INSERT INTO Manufacturer (ManufacturerId, ManufacturerName) VALUES(?,?)"
const getAllManufacturers = "SELECT *  FROM Manufacturer"
export default {
    getManufacturerNameById,
    addManufacturer,
    getAllManufacturers,
    getManufacturerIdByName
}
