import './App.css';
import React, { useState } from "react";

function App() {

  const [file, setFile] = useState();

    function handleChange(image) { //run when "select file" is clicked
        

      const selectedImage = image.target.files[0]; //array because could potentially select multiple files, not in this case.

      if (!selectedImage) { //safely exits 
        return;
      }

      const validImageTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"]; //allowed file types

      if (validImageTypes.includes(selectedImage.type)) { //if right type, creates temporary to allow browser to display image
        setFile(URL.createObjectURL(selectedImage));
      } else {
        setFile(null); // Reset file state to prevent errors
      }
      
      //selectedImage is to be sent to back end

    }

    return (
      <div className="App">
      <h2>Add Image:</h2>
      <div className="upload-container">
        <label htmlFor="fileInput" className="upload-btn">Choose File</label>
        <input 
          id="fileInput" 
          type="file" 
          accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" 
          onChange={handleChange} 
        />
      </div>
      {file && <img src={file} className="uploaded-image" alt="Uploaded preview" />}
    </div>
    );
}

export default App;
