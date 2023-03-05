import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {BsPersonCircle} from "react-icons/bs"
import Logo from '../../assets/logo5.png'
import('react-datepicker/dist/react-datepicker.css');


function EventForm() {
  const {register, handleSubmit,formState:{errors}} = useForm();
    
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [openVenue, setOpenVenue] = useState(true);
  const [singleEvent, setSingleEvent] = useState(true);
  const [ticketPrice,setTicketPrice] = useState(true);

const handelClickedOnline = () =>{
  setOpenVenue(false)
  console.log(openVenue)
}
const handelClickedVenue = () =>{
  setOpenVenue(true)
}
const handelClickedSingleEvent=() =>{
  setSingleEvent(true)
}
const handelClickedRecurringEvent = () => {
  setSingleEvent(false)
}
const handelClickedTicketPrice = () => {
  setTicketPrice(true)
}
const handelClickedFreeEvent = () => {
  setTicketPrice(false)
}

  return (
    <div className="eventForm-container ">
          {/* <!--Navigation Bar --> */}
         <nav className="navbar  nav-pills  navbar-light sticky container-xxl flex-wrap  ">
            <div className=" e-logo">
                  <Link  to="/" >
                  <img src={Logo} alt="logo" class="img-fluid object-fit-cover  rounded  ms-3 my-1 logoimg"/>
                  </Link>
            </div>
            <div className="d-flex row m-2">
                  <div className='col fs-5  mt-2 '><BsPersonCircle/></div>
                  <div className='col  mt-3 fs-8 '>abc@gmail</div>
            </div>
         </nav>
          {/* <!--Navigation Bar --> */}
         {/* bg-light  */}
     <form className="form page-container col-10 mx-auto" onSubmit={handleSubmit((data) =>{
        console.log(data);
     })}> 
        <div className="col-8 mx-auto center-section-container">
          {/* <!--Basic Infoof Event --> */}
          <div className='create-eve-div flex m-5 col-md-12'> 
            <div class="col-md-10 form-outline">
              <h2 >Create your Event</h2>
              <label className="form-label " for="typeText"></label>
              <input {...register("eventTitle",{required: true})} className="form-control eventTitle" name="eventTitle" type="text"  placeholder="Event Title"></input>
            </div>
            <div class="col-md-10 form-outline">
              <label className="form-label " for="typeText"></label>
              <input {...register("organizerName",{required: true})} className="form-control uname" name="organizerName" type="text"  placeholder="Organizer name"></input>
            </div>
            <div className="row my-1">
                <div className="col-md-4  mt-4">
                    <select {...register("category",{required: true})} className="form-select e-categorySelect"  placeholder="Category">
                        <option selected>Category</option>
                        <option value="1">Business & Professional</option>
                        <option value="2">Charity & Cause</option>
                        <option value="3">Community & Culture</option>
                        <option value="4">Education</option>
                        <option value="5">Family</option>
                        <option value="6">Food & Drinks</option>
                        <option value="7">Music</option>
                        <option value="8">Science & Technology</option>
                        <option value="9">Sports & Fitness</option>
                        <option value="10">Travel & OutDoor</option>
                        <option value="11">Other</option>
                    </select>
                </div>
                  <div className="col-md-4 form-outline">
                      <label className="form-label " for="typeText"></label>
                      <input {...register("subCategory")} className="form-control uname" type="text"  placeholder="Sub Category"></input>
                  </div>
            </div>
            <div className="col-md-10 form-outline">
                <label ClassName="form-label " for="typeText"></label>
                <input  {...register("description",{required: true})} className="form-control description" type="text"  placeholder="Description"></input>
            </div>
            </div>
            {/* <!--Basic Info of Event --> */}
            <hr></hr>
            <div className="location-main-div flex m-5 col-md-12">
              {/* <!--Event Location --> */}
              <div class="event-location ">
                <h2>Location</h2>
                <button className="btn btn-outline-primary me-2" onClick={handelClickedVenue}>Venue</button>
                <button {...register("online")}className="btn btn-outline-primary me-2" onClick={handelClickedOnline}>Online</button>
                <div>
                  {openVenue ? (
                      <div className="col-md-10">
                      <label className="form-label my-2 " for="typeText">Venue Location</label>
                      <input {...register("locationName",{required: true})}className="form-control location-name " type="text"  placeholder=""></input>
                    </div>
                  ): (null) }
                </div>
              </div>
            </div>
            {/* <!--Event Location --> */}
            <hr></hr>
            <div className="datTimeMainDiv flex m-5 col-md-12">
                  {/* <!--Event Date & Time --> */}
                <div className='eOccurance'>
                  <h2>Date and time</h2>
                  <button className="btn btn-outline-primary me-2" onClick={handelClickedSingleEvent}>Single Event</button>
                  <button {...register("recurringEvent")}className="btn btn-outline-primary me-2" onClick={handelClickedRecurringEvent}>Recurring Event</button>
                </div>
                  {singleEvent ? (
                  <div>
                      <div className='datePickerDiv row'>
                        <input {...register("eStartDate",{required: true})}className="col-4 my-2 ms-2 startdatepick "selected={date} type="date" onChange={e=>setDate(e.target.value)}/>
                        <div className="col-md-5  e-startTime ">
                          <input {...register("eStartTime",{required: true})} className="col-12 my-2 ms-2 startTimepick "selected={time} type="time" onChange={e=>setTime(e.target.value)}/>
                        </div>  
                     </div> 
                    <div className='datePickerDiv row'>
                      <input {...register("eEndDate",{required: true})}className="col-4 my-2 ms-2 enddatepick "selected={date} type="date" onChange={e=>setDate(e.target.value)}/>
                        <div className="col-md-5  e-endTime ">
                          <input {...register("eEndTime",{required: true})} className="col-12 my-2 ms-2 endTimepick"  placeholder="event end time" selected={time} type="time" onChange={e=>setTime(e.target.value)}/>
                        </div>  
                    </div> 
                  </div>
                  ):( <p>You’ll be able to set a schedule for your recurring event in the next step.</p>
                  )}
              </div>
            {/* <!--Event Date & Time --> */}
            <hr></hr>
            <div className="ticketPrice-div flex m-5 col-md-12">
                {/* <!--Event Ticket Price--> */}
                <div class="e-ticketPrice ">
                  <h2>Ticket Price</h2>
                  <button className="btn btn-outline-primary me-2" onClick={handelClickedTicketPrice}>Ticket Price</button>
                  <button {...register("freeEvent")}className="btn btn-outline-primary me-2" onClick={handelClickedFreeEvent}>Free</button>
                    {(ticketPrice ? (
                      <div className="col-md-10">
                        <label className="form-label my-2 " for="typeText">Price</label>
                        <input {...register("eTicketPrice")} className="form-control w-10 location-name " type="text"  placeholder="Enter ticket price"></input>
                     </div>
                    ): (null))}
                  
                </div>
                <div>
                  
                </div>
            </div>
            {/* <!--Event Ticket Price--> */}
            <hr></hr>
            <div>
                {/* <!--Event Capacity--> */}
                <div className="flex m-5 col-md-10 ">
                  <h2 className="">Event Capacity</h2>
                  <label className="form-label my-2  " for="typeText">Enter total number of seats available for the event</label>
                  <input {...register("eCapacity",{required: true})}className="form-control col-4 location-name " type="text"  placeholder="Enter capacity"></input>
                </div>
                 {/* <!--Event Capacity--> */}
              </div>
              <button type="submit" class="btn btn-primary mb-5 ms-5">Create Event</button> 
        </div> 
        
      </form>   
    </div>
  )
}
export default EventForm;