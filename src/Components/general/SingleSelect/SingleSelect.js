import React from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { Alphabets } from "../../../const/texts";

export const SingleSelect = ({ options, name, label }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();

  const handleChange = (evt, value) => {
    setFieldTouched(name, true);
    setFieldValue(name, value);
  };

  return (
    <div>
      <label>{label}</label>
      {options.map((_, i) => {
        return (
          <div
            onClick={(e) => {
              handleChange(e, _.value);
            }}
            className={`bg-gray w-96 p-1.5 rounded-lg h-3/4 flex flex-row  align-middle  shadow-lg items-center ${
              true && "border border-button"
            }`}
          >
            <div className="bg-Radio w-12 flex justify-center p-3 rounded-lg shadow-xl  border border-black">
              <text>{Alphabets[i]}</text>
            </div>
            <div className="bg-gray w-100 flex justify-center p-3 rounded-sm ml-4 ">
              <text className="">{_.label}</text>
            </div>
          </div>
        );
      })}
      <ErrorMessage name={name} />
    </div>
  );
};
