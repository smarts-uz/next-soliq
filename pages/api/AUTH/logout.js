import cookie from 'cookie'
export default async (req, res) => {
        res.setHeader('Set-Cookie', cookie.serialize('auth', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'development',
          sameSite: 'strict',
          path:'/',
          expires: new Date(0)
        }))
        res.status(200).json({success:true})
}
  
  
  