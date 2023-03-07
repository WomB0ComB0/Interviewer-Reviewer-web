import React, { useState } from 'react'

const InputWithError = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        usernameError: false,
        passwordError: false,
      });
    
      const handleInputChange = (event) => {
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value,
          [`${event.target.name}Error`]: false,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (formValues.username === '') {
          setFormValues({
            ...formValues,
            usernameError: true,
          });
        }
        if (formValues.password === '') {
          setFormValues({
            ...formValues,
            passwordError: true,
          });
        }
        // Handle form submission
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              className={formValues.usernameError ? 'error' : ''}
            />
          </label>
          {formValues.usernameError && <div className="error-message">Please enter a username.</div>}
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              className={formValues.passwordError ? 'error' : ''}
            />
          </label>
          {formValues.passwordError && <div className="error-message">Please enter a password.</div>}
          <button type="submit">Submit</button>
        </form>
      );
};

export default InputWithError;