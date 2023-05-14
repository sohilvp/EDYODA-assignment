import React from 'react'
import './header.css'
import feature,{plan} from '../../asset/feautre'
import Plans from '../Plans/Plans'

const Header = () => {
 
  return (
    <div className='header-container'>
        <div className='left-header-section'>
           <p className='heading'>Access curated courses worth <br/><spanx>₹18,500</spanx>  at just <color> ₹99 </color>per year!
           
           </p>
           {/* features */}
             <div className="list-container">
                {feature.map((x)=>{
                    return (
                  <div className='list' key={x.id}>
                    <img src={x.image} alt="icon" />
                    {x.text}
                  </div>
                 )
                 })}
             </div>
             
        </div>
        <div className='right-header-section'>
          <div className="box">

          <Plans/>
          
        </div>

      </div>
   </div>
  )
}

export default Header