import { PrismaClient } from "@prisma/client";
import { authHandler } from "../../../untils/auth-middleware";

const prisma  = new PrismaClient();
export default authHandler(async (req, res) => {

    if(req.method === "POST" ){
        // return res.json({message: "messages"})
        await prisma.next_Datas.delete({
            where: {
                id: req.body.id
            } 
        })
        .then(result=>{
            res.status(200).json({datas:result});
        })
        .catch(err=> {
            res.status(500).json({message: err});
        })
        ;

    }
    
  }
  )