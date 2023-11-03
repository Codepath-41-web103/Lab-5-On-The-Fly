import React from "react";
import { Label, TextInput } from "flowbite-react";
import PropTypes from "prop-types";

function Input({ id, label, type, stateChange, value }) {
  return (
    <div className="relative w-full my-5">
      <input 
        onChange={(e) => stateChange(e.target.value)}
        value={value}
        id={id}
        type={type}
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black text-black`}
      />
      <Label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400`}
      >
        {label}
      </Label>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  stateChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
