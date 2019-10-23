import React, {useState, useEffect} from "react";
import "./App.css";
import Title from "./Title.js"
import axios from 'axios';

function App() {

  const [pic, setPic] = useState();

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=hwZ4OKsAQX2cJOicFXlLzFyTTfzguF43YMjJJAYg')
        .then((res) => {
            console.log(res);
            setPic(res)
        })
        .catch((err) => {
            console.log("ERROR" + err);
        })
    }, []);
    if (!pic) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <header>
        <h1>NASA's Astronomy Picture of the Day</h1>
      </header>
      <Title 
        copyright={pic.data.copyright}
        title={pic.data.title}
        url={pic.data.url}
      />
      <div className="img-box">
        <img id='img' src={pic.data.hdurl} alt='nada'></img>
      </div>
    </div>
  );
}

export default App;
