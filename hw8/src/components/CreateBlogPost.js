import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateBlogPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // if (error) {
    //   return <div>Incorrect password!</div>
    // }
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:9000/blog/create-post", {
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
  
    setForm({ title: "", content: ""});
    navigate("/");
  }
  
  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create Blog Post</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            rows="10"
            className="form-control"
            id="content"
            value={form.content}
            onChange={(e) => updateForm({ content: e.target.value })}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={form.password}
            // onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>  */}
        {/* <input placeholder="password"/> */}
        {/* <br />
        <input placeholder="password"/>
        <br /> */}
        <div className="form-group">
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
 }