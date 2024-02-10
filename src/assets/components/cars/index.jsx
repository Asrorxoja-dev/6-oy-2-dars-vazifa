// import { Car } from "../App.jsx";
// import {cars} from "../components/App.jsx";
// import {cars} from "./src/assets/components/cars/index.jsx"
import './index.css'




 
function Cars(props){
  const {image, title, start_production} = props
   return (
      <>
     


      <div className="card-wrapper">
        
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg"  alt=""  />
          
          <div className='text'>
          <h2 className='title'> Name:   Mazda MX-5</h2>
           <h3 className='year'> Year:  1989</h3>
           <h3 className='class'> Class:   Sports car Roadster</h3>
          </div>
       </div>
      
      </>
   );
}





  export {Cars};
