import { PrismaClient } from "@prisma/client"
import jwt from "jsonwebtoken"
import cookie from "cookie"

const prisma = new PrismaClient();

export default async (req, res) => {

  
    if(req.method === "POST"){

      await prisma.user.findMany({
        where: {
                username: req.body.username
            } 
      }).then(response=>{
        if(response[0].password === req.body.password){

          const token = jwt.sign({
          id: response[0].id,
          username: response[0].username,
          fullname: response[0].fullname,
          email: response[0].email
        }, process.env.TOKENSECRET, {expiresIn: '1h'})


        res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'development',
          sameSite: 'strict',
          path:'/',
          maxAge: 3600
        }))
          res.status(200).json({
            msg: "SUCCESS"
          })
        } else {
          res.status(400).json({msg: "wrong password or username"})
        }
      }).catch(err=>{
        res.status(404).json({
          msg: 'User Not Found'
        })
      })
       
    }
  }
  