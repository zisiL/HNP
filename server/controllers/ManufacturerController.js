import { StatusCodes } from "http-status-codes";
import {getManufacturerName,    getManufacturerId,    AddManufacturer,    GetAllManufacturers} from "../models/ManufacturerModel/ManufacturerModel.js"

export const AddNewManufacturer = async (req,res) =>{
    const {ManufacturerName} =req.body
    const exist = await getManufacturerId(ManufacturerName)
    if(exist){
        res.status(StatusCodes.BAD_REQUEST).json({error: "this Manufacturer is already exsist"})
        return;
    }
    else{
        const Manufacturer = await AddManufacturer(ManufacturerName)
        if(!Manufacturer){
        res.status(StatusCodes.OK).json(newComp)
        return
        }
        else{res.status(500).json("err")}
    }
}
export const ShowAllManufacturers = async (req,res)=>{
     const Manufacturers = await GetAllManufacturers();
     if(!Manufacturers){
        res.status(StatusCodes.BAD_REQUEST).json({error: "there are no Manufacturers"})
        return;
     }
     else{res.status(StatusCodes.OK).json(Manufacturers)
        return
    }

}
