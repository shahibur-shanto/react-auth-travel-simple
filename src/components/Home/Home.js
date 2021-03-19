import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import fakeData from '../../fakeData'
import './Home.css';


const Home = () => {
    const [vehicle,setvehicle] = useState([]);
    const data = fakeData;
    console.log(data);

    
    return (
        <div className="row w-100 main-div justify-content-center">
            {
                data.map(data=>{
                    return(
                        <div className="w-100 mr-5 col-lg-2 col-sm-12 text-center vehicle">
                            <img className="rounded img-fluid vehicle-image" src={data.image} alt=""></img> 
                            <h1>{data.name}</h1>
                                          
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;