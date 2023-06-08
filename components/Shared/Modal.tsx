import { createPortal } from "react-dom";
import { Dialog } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import React, { ReactNode } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  return createPortal(
    <Transition show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        {/* Backdrop */}

        {/* Actual Dialog */}
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={React.Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="relative bg-white rounded shadow-lg">
              <button
                className="absolute top-4 right-4 text-dark"
                onClick={onClose}
              >
                <IoCloseSharp className="w-6 h-6" />
              </button>
              <div className="p-4">{children}</div>
            </div>
          </Transition.Child>
        </div>
        <Dialog.Overlay className="fixed inset-0 z-[-1] bg-dark opacity-50" />
      </Dialog>
    </Transition>,
    document.body
  );
};

export default Modal;
