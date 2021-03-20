import { useHistory } from 'react-router';
import './Vehicle.css';

const Vehicle = (props) => {
    const data  = props.vehicle;
    const {type} = data;
    let history = useHistory();
    const handleClick = (vehicleType)=>{
        history.push(`/destination/${vehicleType}`);
        
    }
     return (
        <>
            <div onClick={()=>handleClick(type)} className="w-100 mr-5 col-lg-2 col-sm-12 text-center vehicle">
                            <img className="rounded img-fluid vehicle-image" src={data.image} alt=""></img> 
                            <h1>{data.name}</h1>
                                          
                        </div>
        </>
    );
};

export default Vehicle;