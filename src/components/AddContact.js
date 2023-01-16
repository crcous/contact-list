import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  let navigate = useNavigate();

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  useEffect(() => {
    console.log(enteredName);
  }, [enteredName]);

  const changeName = (event) => {
    setEnteredName(event.target.value);
    console.log(event);
  };

  const changeEmail = (event) => {
    setEnteredEmail(event.target.value);
    console.log("hi");
  };

  const changeNumber = (event) => {
    setEnteredNumber(event.target.value);
    console.log("hi");
  };

  const newVal = (event) => {
    props.addVal([...props.val, { ...transferHandler(event) }]);
    navigate("/");
  };

  const transferHandler = (event) => {
    event.preventDefault();
    console.log("Hello There");

    return {
      id: Math.round(Math.random() * 100000000),
      name: enteredName,
      email: enteredEmail,
      number: enteredNumber,
    };
  };

  return (
    <div>
      <div>
        <form>
          <label htmlFor="FullName">Full Name:</label>
          <input
            type="text"
            id="Name"
            value={enteredName}
            onChange={(e) => changeName(e)}
            placeholder="Enter Full Name Here"
          ></input>

          <label htmlFor="Email">Email Address:</label>
          <input
            type="text"
            id="Email"
            value={enteredEmail}
            onChange={(e) => changeEmail(e)}
            placeholder="Enter Email Address Here"
          ></input>

          <label htmlFor="Name">Phone Number:</label>
          <input
            type="text"
            id="PhoneNumber"
            value={enteredNumber}
            onChange={(e) => changeNumber(e)}
            placeholder="Enter Phone Number Here"
          ></input>
        </form>
      </div>

      <div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => newVal(event)}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default AddContact;
