import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

<<<<<<< HEAD
const  Editor = () =>{
    const [datas , setDatas] = useState();
    return (
      <div className="ml-64 ">
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={ editor => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data)
            setDatas(data)          }}
        />
        <div>
            <br />
        </div>
      </div>
    );
  }
=======
const Editor = ({ defaultContent, onDataChange }) => {
  const [TContent, setTContent] = useState(defaultContent || ""); // Initialize with defaultContent if provided
>>>>>>> e4fc2c6c2d297175a06b9bdc2a4134bebd41cb27

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