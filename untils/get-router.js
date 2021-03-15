import Router from "next/router"
import fetch from 'isomorphic-fetch'

export async function getRoute(url, ctx){

  const res = await fetch(url, {
       headers:{
           cookie: ctx.req.headers.cookie
       }
   })
   
   if(res.status === 401 && !ctx.req){
       Router.replace('/login')
   }

   if(res.status === 401 && ctx.req){
       ctx.res.writeHead(302, {
           Location: 'http://localhost:3000/login'
       })
       ctx.res.end()
   }
   const data = await res.json()
   return data
}