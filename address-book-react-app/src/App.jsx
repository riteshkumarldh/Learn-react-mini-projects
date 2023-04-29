import { useState } from "react";

// components imports
import AddressTable from "./components/AddressTable";
import Button from "./components/Button";
import Header from "./components/Header";
import ModalInfo from "./components/ModalInfo";

// css file
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    nickname: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postal: "",
    city: "",
    country: "",
    labels: "",
  });

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
          <ModalInfo
            handleOpenModal={handleOpenModal}
            edit={edit}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </>
  );
}

export default App;
