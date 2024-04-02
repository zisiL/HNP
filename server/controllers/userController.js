import { StatusCodes } from "http-status-codes";
import { AddUser,GetUserById,  GetAllUsers ,DeleteUser,   UpdateUserDetails} from "../models/userModel/userModel.js"
import bodyParser from 'body-parser';
import express from "express";
const app = express();
app.use(bodyParser.json());

app.use(express.json())

const ShowAllUsers = async(req,res)=>
{
  const users = await GetAllUsers();
     if(!users){
        res.status(StatusCodes.BAD_REQUEST).json({error: "there are no Manufacturers"})
        return;
     }
     else{res.status(StatusCodes.OK).json(users)
        return
    }
} 
const AddNewUser = async (req,res) =>{
  const {UserId,FirstName,LastName,City,Street,HouseNumber,BirthDate, PhoneNumber,CellPhone} =req.body
  const exist = await GetUserById(UserId)
  if(exist){
      res.status(StatusCodes.BAD_REQUEST).json({error: "this user is already exsist"})
      return;
  }
  else{
      const newUser = await AddUser(UserId,FirstName,LastName,City,Street,HouseNumber,BirthDate, PhoneNumber,CellPhone)
      if(!newUser){
      res.status(StatusCodes.OK).json(newUser)
      return
      }
      else{res.status(500).json("err")}
  }
}
 const showUserById =  async(req,res)=>
 {
   const {UserId} = req.body
   const exist = await GetUserById(UserId);
      if(!exist){
         res.status(StatusCodes.BAD_REQUEST).json({error: "there is no user whith this id"})
         return;
      }
      else{res.status(StatusCodes.OK).json(exist)
         return
     }
 } 
 const DeleteUserById =  async(req,res)=>
 {
  const UserId = req.params.UserId
   const exist = await GetUserById(UserId);
      if(!exist){
         res.status(StatusCodes.BAD_REQUEST).json({error: "there is no user whith this id"})
         return;
      }
      else{
        const deleteUser = await DeleteUser(UserId)
        console.log();
        if(!deleteUser){
        res.status(StatusCodes.OK).send("deleteUser")
        return
        }
        else{res.status(500).json("err")}
    }
  }
  const UpdateUser=async(req,res)=>
  {
  
     const {UserId,FirstName,LastName,City,Street,HouseNumber,BirthDate, PhoneNumber,CellPhone}=req.body;
     const update=await UpdateUserDetails(UserId,FirstName,LastName,City,Street,HouseNumber,BirthDate, PhoneNumber,CellPhone)
     if(update)
     {
         res.status(StatusCodes.NOT_FOUND).json({error: "cannot update"})
         return
     }
     else
     {
         res.status(StatusCodes.OK).json(update)
     }
   }


export {
  ShowAllUsers,
  DeleteUserById,
  AddNewUser,
  showUserById,
  UpdateUser,
}
