import { StatusCodes } from "http-status-codes";
import {AddPatient,  GetPatientById,  GetAllPatients,  GetPatient} from "../models/patientsModel/patientModel.js"
import { GetUserById } from "../models/userModel/userModel.js";
const AddNewPatient = async(req,res)=>
{
  const {UserId,SickDate,RecoveryDate} = req.body
  if(RecoveryDate<SickDate)
  {
    res.status(StatusCodes.BAD_REQUEST).json({error: "The date data is incorrect"})
    return;  
  }
    const user=await GetUserById(UserId)
    if(!user)
    {
    res.status(StatusCodes.NOT_FOUND).json({error: "User does not exist"})
    return;
    }
  const exist=await GetPatient(UserId)

  if(exist)
  {
  res.status(StatusCodes.EXPECTATION_FAILED).json({error: "This user has been sick before"})
  return;
  }
  else
  {
    const patient = await AddPatient(UserId,SickDate,RecoveryDate); 
    if(!patient)
    {
        res.status(StatusCodes.OK).json(patient)
        return
    }
    else
    {
        res.status(500).json("cant add")
        return
    }
  }
}
const ShowPatientById = async(req,res)=>
{

  const exist=await GetPatient(req.params.UserId)
  if(!exist)
  {
  res.status(StatusCodes.BAD_REQUEST).json({error: "patient does not exists"})
  return
  }
  else
  {
        res.status(StatusCodes.OK).json(exist)
        return
  }   
} 
const ShowAllPatients = async(req,res)=>
{
  const patients = await GetAllPatients();
     if(!patients){
        res.status(StatusCodes.BAD_REQUEST).json({error: "there are no patients"})
        return;
     }
     else{res.status(StatusCodes.OK).json(patients)
        return
    }
} 

export
{
  AddNewPatient,
    ShowPatientById,
    ShowAllPatients
}