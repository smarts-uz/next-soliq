import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { validateReg } from "../../untils/validate-form"
import Loading from "../Loading"
import Router from "next/router"

import Alert from "../Alert"


export default function Login() {

  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ position: false, msg: '', variant: '' })
  const { position, msg, variant } = alert

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validateReg,
    onSubmit: async (values) => {

      setLoading(true)

      await axios.post('/api/Auth/login', {
        username: values.username,
        password: values.password
      }).then(response => {
        if (response.status === 200) {
          Router.push('/')
          setTimeout(() => {
            setLoading(false)
          }, 4000)
        }
      }).catch((err) => {
        setAlert({
          position: true,
          msg: "Password or Username Incorrect",
          variant: 'error'
        })
        setLoading(false)

        setTimeout(() => {
          setAlert({
            position: false,
            msg: "Password or Username Incorrect",
            variant: 'error'
          })
        }, 4000)
      })
    }
  })

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      {loading ? (<Loading />) : null}
      <form
        onSubmit={formik.handleSubmit}
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>

          <input
            type="text"
            className={`${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-grey-light'} block border focus:outline-none  w-full duration-300 p-3 rounded mb-4`}
            name="username"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Username" />

          <input
            type="password"
            className={`${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-grey-light'} block border focus:outline-none  w-full duration-300 p-3 rounded mb-4`}
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password" />


          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-400 duration-300 focus:outline-none my-1"
          >Log In</button>
        </div>
      </form>
      <Alert msg={msg} open={position} variant={variant} />
    </div>
  )
}