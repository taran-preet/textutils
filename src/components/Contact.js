import React from "react";

export default function Contact(props) {
  let styling = { border: "1px solid white" };

  return (
    <>
      <div class="container">
        <p>
          <h1>
            <i>TextUtils</i>
          </h1>
        </p>
        <table className="table table-striped my-4" style={styling}>
          <thead>
            <tr className={`text-${props.color}`}>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className={`text-${props.color}`}>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr className={`text-${props.color}`}>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr className={`text-${props.color}`}>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
