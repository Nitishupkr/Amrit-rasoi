import { IMG_CDN_URL } from "./constant"
export const RestrauntCard=({name,cloudinaryImageId,lastMileTravelString,cuisines})=>{

   return (
       <div className="card">
                 <img src={IMG_CDN_URL
          +
       cloudinaryImageId
       }
     />
           <h2>{name}</h2>
           <h3>{cuisines}</h3>
           <h4>{lastMileTravelString} stars rating</h4>
       </div>
   )
}
