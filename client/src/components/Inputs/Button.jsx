import React from "react";
import { Button as FlowbiteButton } from "flowbite-react";
import classnames from "classnames";
import PropTypes from "prop-types";
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
  const buttonClasses = classnames(
    "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full",
    {
      "bg-white": outline,
      "bg-transparent": !outline,
      "border-black": outline,
      "text-black": outline,
      "py-1": small,
      "py-3": !small,
      "text-sm": small,
      "text-md": !small,
      "border-[2px]": outline,
      "font-light": outline,
      "font-semibold": !outline,
      "text-blue-400": selected,
      "border-blue-400": selected,
      "flex justify-center items-center": mobile,
    }
  );

  return (
    <FlowbiteButton onClick={onClick} disabled={disabled} className={`${buttonClasses}`}>
      {Icon && <Icon size={24} className="md:absolute md:left-4 md:top-3" />}
      <span className="font-normal">{label}</span>
    </FlowbiteButton>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  icon: PropTypes.elementType,
  selected: PropTypes.bool,
  mobile: PropTypes.bool,
};

export default Button;
