'use client';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from 'axios';
import Heading from './atomic/Heading';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const ClientForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleOnSubmit = async (values, actions) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://formspree.io/f/xyzgyqoo",
        data: values
      });
      
      actions.setSubmitting(false);
      actions.resetForm();
      setSubmitStatus('success');
    } catch (error) {
      actions.setSubmitting(false);
      setSubmitStatus('error');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="w-full pt-5">
      <Heading>Struggling with your enterprise? Let's talk</Heading>
      <div className="w-full py-4">
        {submitStatus === 'success' && (
          <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
            Message sent successfully!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            An error occurred. Please try again.
          </div>
        )}
        <Formik
          initialValues={{
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4 pt-10">
              <div className='flex flex-col gap-3 w-full'>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
                <Field as={Input} id="name" name="name" placeholder="Enter your full name" className="w-full pt-6 pb-6" />
                {errors.name && touched.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
              </div>

              <div className='flex flex-col gap-3 w-full'>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                <Field as={Input} id="email" name="email" type="email" placeholder="Enter your email address" className="w-full pt-6 pb-6" />
                {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>

              <div className='flex flex-col gap-3 w-full'>
                <Label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</Label>
                <Field as={Input} id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" className="w-full pt-6 pb-6" />
                {errors.phoneNumber && touched.phoneNumber && <div className="text-red-500 text-sm mt-1">{errors.phoneNumber}</div>}
              </div>

              <div className='flex flex-col gap-3 w-full'>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</Label>
                <Field as={Textarea} id="message" name="message" placeholder="Type your message here" className="w-full min-h-[200px]" />
                {errors.message && touched.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-tblue text-white font-bold py-2 px-4 rounded">
                {isSubmitting ? 'Sending...' : 'Hear from an expert'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ClientForm;