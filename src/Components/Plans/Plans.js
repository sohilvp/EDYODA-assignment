import React, { useEffect, useState } from 'react'
import { plan } from '../../asset/feautre'
import {AiFillCheckCircle } from 'react-icons/ai'
import vector from '../../asset/download.svg'
import razorpay from '../../asset/razorpay.jpg'
import {IoRadioButtonOn,IoRadioButtonOffSharp} from 'react-icons/io5'
import './plans.css'

const Plans = () => {
    const [price,setPrice] = useState(179)
    const [discount,setDiscount] = useState(-18321)
    const [selected,setSelected] = useState(1)

    useEffect(()=>{
      discountFun()
    },[price])
    const getValue=(id)=>{
        let selecting = plan.find((x)=>x.id===id)
        setSelected(id)
        setPrice(selecting.total)
    }
    const discountFun=()=>{
      let discount=Math.abs(price-18500)
    setDiscount(discount)
    }
  return (
    <div>
     <section className='page-number'>
        <page><p>1</p><h5>sign Up</h5> </page>
        <page><p>2</p><h5>Subscribe</h5> </page>
    </section>
    <p className='plan-title'>Select your subcription plan</p>
    <div className="subscribe-list">
      <ul>
        <li className='expired-li plans'>
          <span className=' expired'>offer expired</span>
          <div className='left'> <IoRadioButtonOn className='icons disable'/> 12 Months Subscription </div>
          <div className='right'><p className='price-light'>Price <span className='price-big'>₹99</span> </p> <p className='price-light'>₹8<span className='light'>/mo</span></p> </div>
        </li>
        {/* subscription plans */}
         {plan.map((c)=>{
            return(
                <li onClick={()=>getValue(c.id)} style={selected===c.id ? {border:"2px solid green"}:{border:"2px solid #BEBEBE"}} className='plans' key={c.id}>
                    {c.id===1?<span className='subtitle'>{c.suggest}</span>:null}
                    <div className='left'> {selected===c.id ?<AiFillCheckCircle className='icons'/>:<IoRadioButtonOffSharp className='icons not'/>}{c.months}</div>
                    <div className='right'><p className='price-light'>Price <span className='price-big'>₹{c.total}</span> </p> <p className='price-light'>₹{c.permonth} <span className='light'>/mo</span></p> </div>
                </li>
            )
        })}
     </ul>
     <hr/>
     <div className="payment">
        <div className="fee-line1">
         <p>Subscription Fee</p>
         <p>₹18,500</p>
        </div>
        <div className="limited-offer">
          <div className="limited-line1">
            <p>Limited time offer</p>
            <p>-₹{discount}</p>
         </div>
          <div className="limited-line2">
            <img src={vector} alt="icon" style={{color:"red",width:"2rem"}} />
            <p>Offer valid till 25 March 2023</p>
          </div>
        </div>
        <div className="gst">
          <p> <span style={{fontWeight:"600",fontSize:"1rem"}}>Total</span>(incl. of 18% GST)</p>
          <h3>₹{price}</h3>
        </div>
      </div>
      <div className="buttons">
        <button className='btn btn1'>Cancel</button>
        <button className='btn btn2'>proceed to pay</button>
      </div>
      <img src={razorpay} alt="logo" className='razorpay' />
    </div>
  </div>

  )
}

export default Plans