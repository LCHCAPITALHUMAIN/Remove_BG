import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setfile] = useState(null);
  const [link, setLink] = useState("");
  const change = (e) => {
    setfile(e.target.files[0]);
    console.log(file);
  };
  const upload = () => {
    console.log("in the upload");
    const fd = new FormData();
    fd.append("image", file, file.name);
    axios
      .post(
        "https://8011-k2bd-gcpfastapipoetry-d6bbc4pe3ac.ws-eu80.gitpod.io/image/remove_bg",
        fd
      )
      .then((res) => setLink("data:image/png;base64," + res.data.image))
      .then(() => console.log(link));
  };

  return (
    <div className="App">
      <input type="file" name="image" onChange={change} />
      <input type="submit" onClick={upload} />
      <img src={link} alt="" />
    </div>
  );
}

export default App;
