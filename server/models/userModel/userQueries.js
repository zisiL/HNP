
const getAllUsers="SELECT * FROM Users"
const getUserById = "SELECT * FROM Users where UserId = ?"
const addUser="INSERT INTO Users (UserId,FirstName,LastName,City,Street,HouseNumber,BirthDate, PhoneNumber,CellPhone) VALUES(?,?,?,?,?,?,?,?,?)"
const deleteUser = "DELETE FROM Users WHERE UserId = ?"
const updateUserDetails = "UPDATE Users SET FirstName = ?,LastName = ?,City = ?,Street = ?,HouseNumber = ?,BirthDate = ?, PhoneNumber = ?, Cellphone = ?  WHERE UserId = ?"
export default {
    getAllUsers,
    getUserById,
    addUser,
    updateUserDetails,deleteUser
}