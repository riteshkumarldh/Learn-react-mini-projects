import AddressTable from "./components/AddressTable";
import Button from "./components/Button";
import Header from "./components/Header";

import "./App.css";
import ModalInfo from "./components/ModalInfo";
import { useState } from "react";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
    setEdit(false);
  };

  const openEditModal = () => {
    setOpenModal((prev) => !prev);
    setEdit(true);
  };

  return (
    <>
      <div className="app">
        <Header />
        <Button
          content="Add Address"
          type="add"
          handleOpenModal={handleOpenModal}
        />
        <AddressTable openEditModal={openEditModal} />
        {openModal && (
          <ModalInfo handleOpenModal={handleOpenModal} edit={edit} />
        )}
      </div>
    </>
  );
}

export default App;
