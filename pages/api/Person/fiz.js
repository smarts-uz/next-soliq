import axios from "axios"
import { authHandler } from "../../../untils/auth-middleware";

export default authHandler(async (req, res) => {

    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + 'dGVzdDoxMjM0NTY3ODk=');
    await axios.post('https://ws.soliqservis.uz/gnk/data/fiznp1', {
        tin: req.body.inn,
        pinfl :" ",
        series_passport: " ",
        number_passport: " ",
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

})
