import React from 'react'
import { Input } from './input';
import { Form } from './form';

const fields = [
  { placeholder: "Enter your Name", type: "text" },
  { placeholder: "Enter your email", type: "email" },
  { placeholder: "Enter your Name", type: "text" },
];

const CustomForm = () => {
  return (  
    <div className="h-auto">
      <div className="  py-7 px-10 text-center register-form">
        {/* //register-form */}
        <Form action="" className="">
          <h2 className="sm:text-2xl text-lg font-semibold sm:mb-4 mb-2 text-white uppercase tracking-widest">Sign Up Now</h2>
          <p className="sm:text-lg text-sm mb-6 text-white font-medium">Get Free Courses</p>
          {fields.map((field, index) => (
            <div key={index} className="mb-4">
              <Input
                placeholder={field.placeholder}
                type={field.type}
                className={`w-full h-16 bg-white italic text-lg text-[#182B49] py-4 px-5 p-2 border-none rounded-[5px] border-gray-300 mb-7`}
              />
            </div>
          ))}
          <div className="">
            <button
              type="button"
              name="Submit"
              className="w-full h-16 sm:text-xl text-sm text-[#fff] py-4 px-5 p-2 border-none rounded-[5px] border-[#1D2F4D] mb-7 bg-[#1D2F4D] uppercase"
            >
              sent request
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CustomForm;
