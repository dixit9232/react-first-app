import { useState } from "react";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 30 },
    {
      name: "Smith",
      age: 27,
    },
  ]);

  const totalUsers = users.length;
  const avgAge = Math.floor(
    users.reduce((acc, user) => acc + user.age, 0) / totalUsers
  );

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="list-unstyled fs-3 mb-2">
            {user.name} - {user.age} years
          </li>
        ))}
      </ul>
      <p>
        Total users: <strong>{totalUsers}</strong>
      </p>
      <p>
        Average age: <strong>{avgAge}</strong>
      </p>
    </div>
  );
};
