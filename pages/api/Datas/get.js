import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();
export default async (req, res) => {

    if(req.method === "POST" ){
        console.log("ISHLadimi");
        let obj = {};
        console.log(req.body);
        await prisma.datas.findMany({
            where: {
                id: req.body.id
            }
        }).then(res => {
            obj = {
                ...obj,
                data: res
            }
        })
        .catch(err=> {
            res.status(500).json({message: err});
        }); 
        // return res.json({message: "messages"})
        await prisma.category.findMany()
        .then(result=>{
            obj = {
                ...obj,
                categories: result
            }
        })
        .catch(err=> {
            res.status(500).json({message: err});
        });


        await prisma.underCategory.findMany()
        .then(result=>{
            obj = {
                ...obj,
                underCategories: result
            }
        })
        .catch(err=> {
            res.status(500).json({message: err});
        });

        await prisma.theme.findMany()
        .then(result=>{
            obj = {
                ...obj,
                themes: result
            }
        })
        .catch(err=> {
            res.status(500).json({message: err});
        });

        return res.status(200).json({props: obj});
    }
    
  }
  