import { Routes, Route } from "react-router-dom";
import TableData from "./TableData";
import AddContact from "./AddContact";
import ContactInfo from "./ContactInfo";
import { useState } from "react";

const Main = () => {
  const [val, setVal] = useState([]);

  const addVal = (value) => {
    setVal(value);
  };

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<TableData val={val} />} />
        <Route
          exact
          path="/addcontact"
          element={<AddContact addVal={addVal} val={val} />}
        />
        <Route
          path="/contactinfo/{contacts.id}"
          element={<ContactInfo addVal={addVal} />}
        />
      </Routes>
    </main>
  );
};

export default Main;
