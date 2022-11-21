import React, { useState } from "react";
// import Login from "./login";
import Input from "./input";
// import Register from "./Register";


function App() {



  let [contact, setContact] = useState({
    fname: " ",
    lname: "",
    email: ""
  });

  function handleChange(event) {
    let { name, value } = event.target;

    setContact((preValue) => {

      return {
        ...preValue,
        [name]: value
      }

    }
    )
  }










  return (
    <>


      <div className="Form">
        <h1>Hello {contact.fname} {contact.lname}</h1>
        <p>{contact.email}</p>
        <Input
          name="fname"
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          value={contact.fname}

        />
        <Input
          name="lname"
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          value={contact.lname}

        />
        <Input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
          value={contact.email}

        />


      </div>
    </>
  );

}

export default App;
