import React from 'react'
import './form.css'




export default function AddModal (props)
{
  

   if(!props.show)

   return null;
 
   else

   return(        

  
  <div className = "modal-content" >
    <span className="close" onClick = {props.onClose}>&times;</span>
    <h3>Send a New Payment</h3>
    
    <fieldset>
      <input placeholder="Application Name" type="text" tabindex="1" onChange={props.changePhone} required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Application Purpose" type="email" tabindex="2" onChange={props.changeReason} required/>
    </fieldset>
    <fieldset>
      <input placeholder="IP Address" type="tel" tabindex="3" onChange={props.changeDuration} required/>
    </fieldset>
    <fieldset>
      <input placeholder="IP Address" type="tel" tabindex="3" onChange={props.changeUPI} required/>
    </fieldset>
   
    <fieldset>
      <button  type="submit" id="contact-submit" data-submit="...Sending" onClick={props.OnSubmit}>SUBMIT</button>
    </fieldset>
  
 </div>
  

      
       
   )



}