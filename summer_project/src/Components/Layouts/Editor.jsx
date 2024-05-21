import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ defaultContent, onDataChange }) => {
  const [TContent, setTContent] = useState(defaultContent || ""); // Initialize with defaultContent if provided

  const handleDataChange = (event, editor) => {
    const newData = editor.getData();
    setTContent(newData);
    onDataChange(newData); // Pass the value of TContent to the parent component
  };

  return (
    <div className="ml-64">
      <CKEditor
        editor={ClassicEditor}
        data={defaultContent}
        onChange={handleDataChange}
      />
    </div>
  );
};

export default Editor;

