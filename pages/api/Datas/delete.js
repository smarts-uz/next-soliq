import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();
export default async (req, res) => {

    if(req.method === "POST" ){
        // return res.json({message: "messages"})
        await prisma.datas.delete({
            where: {
                id: req.body.id
            } 
        })
        .then(result=>{
            res.status(201).json({datas:result});
        })
        .catch(err=> {
            res.status(500).json({message: err});
        })
        ;

    }
    
  }
  