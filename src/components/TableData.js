import { useNavigate } from "react-router-dom";
import AddContact from "./AddContact";

function TableData(props) {
  let navigate = useNavigate();

  console.log(props.val);

  const tableRows = props.val.map((val) => {
    return (
      <tr
        className="clickable-row"
        key={val.id}
        data-href="url://"
        onClick={() => navigate("/{contactinfo}")}
      >
        <td>{val.name}</td>
        <td>{val.email}</td>
        <td>{val.number}</td>
      </tr>
    );
  });

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate("/addcontact")}
      >
        Add Contact
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
export default TableData;
