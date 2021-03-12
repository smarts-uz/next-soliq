import axios from "axios"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {

    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + 'dGVzdDoxMjM0NTY3ODk=');
    await axios.post('https://ws.soliqservis.uz/gnk/data/yurnp1', {
        company_tin: req.body.inn,
        lang: "uz"
    }, {
        auth: {
            username: process.env.LOGIN,
            password: process.env.PWS
        }
    }).then(response => {
            console.log("Success");
            res.status(200).json(response.data)
        }).catch(err => {
            console.log(err);
        })

}
