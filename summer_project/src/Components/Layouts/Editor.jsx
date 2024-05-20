import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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


export default Editor;
