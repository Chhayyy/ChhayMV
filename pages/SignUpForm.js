import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useRouter } from "next/router";
import { useForm } from "../Context/formikProvider";

const SignupForm = () => {
  const { setToken } = useForm();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "ដាក់លេខ 8 ខ្ទង់")
        .required("Required Password"),
    }),

    onSubmit: async (values) => {
      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "mor_2314",
            password: "83r5^_",
          }),
        });

        const data = await response.json();
        setToken(data.token);
        router.push("/Favorite");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form
      className="flex flex-col px-96  gap-4 mt-60 "
      onSubmit={formik.handleSubmit}
    >
      <input
        {...formik.getFieldProps("email")}
        className=" block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-500">{formik.errors.email}</div>
      ) : null}
      <input
        {...formik.getFieldProps("password")}
        className="  w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="text-red-500">{formik.errors.password}</div>
      ) : null}

      <button
        className="bg-red-500 text-white py-2 px-4  hover:bg-red-400 w-40 content-end"
        type="submit "
      >
        Submit
      </button>
    </form>
  );
};
export default SignupForm;
