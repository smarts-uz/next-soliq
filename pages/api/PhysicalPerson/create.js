import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {
  let username = "test";
  let password = "123456789";
  let headers = new Headers();

  headers.set("Authorization", "Basic " + "dGVzdDoxMjM0NTY3ODk=");
  await axios
    .post(
      "https://ws.soliqservis.uz/gnk/data/fiznp1",
      {
        tin: req.body.inn,
        lang: "uz",
        pinfl: "",
        series_passport: req.body.series_passport,
        number_passport: req.body.number_passport,
      },
      {
        auth: {
          username: username,
          password: password,
        },
      }
    )
    .then((response) => {
      console.log(response.data.data);
      prisma.physicalPerson
        .createMany({
          data: [response.data.data],
          skipDuplicates: true,
        })
        .then((ok) => {
          console.log(ok);
        })
        .catch((err) => {
          console.log(err);
        });

      res.status(200).json(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
