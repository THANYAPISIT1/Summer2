import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ onDataChange }) => {
  const [TContent, setTContent] = useState(""); // State to store the value of TContent

  const handleDataChange = (event, editor) => {
    const newData = editor.getData();
    setTContent(newData);
    onDataChange(newData); // Pass the value of TContent to the parent component
  };

  return (
    <div className="ml-64">
      <CKEditor
        editor={ClassicEditor}
        data=""
        onChange={handleDataChange}
      />
      <div>
        <br />
        <h1>{TContent}</h1>
      </div>
    </div>
  );
};

export default Editor;