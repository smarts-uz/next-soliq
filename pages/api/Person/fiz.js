import axios from "axios"

export default async (req, res) => {

    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + 'dGVzdDoxMjM0NTY3ODk=');
    await axios.post('https://ws.soliqservis.uz/gnk/data/fiznp1', {
        tin: req.body.inn,
        pinfl :"",
        series_passport: req.body.PS,
        number_passport: req.body.PN,
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
