import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
  display:flex;
  flex-direction:column;
  width:40%;
  gap:30px;
  margin:auto;
  margin-top:50px;
`;
// add style for text area
export const Textarea = styled.textarea`
  height:100px;
  font-size:16px;
  background:#acc;
  border-radius:5px;
  border:none;
`;

export const EditBookData = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();




  const handleUpdate = async(e) => {
    e.preventDefault();
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
    try {
      let res = await fetch(`http://localhost:8080/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          thumbnailUrl,
          longDescription
        })
      })
      
    } catch (error) {
      
    }

    navigate(`/books/${id}`)

  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          onChange={(e)=>setThumbnailUrl(e.target.value)}
        />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
          onChange={(e)=>setLongDescription(e.target.value)}
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
