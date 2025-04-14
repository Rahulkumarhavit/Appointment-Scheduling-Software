import "dotenv/config"
import express, {NextFunction,Request,Response} from "express";
import cors from "cors";
import { config } from "./config/app.config";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";


const app = express();
const BASE_PATH = config.BASE_PATH

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(
    cors({
        origin:config.FRONTEND_ORIGIN,
        credentials:true,
    })
);

app.get("/",asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    throw new Error("throwing async error")
    res.status(HTTPSTATUS.OK).json({
        message:"hello backend working"
    })
}))

app.use(errorHandler)

app.listen(config.PORT, async ()=> {
    console.log(`Server listening at ${config.PORT} in ${config.NODE_ENV}`)
})
