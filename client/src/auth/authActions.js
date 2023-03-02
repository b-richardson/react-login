import React, { useState } from "react";
import { useNavigate } from "react-router";
 

 const navigate = useNavigate();
 
 // These methods will update the state properties.
//  function updateForm(value) {
//    return setForm((prev) => {
//      return { ...prev, ...value };
//    });
//  }

// This function will handle the submit
async function onSubmit(e) {

    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", email: "", password: "" });
    navigate("/");
  };


export default {onSubmit};