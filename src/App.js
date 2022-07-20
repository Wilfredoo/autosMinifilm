import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import autos from "./autos";

function App() {
  const [autoImages, setAutoImages] = useState(null)
  const [errorPage, setErroPage] = useState(true)

  useEffect(() => {
    setAutoImages(autos)
  }, []);

  return (
    <div className="App">
    {!errorPage ?
    <>
        <p>Car Images</p>
        {autoImages && autoImages.map(auto => <img className='auto' src={auto} />

        )}
      </>
      : <p className='error'>Error 416</p>
}
      </div> 
  );
}

export default App;
