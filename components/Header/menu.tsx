import React, { useState, ReactNode } from "react";
import Modal from "../Shared/Modal";
import SmallScreenMenuContent from "./smallScreenMenuContent";
import BigScreenMenuContent from "./bigScreenMenuContent";

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="p-2 rounded border-[1px] tabletM:hidden"
      >
        Menu
      </button>
      <BigScreenMenuContent />
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <SmallScreenMenuContent />
      </Modal>
    </div>
  );
};

export default Menu;
