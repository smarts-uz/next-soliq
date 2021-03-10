import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();
export default async (req, res) => {
  console.log(req.body)
    if(req.method === "POST" ){
        // return res.json({message: "messages"})

        console.log(req.body)
        await prisma.datas.update({
            where: {
                id: req.body.id
            },
            data: req.body.value
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
  