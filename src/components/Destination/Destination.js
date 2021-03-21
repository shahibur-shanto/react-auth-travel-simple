import React, { useEffect, useState } from 'react';
import './Destination.css';
import Car from '../../fakeData/Cars';
import Bike from '../../fakeData/Bike';
import Bus from '../../fakeData/Bus';
import Train from '../../fakeData/Train';
import { useParams } from 'react-router';
// import * as React from 'react';
// import { useState } from 'react';
import ReactMapGL from 'react-map-gl';





const Destination = () => {
    const [vehicle,setVehicle] = useState('');
    const [show,setShow] = useState('none');
    const [data,setData] = useState([])
    const {vehicleType} = useParams()
    // console.log(typeof(vehicleType))
    useEffect(()=>{
        
        if(vehicleType==='bike'){
            setData(Bike)
        }
        if(vehicleType==='car'){
            setData(Car)
        }
        if(vehicleType==='bus'){
            setData(Bus)
        }
        if(vehicleType==='train'){
            setData(Train)
        }
        
    },[vehicleType])

    
    useEffect(()=>{
        setVehicle(vehicleType);
    },[vehicleType])
    console.log(typeof(vehicle),vehicle,typeof('bike'));
    const styleShow = {
        display:show,
        margin:"10px"
    }
    
    const handleSearch = (e)=>{
        if (show==='none'){
            setShow('block')
        }
        
        e.preventDefault()
    }   
    

    function Map() {
        const [viewport, setViewport] = useState({
          width: 800,
          height: 400,
          latitude: 23.810331,
          longitude: 90.412521,
          zoom: 10
        });
      
        return (
          <ReactMapGL
          mapboxApiAccessToken = {"pk.eyJ1Ijoic2hhaGlidXIiLCJhIjoiY2ttajlmM2k0MG93NzJvczExcGpsODlvciJ9.Qe7-q0gOZJ8jONCpbddJwQ"}
            {...viewport}
            
            onViewportChange={nextViewport => {
                
                setViewport(nextViewport);
                
                }}
          />
        );
      }
    
    
    return (
        <div className="row">
          <div className="col-md-3">
               <form className="form form-style">
                   <label for="pick-from">Pick From</label>
                   <input name="pick-from" type="text" placeholder="Pick From" className="form-control w-50"></input>
                   <label for="pick-to">Pick To</label>
                   <input name="pick-to" type="text" placeholder="Pick To" className="form-control w-50"></input>
                   <br/>
                   <input className="mb-2" type="date" id="date" name="travelDate"/>
                   <br/>
                   <button type="submit" onClick={handleSearch} className="btn btn-success">Search</button>
                   {
                    data.map(data=>{
                        return(
                            <div style={styleShow}>
                            <img className="w-25" src={data.image} alt=""></img>
                            <span className="p-1">{data.name}</span>
                            <span className="p-1">{data.price} </span>
                            </div>
                        )
                    })
                   }
                   
               </form>
               
          </div>
          <div className="col-md-9 map">
          <Map></Map>
                  
          </div>  
          
        </div>
    );
};

export default Destination;