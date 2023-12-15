// Login.jsx
// import React, { useState } from "react";
import { useState } from "react";
import styles from "./login.module.css";

let count = 0;

function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    framework: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.framework) {
      newErrors.framework = "Please select a framework";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, you can perform your submit logic here
      alert(JSON.stringify(formData, undefined, 2));
    }
  };

  count++;

  return (
    <form className={styles.container} noValidate onSubmit={handleSubmit}>
      <div className={styles.count}>Render {count} times</div>
      <div>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name"
          required
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name"
          required
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <select
        name="framework"
        value={formData.framework}
        onChange={handleChange}
      >
        <option value="">I am interested in...</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
        <option value="svelte">Svelte</option>
      </select>
      {errors.framework && <p>{errors.framework}</p>}
      <input type="submit" />
    </form>
  );
}

export default Login;
