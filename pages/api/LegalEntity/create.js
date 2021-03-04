import axios from "axios"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {
    let username = 'test';
    let password = '123456789';
    let headers = new Headers();

    headers.set('Authorization', 'Basic ' + 'dGVzdDoxMjM0NTY3ODk=');
    console.log("Ishalyapti");
    await axios.post('https://ws.soliqservis.uz/gnk/data/yurnp1', {
        "company_tin": req.body.company_tin,
        "lang": "uz"
    }, {
        auth: {
            username: username,
            password: password
        }
    }).then(response => {
        console.log(response);
        prisma.legalEntity.createMany({
            data: [
                response.data.data
            ],
            skipDuplicates: true
        }).then(ok => {
            console.log(ok);
        }).catch(err => {
            console.log(err);
        })


        res.status(200).json(response.data)

    })
        .catch(err => {
            console.log(err);
        })

}
