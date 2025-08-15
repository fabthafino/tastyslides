"use client"

import React from 'react'
import { Field, Form, Formik, ErrorMessage  } from 'formik';
 import * as Yup from 'yup';

 const DropReviews = () => {

    const initialValues ={
    recipe: "",
    reviews: ""
    };

 const formValidation = Yup.object({
    recipe: Yup.string().required("Recipe name is required"),
    reviews: Yup.string()
    .required("Recipe review is required")
    .min(20,"Minimun of 50 characters is required")
 })
 
    const handleSubmit = () => {
    console.log("Form Submitted");
    
    }

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
            <button className="bg-yellow-700 hover:bg-yellow-800 transition-colors duration-300 text-white 
            text-2xlrounded-md py-2 px-5">
            Post Review
            </button>
        </div>
            
        </Form>
    </Formik>
    </section>

    </main>
  )
}

export default DropReviews
