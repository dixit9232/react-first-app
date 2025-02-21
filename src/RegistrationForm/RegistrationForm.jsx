import { useState } from "react";
import "./RegistrationForm.css";

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const formField = [
    {
      name: "fname",
      label: "First Name",
      value: user.fname,
      type: "text",
    },
    {
      name: "lname",
      label: "Last Name",
      value: user.lname,
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      value: user.email,
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      value: user.password,
      type: "password",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      value: user.phoneNumber,
      type: "number",
    },
  ];

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <section className="container-fluid py-5">
      <form
        className="container d-flex flex-column align-items-center my-5 formCard text-black py-4 px-2"
        onSubmit={handleOnFormSubmit}
      >
        <h1>Sign Up</h1>
        <p className="py-3 fw-semibold"> Sign up to continue</p>

        <div className="row g-3 mx-5 mb-5">
          {formField.map((element, index) => {
            return (
              <TextField
                key={index}
                name={element.name}
                label={element.label}
                value={element.value}
                type={element.type}
                onChange={handleOnChange}
              />
            );
          })}
          <p className="align-self-start">
            Agree{" "}
            <span
              style={{ color: "blue" }}
              className="text-text-capitalize text-decoration-underline"
            >
              Terms & conditions
            </span>
          </p>
        </div>

        <button
          type="submit"
          className="btn px-5 py-2 btn-dark submitButton fs-4 fw-bold m-2"
        >
          Sign up
        </button>
      </form>
    </section>
  );
};

const TextField = ({ name, label, value, onChange, type }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 fs-5">
        {label}
      </label>
      <input
        className="form-control text-capitalize"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${label}`}
      />
    </div>
  );
};
