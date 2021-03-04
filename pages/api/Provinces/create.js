import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const data = [
    {
        "name_uz": "АНДИЖОН ВИЛОЯТИ",
        "name_ru": "АНДИЖАНСКАЯ ОБЛАСТЬ",
        "row_obl": 3
    },
    {
        "name_uz": "БУХОРО ВИЛОЯТИ",
        "name_ru": "БУХАРСКАЯ ОБЛАСТЬ",
        "row_obl": 6
    },
    {
        "name_uz": "ЖИЗЗАХ ВИЛОЯТИ",
        "name_ru": "ДЖИЗАКСКАЯ ОБЛАСТЬ",
        "row_obl": 8
    },
    {
        "name_uz": "ҚАШҚАДАРЁ ВИЛОЯТИ",
        "name_ru": "КАШКАДАРЬИНСКАЯ ОБЛАСТЬ",
        "row_obl": 10
    },
    {
        "name_uz": "НАВОИЙ ВИЛОЯТИ",
        "name_ru": "НАВОИЙСКАЯ ОБЛАСТЬ",
        "row_obl": 12
    },
    {
        "name_uz": "НАМАНГАН ВИЛОЯТИ",
        "name_ru": "НАМАНГАНСКАЯ ОБЛАСТЬ",
        "row_obl": 14
    },
    {
        "name_uz": "САМАРҚАНД ВИЛОЯТИ",
        "name_ru": "САМАРКАНДСКАЯ ОБЛАСТЬ",
        "row_obl": 18
    },
    {
        "name_uz": "СУРХОНДАРЁ ВИЛОЯТИ",
        "name_ru": "СУРХАНДАРЬИНСКАЯ ОБЛАСТЬ",
        "row_obl": 22
    },
    {
        "name_uz": "СИРДАРЁ ВИЛОЯТИ",
        "name_ru": "СЫРДАРЬИНСКАЯ ОБЛАСТЬ",
        "row_obl": 24
    },
    {
        "name_uz": "ТОШКЕНТ ШАҲАР",
        "name_ru": "ГОРОД ТАШКЕНТ",
        "row_obl": 26
    },
    {
        "name_uz": "ТОШКЕНТ ВИЛОЯТИ",
        "name_ru": "ТАШКЕНТСКАЯ ОБЛАСТЬ",
        "row_obl": 27
    },
    {
        "name_uz": "ФАРҒОНА ВИЛОЯТИ",
        "name_ru": "ФЕРГАНСКАЯ ОБЛАСТЬ",
        "row_obl": 30
    },
    {
        "name_uz": "ХОРАЗМ ВИЛОЯТИ",
        "name_ru": "ХОРЕЗМСКАЯ ОБЛАСТЬ",
        "row_obl": 33
    },
    {
        "name_uz": "ҚОРАҚАЛПОҒИСТОН РЕСП.",
        "name_ru": "РЕСП. КАРАКАЛПАКСТАН",
        "row_obl": 35
    },
    {
        "name_uz": "ҲУДУДЛАРАРО ИНСПЕКЦИЯСИ",
        "name_ru": "МЕЖРЕГИОНАЛЬНАЯ ИНСПЕКЦИЯ",
        "row_obl": 50
    }
]
export default (req, res) => {

        prisma.provinces.createMany({
            data: data,
            skipDuplicates: true
        }).then(ok=>{
            console.log(ok);
        }).catch(err=>{
            console.log(err);
        })
        
    res.json({message: "Hammasi joyida"})
  }
  