"use client";
import React, { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import { Upload } from 'lucide-react'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const positions = [
  { value: 'none', label: 'None' },
  { value: 'developer', label: 'Developer' },
  { value: 'designer', label: 'Designer' },
  { value: 'manager', label: 'Manager' },
];

const validationSchema = Yup.object().shape({
  position: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  contactNumber: Yup.string().required('Required'),
});

const FormNew = () => {
  const fileInputRef = useRef(null);

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleOnSubmit = async (values, actions) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://formspree.io/f/xyzgyqoo", // Corrected URL
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
    <div className="w-full ">
      <div className="px-6 py-4">
       
        {submitStatus === 'success' && (
          <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
            Application submitted successfully!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            An error occurred. Please try again.
          </div>
        )}
        <Formik
          initialValues={{
            position: '',
            name: '',
            email: '',
            contactNumber: '',
            cv: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          {({ errors, touched, setFieldValue, values, isSubmitting }) => (
            <Form className="space-y-4">
               <div className='flex flex-col gap-3'>
                <Label htmlFor="position" className="block text-sm font-medium text-gray-700">Select Position</Label>
                <Select
            
                  onValueChange={(value) => setFieldValue('position', value)}
                  value={values.position}
                >
                  <SelectTrigger className="w-full text-white bg-tblue pt-7 pb-7">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.position && touched.position && <div className="text-red-500 text-sm mt-1">{errors.position}</div>}
              </div>

              <div className='flex flex-col gap-3'>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
                <Field as={Input} id="name" name="name" placeholder="Enter your full name" className="mt-1 block pt-7 pb-7 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                {errors.name && touched.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
              </div>

              <div className='flex flex-col gap-3'>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                <Field as={Input} id="email" name="email" type="email" placeholder="Enter your email address" className="mt-1 pt-7 pb-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>

              <div className='flex flex-col gap-3'>
                <Label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</Label>
                <Field as={Input} id="contactNumber" name="contactNumber" placeholder="Enter your phone number" className="mt-1 block pt-7 pb-7 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                {errors.contactNumber && touched.contactNumber && <div className="text-red-500 text-sm mt-1">{errors.contactNumber}</div>}
              </div>

              <div className='flex flex-col gap-3'>
                <Label htmlFor="cv" className="block text-sm font-medium text-gray-700">Attach CV</Label>
                <div className="relative">
                  <Input
                    id="cv"
                    name="cv"
                    type="file"
                    ref={fileInputRef}
                    onChange={(event) => {
                      setFieldValue("cv", event.currentTarget.files[0]);
                    }}
                    className="sr-only"
                  />
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="w-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 flex items-center justify-center py-2 px-4"
                  >
                    <Upload className="mr-2" size={20} />
                    {values.cv ? values.cv.name : "Choose CV File"}
                  </Button>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-tblue text-white font-bold py-2 px-4 rounded">
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormNew;