import axios from "axios"
import { PrismaClient } from "@prisma/client";

export default async (req, res) => {

    let headers = new Headers();
    console.log(req.body)
    headers.set('Authorization', 'Basic ' + 'dGVzdDoxMjM0NTY3ODk=');
    await axios.post('https://ws.soliqservis.uz/gnk/data/fiznp1', {
        tin: req.body.inn,
        pinfl :"",
        series_passport: "AB",
        number_passport: "0667841",
        lang: "uz"
    }, {
        auth: {
            username: process.env.LOGIN,
            password: process.env.PWS
        }
    }).then(response => {
        console.log("SUCCESS")
        res.status(200).json(response.data)
        }).catch(err => {
            console.log(err);
        })

}
