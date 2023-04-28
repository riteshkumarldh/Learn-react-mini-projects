import { useState } from "react";
import AddressForm from "./AddressForm";
import Button from "./Button";

// const fields = [
//   {
//     id: 1,
//     label: "How Should your mail be addressed",
//     type: "text",
//     name: "nickname",
//   },
//   {
//     id: 2,
//     label: "First Name",
//     type: "text",
//     name: "firstName",
//   },
//   {
//     id: 3,
//     label: "Last Name",
//     type: "text",
//     name: "lastName",
//   },
//   {
//     id: 4,
//     label: "Email",
//     type: "email",
//     name: "nickname",
//   },
//   {
//     id: 5,
//     label: "Phone",
//     type: "text",
//     name: "phone",
//   },
//   {
//     id: 6,
//     label: "Street Address",
//     type: "text",
//     name: "address",
//   },
//   {
//     id: 7,
//     label: "Postal Code",
//     type: "number",
//     name: "postal",
//   },
//   {
//     id: 8,
//     label: "City",
//     type: "text",
//     name: "city",
//   },
//   {
//     id: 9,
//     label: "Country",
//     type: "select",
//     name: "country",
//   },
//   {
//     id: 10,
//     label: "Labels",
//     type: "select",
//     name: "labels",
//   },
// ];

const ModalInfo = ({ handleOpenModal, edit }) => {
  return (
    <div className="modal">
      <div className="modal-details">
        <div className="top-part">
          <h2>Add in Address Book</h2>
          <i onClick={handleOpenModal} className="bx bx-x"></i>
        </div>
        <div className="form">
          <form>
            <AddressForm handleOpenModal={handleOpenModal} />
          </form>
          <div className="btns">
            {edit ? (
              <>
                <Button content="Update" type="update" />
                <Button type="delete" content="Delete" />
              </>
            ) : (
              <Button type="add" content="Add New" />
            )}
          </div>
        </div>
      </div>
      <div onClick={handleOpenModal} className="overlay"></div>
    </div>
  );
};

export default ModalInfo;
