import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";

const Exhibitors_Form = () => {
  const [inputValue, setInputValue] = useState(
    "https://capitalconnect.bizdateup.com/thanks"
  );

  return (
    <>
      <h2 className="xl:text-4xl text-[30px] font-bold mb-6 text-center mt-10">
        Please Fill Out The Form
      </h2>

      <div className="xl:w-5xl mx-auto p-6 bg-white rounded-xl shadow-md box-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            company: "",
            partnership: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = "Name is Required";

            if (!values.email) {
              errors.email = "Email is Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.mobile) {
              errors.mobile = "Mobile number is Required";
            } else if (!/^\d{10}$/.test(values.mobile)) {
              errors.mobile = "Mobile number must be 10 digits";
            }

            if (!values.company) errors.company = "Company is Required";
            if (!values.partnership)
              errors.partnership = "Partnership is Required";

            return errors;
          }}
          onSubmit={() => {}}
        >
          {() => (
            <form
              className="space-y-4"
              action="https://formsubmit.co/aakash.goswami@bizdateup.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New submission! For Exhibitors"
              />
              <input type="hidden" name="_cc" value="aalain@bizdateup.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={inputValue} />

              {/* Name */}
              <div>
                <label className="block font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block font-medium mb-1" htmlFor="mobile">
                  Mobile Number
                </label>
                <Field
                  type="tel"
                  name="mobile"
                  required
                  pattern="[0-9]{10}"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block font-medium mb-1" htmlFor="company">
                  Company Name
                </label>
                <Field
                  type="text"
                  name="company"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Partnership Type */}
              <div>
                <label
                  className="block font-medium mb-1"
                  htmlFor="partnership"
                >
                  Partnership
                </label>
                <Field
                  as="select"
                  name="partnership"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="exhibitors">Exhibitors</option>
                  <option value="sponsorship">Sponsorship</option>
                </Field>
                <ErrorMessage
                  name="partnership"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block uppercase pink-bg text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Exhibitors_Form;
