import React from "react";

function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  selected,
  mobile,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? "bg-white " : "bg-transparent "
      }  ${outline ? "border-black " : "bg-transparent "} ${
        outline ? "text-black " : "bg-transparent "
      } ${small ? "py-1 " : "py-3 "} ${small ? "text-sm " : "text-md "} ${
        outline ? "border-[2px] " : "border-[2px] "
      } ${outline ? "font-light " : "font-semibold "}
      ${selected ? "text-blue-400 " : ""}
      ${selected ? "border-blue-400 " : ""}
      ${mobile ? " flex justify-center items-center " : ""}`}
    >
      {Icon && <Icon size={24} className=" md:absolute md:left-4 md:top-3 " />}

      <div className={` font-normal`}>{label}</div>
    </button>
  );
}

export default Button;
