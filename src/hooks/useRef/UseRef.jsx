import { useRef } from "react";

export const UseRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
   console.log(username);
   console.log(password);
   

    console.log(`Username Value ${username.current.value}`);
    console.log(`Password Value ${password.current.value}`);
  };
  return (
    <form onSubmit={handleOnSubmit} className="container fs-3 my-5">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        className="form-control mb-5 fs-4"
        name="username"
        ref={username}
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        className="form-control mb-5 fs-4"
        name="password"
        ref={password}
      />

      <div className="mx-auto text-center">
        <button className="btn btn-primary fs-4 px-5 py-2"> Submit</button>
      </div>
    </form>
  );
};
