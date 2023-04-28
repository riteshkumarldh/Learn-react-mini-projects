const AddressTable = ({ openEditModal }) => {
  return (
    <section className="book-table">
      <table>
        <thead className="table-head">
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Labels</th>
            <th>By Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={openEditModal}>
            <td>1</td>
            <td className="flex-col">
              <span>Ritesh</span>
              <span>Rahon Road Bastii jodhewal, Ludhiana</span>
            </td>
            <td className="label">Family</td>
            <td>Ritesh kumar</td>
            <td>45645645645</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="flex-col">
              <span>Ritesh</span>
              <span>Rahon Road Bastii jodhewal, Ludhiana</span>
            </td>
            <td>Family</td>
            <td>Ritesh kumar</td>
            <td>45645645645</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="flex-col">
              <span>Ritesh</span>
              <span>Rahon Road Bastii jodhewal, Ludhiana</span>
            </td>
            <td>Family</td>
            <td>Ritesh kumar</td>
            <td>45645645645</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AddressTable;
