import { IProduct } from "./product.interface";
import { productModel } from "./product.model";

export const getProductService =async ():Promise<IProduct[]> => {
    const result = await productModel.find()
    return result
}

export const singleProductService = async (id:string):Promise<IProduct | null> => {
    const product =  await productModel.findOne({_id:id})
    return product
}