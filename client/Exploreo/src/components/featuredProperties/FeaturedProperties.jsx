import React from 'react'
import useFetch from "../../hooks/useFetch";
import './FeaturedProperties.css';


const FeaturedProperties = () => {

    const {data,loading,error}=useFetch("http://localhost:8800/api/hotels?featured=false&limit=4")
    // console.log(data);
  return (
    <div className="fp">
        {
            loading?("Loading"):(
                <>
                {data.map((item)=>(
                   <div className="fpItem" key={item._id}>
                    <img
                    src={item.photos[0]}
                    alt=""
                    className="fpImg"></img>

                    <span className="fpName">{item.name}</span>
                    <span className="fpCity">{item.city}</span>
                    <span className="fpPrice">Starting from ${item.cheapestPrice}</span> 

                    {
                        item.rating && <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>

                        </div>
                    }

                   </div>
                ))}

                </>
            )
        }
        
      
    </div>
  )
}

export default FeaturedProperties
