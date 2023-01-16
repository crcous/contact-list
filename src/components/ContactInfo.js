const ContactInfo = () => {
  return (
    <table className="table table-bordered">
      {/* <thead>
        <tr>
          <th scope="col">Profile Pic</th>
        </tr>
      </thead> */}
      <tbody>
        <tr>
          <th scope="row" id="Full Name"></th>
          <td id="Email"></td>
          <td id="Phone Number"></td>
        </tr>
      </tbody>
      <button type="button" className="btn btn-primary">
        Back
      </button>
    </table>
  );
};

export default ContactInfo;
