import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'

export const getDataFromToken = (req: NextRequest) => {
    try {
        const token = req.cookies.get('token')?.value || '' ; 
        const decodedToken : any  = jwt.verify(token, process.env.SECRET_TOKEN!);
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message)
    }
}