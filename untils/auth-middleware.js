import jwt from "jsonwebtoken"
export const authHandler = fn => async (req, res) => {

    jwt.verify(req.cookies.auth, process.env.TOKENSECRET, async function(err, decoded){
        if(!err && decoded){
            return await fn(req, res)
        }

        res.status(401).json({msg:"Sizga kirishga ruxsat yo'q"})
    })

}