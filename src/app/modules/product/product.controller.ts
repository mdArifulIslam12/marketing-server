import { Request, Response } from "express";
import { getProductService, singleProductService } from "./product.service";
import sendApiRespons from "../../utils/apiRespones";

export const getProductController = async (req:Request,res:Response) => {
    const data = await getProductService()
    // res.status(200).json(data)
    sendApiRespons(res,200,true,data)
}

export const getSingleController =async (req:Request,res:Response) => {
    const id = req.params.id 
    const data =  await singleProductService(id)
    sendApiRespons(res,200,true,data)
}