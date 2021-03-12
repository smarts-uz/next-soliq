import Link from "next/link"
import { useFormik } from "formik"
import { useEffect, useState } from "react";
import { validateReg } from "../../unlits/validate-form"

export default function Register() {

  const [equal, setEqual] = useState(false)

  const formik = useFormik({
    initialValues: {
      fullname: '',
      operator: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: validateReg,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  console.log(formik)

  useEffect(() => {
    console.log("hello")
  }, [formik])

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <form
        onSubmit={formik.handleSubmit}
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className={`${formik.touched.fullname && formik.errors.fullname ? 'border-red-500' : 'border-grey-light'} block border focus:outline-none  w-full duration-300 p-3 rounded mb-4`}
            name="fullname"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fullname}
            placeholder="Full Name" />

          <input
            type="text"
            className={`${formik.touched.operator && formik.errors.operator ? 'border-red-500' : 'border-grey-light'} block border focus:outline-none  w-full duration-300 p-3 rounded mb-4`}
            name="operator"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.operator}
            placeholder="Operator" />

          <input
            type="password"
            className={`${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-grey-light'} block border focus:outline-none  w-full duration-300 p-3 rounded mb-4`}
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password" />
          <input
            type="password"
            className={`${formik.touched.confirm_password && formik.errors.confirm_password ? 'border-red-500' : 'border-grey-light'} block border focus:outline-none  w-full duration-300 p-3 rounded mb-4`}
            name="confirm_password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
            placeholder="Confirm Password" />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-400 duration-300 focus:outline-none my-1"
            disabled={formik.isValid}
          >Create Account</button>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link href="/login">
            <a className="no-underline border-b border-blue text-blue">
              Log in
            </a>
          </Link>.
        </div>
      </form>
    </div>
  )
}