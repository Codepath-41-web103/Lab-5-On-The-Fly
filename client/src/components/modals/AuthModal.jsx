import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Inputs/Button";
import PropTypes from "prop-types";

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  footer,
  body,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black outline-none focus:outline-none "
      >
        <div
          className="relative w-full h-full mx-auto my-6 md:w-4/6 lg:w-3/6 xl:w-2/5 lg:h-auto md:h-auto "
        >
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className="translate
              h-full
              lg:h-auto
              md:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex-cols
              w-full
              bg-[#000000]
              outline-none
              focus:outline-none"
            >
              <div
                className="flex
              items-center
              p-6
              rounded-t
              justify-center
              relative
              borber-b-[1px]"
              >
                <button
                  onClick={handleClose}
                  className="absolute p-1 transition bg-transparent border-0 hover:opacity-70 text-slate-50 left-9 w-fit"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold text-slate-50 ">
                  {title}
                </div>
                <img
                  className="absolute filter brightness-0 invert right-9"
                  width={20}
                  height={20}
                  src={`/images/Chatat.png`}
                  alt="Logo"
                />
              </div>
              <div className="relative flex-auto p-6">{body}</div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center w-full gap-4">
                  {secondaryAction && secondaryLabel && (
                    <Button
                      outline
                      label={secondaryLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button outline label={actionLabel} onClick={handleSubmit} />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  footer: PropTypes.node,
  body: PropTypes.node.isRequired,
  actionLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  secondaryAction: PropTypes.func,
  secondaryLabel: PropTypes.string,
};

export default Modal;
