import { useEffect, useState } from 'react';
import axios from "axios";

function FetchAutos() {
    const [autoImages, setAutoImages] = useState(null)
    const [errorPage, setErrorPage] = useState(null)

    useEffect(() => {
        axios.get('http://autos/greyFiats').then(response => {
            setAutoImages(response.data);
        });
    }, []);

    return (
        <div className="App">
            {!errorPage ?
                <>
                    <p>Car Images</p>
                    {autoImages && autoImages.map(auto => <img className='auto' src={auto} />)}
                </>
                : <p className='error'>Error 416</p>
            }
        </div>
    );
}

export default FetchAutos;
