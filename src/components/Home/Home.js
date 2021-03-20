import fakeData from '../../fakeData'
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';


const Home = () => {
    const data = fakeData;
    
    return (
        <div className="main-contain">
        <div  className="row w-100 main-div justify-content-center">
            {
                data.map(data=><Vehicle vehicle={data}></Vehicle>)
                    
                
            }
        </div>
        </div>
    );
};

export default Home;