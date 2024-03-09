import { useState } from "react";

export default function SigninForm() {
  const [formValues, setFormValues] = useState({ firstName: "", lastName: "" });
  const updateInputs = (e) => {
    setFormValues((currValues) => ({
      ...currValues,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <label htmlFor="firstname">First Name: </label>
      <input
        type="text"
        placeholder="first name"
        value={formValues.firstName}
        onChange={updateInputs}
        id="firstname"
        name="firstName"
      />
      <label htmlFor="lastname">Last Name: </label>
      <input
        type="text"
        placeholder="last name"
        value={formValues.lastName}
        onChange={updateInputs}
        id="lastname"
        name="lastName"
      />
      <button>Submit</button>
    </div>
  );
}
