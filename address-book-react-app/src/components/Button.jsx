const Button = ({ content, type, handleOpenModal }) => {
  const delStyles = {
    backgroundColor: "red",
  };

  const updateStyles = {
    backgroundColor: "green",
  };

  return (
    <button
      className="add-btn"
      style={
        type === "delete" ? delStyles : type === "update" ? updateStyles : null
      }
      onClick={handleOpenModal}
    >
      {type === "add" && <i className="bx bx-plus"></i>}
      <span>{content}</span>
    </button>
  );
};

export default Button;
