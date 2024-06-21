import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import Navbar from "../components/navbar";

const fileTypes = ["JPG", "PNG"];

function Main(){
    const [file, setFile] = useState(null);
    const handleChange = (fil) => {
        setFile(fil);
        console.log(file)
        console.log(fil);
    };
    return (
        <div>
            <Navbar />
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} > 
                <img src="" alt="" />
            </FileUploader>
        </div>
    )
}

export default Main;