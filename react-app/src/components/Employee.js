import React from "react";

export default function Employee() {
  //   const [count, setCount] = useState(0);
  return (
    <div className="table-container">
      <table className="emp-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Birth Day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1 : </td>
            <td>Rutvik Patel</td>
            <td>Computer</td>
            <td>test@123</td>
            <td>9999999999</td>
            <td>Ahemdabad</td>
            <td>00/00/0000</td>
          </tr>
          <tr>
            <td> 1 : </td>
            <td>Rutvik Patel</td>
            <td>Computer</td>
            <td>test@123</td>
            <td>9999999999</td>
            <td>Ahemdabad</td>
            <td>00/00/0000</td>
          </tr>
        </tbody>
        <tr>
          <div> + Add new row </div>
        </tr>
      </table>
    </div>
  );
}
