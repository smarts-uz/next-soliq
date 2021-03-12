import { useFormik } from "formik"
import { validateReg } from "../../unlits/validate-form"
export default function Login() {

  const formik = useFormik({
    initialValues: {
      operator: "",
      password: "",
    },
    validationSchema: validateReg,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <form
        onSubmit={formik.handleSubmit}
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>

          <input
            type="text"
            className={`${formik.touched.operator && formik.errors.operator ? 'border-red-500' : 'border-grey-light'} block border focus:outline-none  w-full duration-300 p-3 rounded mb-4`}
            name="operator"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email" />

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
    </div>
  )
}