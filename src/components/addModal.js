import React from 'react'
import './form.scss'

export default function AddModal (props)
{
  

   if(!props.show)

   return null;
 
   else

   return(        

  
    <div className="container">  
    <form  id ="contact" method ="put">
    <h3>Borrow Money</h3>
    
    <fieldset>
      <input placeholder="Phone Number" type="text" tabIndex="1" onChange={props.changePhone} required autoFocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Amount" type="text" tabIndex="2" onChange={props.changeAmount} required autoFocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Reason for Borrow" type="text" tabIndex="3" onChange={props.changeReason} required/>
    </fieldset>
    <fieldset>
      <input placeholder="Duration(In Days)" type="text" tabIndex="4" onChange={props.changeDuration} required/>
    </fieldset>
    <fieldset>
      <input placeholder="UPI  Address" type="text" tabIndex="5" onChange={props.changeUPI} required/>
    </fieldset>
   
    <fieldset>
      <button  type="submit"  data-submit="...Sending" onClick={props.onSubmit}>SUBMIT</button>
    </fieldset>
  </form>
 </div>
  

      
       
   )



}