"use client";

import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal */}
          <div className="relative bg-base-200 mx-5 py-16 sm:px-14 rounded-lg shadow-lg">
            {/* Close button */}
            <button className="absolute text-4xl top-2 right-4 hover:text-yellow-700 ease-in-out duration-150" onClick={closeModal}>
              &times;
            </button>

            {/* Modal content */}
            <div className="text-center">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
