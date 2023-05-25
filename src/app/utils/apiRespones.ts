import { Response } from "express";


 interface IRespons{
    success: boolean;
    error? : any;
    data?:any;

 }

 const sendApiRespons =async (res:Response,statusCode:number,success: boolean,
    data?:any,
    error? : any,
    
) => {
    const apiRespons:IRespons = {success}
    if (data) {
        apiRespons.data = data
    }
    if (error) {
        apiRespons.error = error
    }
    res.status(statusCode).send(apiRespons)
 }

 export default sendApiRespons