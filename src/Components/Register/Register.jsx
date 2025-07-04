import React, { useState } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const MyValidate = Yup.object({
  name: Yup.string()
    .required("Name must be Required")
    .min(3, "at least 3 characters")
    .max(12, "Name must be at most 12 characters"),
  phone: Yup.string()
    .required("Phone must be Required")
    .matches(
      /^01[0125][0-9]{8}$/,
      "Phone must be a valid Egyptian number and contain digits only"
    ),
  email: Yup.string()
    .required("Email must be Required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password must be Required")
    .min(6, "at least 6 characters")
    .max(12, "Password must be at most 12 characters"),
  rePassword: Yup.string()
    .required("RePassword must be Required")
    .oneOf([Yup.ref("password"), null], `re-Password pattern is inavalid`),
});
export default function Register() {
  const [isSuccess, setisSuccess] = useState(false);
  const [Errormessage, setErrormessage] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const NavigateLogin = useNavigate();

  const userData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  };

  async function sendUserData(sendUserData) {
    setisLoading(true);

    try {
      await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        sendUserData
      );
      setisSuccess(true);
      setTimeout(() => {
        setisSuccess(false);
        NavigateLogin("/login");
      }, 2000);

      setisLoading(false);
    } catch (error) {
      setTimeout(() => {
        setErrormessage(false);
      }, 2000);
      setErrormessage(error.response.data.message);
      setisLoading(false);
    }
  }

  function onSubmit(Values) {
    sendUserData(Values);
  }
  const myFormik = useFormik({
    initialValues: userData,
    onSubmit: onSubmit,
    validationSchema: MyValidate,
  });
  return (
    <>
      <div className="max-w-7xl mx-auto px-2">
        {isSuccess ? (
          <div className="bg-green-400 border text-center border-green-600 px-4 py-3 rounded">
            <strong className="font-bold"> Registration successful </strong>
          </div>
        ) : (
          ""
        )}

        {Errormessage ? (
          <div className="bg-red-400 border text-center border-red-600 px-4 py-3 rounded">
            <strong className="font-bold"> {Errormessage} </strong>
          </div>
        ) : (
          ""
        )}

        <h2 className="font-bold text-2xl py-5 text-green-500">Register : </h2>

        <form onSubmit={myFormik.handleSubmit}>
          <label htmlFor="name">Name :</label>
          <br />
          <input
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.name}
            className="w-full mt-3 p-1 mb-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            id="name"
            type="text"
          />
          {myFormik.errors.name && myFormik.touched.name ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong className="font-bold"> {myFormik.errors.name} </strong>
            </div>
          ) : (
            ""
          )}

          <label htmlFor="email">Email :</label>
          <br />
          <input
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.email}
            className="w-full mt-3 mb-2 p-1 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            id="email"
            type="email"
          />
          {myFormik.errors.email && myFormik.touched.email ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong className="font-bold"> {myFormik.errors.email} </strong>
            </div>
          ) : (
            ""
          )}

          <label htmlFor="password">Password :</label>
          <br />
          <input
            type="password"
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.password}
            className="w-full mt-3 mb-2 p-1 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            id="password"
          />
          {myFormik.errors.password && myFormik.touched.password ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong className="font-bold">
                {" "}
                {myFormik.errors.password}{" "}
              </strong>
            </div>
          ) : (
            ""
          )}

          <label htmlFor="rePassword">RePassword :</label>
          <br />
          <input
            type="password"
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.rePassword}
            className="w-full mt-3 mb-2 p-1 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            id="rePassword"
          />
          {myFormik.errors.rePassword && myFormik.touched.rePassword ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong className="font-bold">
                {" "}
                {myFormik.errors.rePassword}{" "}
              </strong>
            </div>
          ) : (
            ""
          )}

          <label htmlFor="phone">Phone :</label>
          <br />
          <input
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.phone}
            className="w-full mt-3 p-1 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            id="phone"
            type="text"
          />
          {myFormik.errors.phone && myFormik.touched.phone ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong className="font-bold"> {myFormik.errors.phone} </strong>
            </div>
          ) : (
            ""
          )}

          <button
            type="submit"
            className="bg-green-600 mt-6 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            {isLoading ? (
              <Circles
                height="40"
                width="40"
                color="#fff"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <>Register</>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
