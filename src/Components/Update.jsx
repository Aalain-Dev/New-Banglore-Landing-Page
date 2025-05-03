import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import img from "../assets/Update/img.avif";
import { useNavigate } from 'react-router-dom';
// Form validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const Update = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('https://mediumblue-stinkbug-266785.hostingersite.com/thanks');

  const handleChangeValue = () => {
    setInputValue('');
  };
  return (
    <div
      className="bg py-20 px-4 text-white h-[500px] relative z-1"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-2]"></div>
      <div className="container max-w-4xl mx-auto text-center z-100">
        <h1 className="xl:text-[2.5rem] text-3xl font-bold">NEVER MISS AN UPDATE</h1>
        <p className="mt-4 text-lg">
          Sign up for email updates and stay in the know about price changes, speakers, and more.
        </p>

        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={validationSchema}
          onSubmit={() => { ``}}
        >
          {({ isValid }) => (
            <form
              action="https://formsubmit.co/aalain@bizdateup.com"
              method="POST"
              className="mt-8 space-y-4"
            >
            
              <input type="hidden" name="_next"  value={inputValue} />
            
              <div className="flex flex-col items-center gap-4 justify-center">
                <div className="w-full sm:w-1/3">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="px-4 py-2 rounded-md text-black w-full bg-white"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="w-full sm:w-1/3">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="px-4 py-2 rounded-md text-black w-full bg-white"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="uppercase pink-bg text-white text-center xl:text-[20px] px-3 py-3 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-70"
                  disabled={!isValid}
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Update;
