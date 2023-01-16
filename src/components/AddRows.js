// import { useEffect, useState } from "react";
// import AddContact from "./AddContact";
// import { useNavigate } from "react-router-dom";

// const AddRows = (data, props) => {
//   let navigate = useNavigate();

//   const [contactData, setContactData] = useState([]);
//   useEffect(() => {
//     if (props.val === undefined) {
//       return;
//     }

//     setContactData([...contactData, { ...props.val }]);
//   }, []);

//   console.log(props.val);
//   console.log(contactData);
//   const updatedContactData = [...contactData];
//   updatedContactData.push(data);

//   const tableRows = updatedContactData.map((val) => {
//     return (
//       <tr
//         className="clickable-row"
//         key={val.id}
//         data-href="url://"
//         onClick={() => navigate("/{contactinfo}")}
//       >
//         <td>{val.image}</td>
//         <td>{val.name}</td>
//         <td>{val.email}</td>
//         <td>{val.number}</td>
//       </tr>
//     );
//   });

//   return <tbody>{tableRows}</tbody>;
// };

// export default AddRows;
