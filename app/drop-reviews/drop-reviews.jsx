"use client";
import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import { FiLoader } from "react-icons/fi";

    const DropReviews = ({ session }) => {
    const [loading, setLoading] = useState(false); const initialValues = {
    recipe: "",
    reviews: ""
    };

 const formValidation = Yup.object({
    recipe: Yup.string().required("Recipe name is required"),
    reviews: Yup.string()
    .required("Recipe review is required")
    .min(50,"Minimun of 50 characters is required")
 })
 
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      // create an object that would be sent to the db
      const reviewData = {
        author: session?.user?.name,
        img: session?.user?.image,
        timestamp: new Date().toLocaleDateString(),
        ...values,
      };

      const docRef = await addDoc(collection(db, "reviews"), reviewData);

      console.log("Document written with ID: ", docRef.id);
      resetForm();
    } catch (error) {
      console.error("Error adding data", error);
      alert("Oops, an error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <main className='min-h-dvh lg:p-6 p-3 space-y-10 bg-gray-50'>
    <main className='min-h-dvh bg-[url(/bg3.png)] bg-no-repeat bg-center bg-cover
                    lg:p-6 p-3 space-y-10 '>
    <div className='flex items-center justify-center flex-col gap-2'>
        <h1 className='md:text-4xl text-2xl font-extrabold text-gray-100 uppercase'>Comment your Review</h1>
        <p className="text-gray-200 md:text-xl text-base">
             Join the conversation now!</p>
    </div>

    <section  className="md:max-w-2xl w-full mx-auto shadow-md p-3 rounded-md">
    <Formik
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={handleSubmit}> 
        <Form className="space-y-3">
            <div className="">
            <label className="text-base text-white">Recipe</label>
            <Field name="recipe"
                className="w-full outline-none border border-gray-200 p-2 rounded-md bg-white"/>
                <ErrorMessage name="recipe" component={"p"} className="text-sm text-red-600"/>
            </div>

            <div className="">
            <label className="text-base text-white">Recipes Review</label>
            <Field 
                name="reviews"
                as="textarea"
                className="w-full outline-none p-2 border border-gray-200 bg-white rounded-md"/>
                <ErrorMessage name="reviews" component={"p"} className="text-sm text-red-600"/>
            </div>

        <div className="flex justify-end">
              <button
                disabled={loading}
                type="submit"
                className="bg-yellow-700 hover:bg-yellow-800 transition-colors duration-300 text-white text-xl rounded-md py-2 px-5"
              >
                {loading ? (
                  <FiLoader className="animate-spin text-2xl text-center" />
                ) : (
                  "Post Review"
                )}
              </button>
        </div>
            
        </Form>
    </Formik>
    </section>

    </main>
  )
}

export default DropReviews
