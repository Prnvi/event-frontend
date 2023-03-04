import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {BsPersonCircle} from "react-icons/bs"
import Logo from '../../assets/logo5.png'
import DatePicker from "react-datepicker";
import('react-datepicker/dist/react-datepicker.css');

function EventForm() {

  const [date, setDate] =useState();
  console.log("Date", date);
 

const [clicked, setClicked] = useState(false)
const [click, setClick] = useState(false)
const handelClickedVenue = () =>{
  setClicked(true);

}
const handelClickedOnline = () =>{
  setClick(true)
}


 

  return (
    <div className="eventForm-container ">
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
         {/* bg-light  */}
     <form className="form page-container col-10 mx-auto"> 
        <div className="col-8 mx-auto center-section-container">
          <div className='create-eve-div flex m-5 col-md-12'>
            <div class="col-md-10 form-outline">
              <h2 >Create your Event</h2>
              <label className="form-label " for="typeText"></label>
              <input  className="form-control uname" type="text"  placeholder="Event Title"></input>
            </div>
            <div class="col-md-10 form-outline">
              <label className="form-label " for="typeText"></label>
              <input  className="form-control uname" type="text"  placeholder="Organizer name"></input>
            </div>
            <div className="row my-1">
                <div className="col-md-4  mt-4">
                    <select className="form-select e-categorySelect"  placeholder="Category">
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
                    <input  className="form-control uname" type="text"  placeholder="Sub Category"></input>
                </div>
            </div>
            <div className="col-md-10 form-outline">
                <label ClassName="form-label " for="typeText"></label>
                <input  className="form-control description" type="text"  placeholder="Description"></input>
            </div>
            </div>
            <hr></hr>
            <div className="location-main-div flex m-5 col-md-12">
              <div class="event-location ">
                <h2>Location</h2>
                <label  className="btn btn-outline-primary me-2" for="btn-check-outlined">Venue</label>  
                <input  type="radio" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
                <input  type="radio" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
                <label  onClick={handelClickedOnline}className="btn btn-outline-primary m-2" for="btn-check-outlined">Online</label>
              </div>
              <div>
                <div className="col-md-10">
                  <label className="form-label my-2 " for="typeText">Venue Location</label>
                  <input className="form-control location-name " type="text"  placeholder=""></input>
                </div>
              </div>
                  {/* {
                (click ? (
                  <p>Online events have unique page</p>):
                  (<div>
                    <label className="form-label" for="typeText">Venue Location</label>
                      <input className="form-control orginzer-name" type="text"  placeholder=""></input>
                    </div>))
              } */}
            </div>
            <hr></hr>
            <div className="datTimeMainDiv flex m-5 col-md-12">
              <div className='eOccurance'>
                 <h2>Date and time</h2>
                 <label  className="btn btn-outline-primary me-3" for="btn-check-outlined">Single Event</label>  
                 <input  type="radio" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
                 <label  className="btn btn-outline-primary m-2" for="btn-check-outlined">Recurring Event</label>  
                 <input  type="radio" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
              </div>
              <div className='datePickerDiv row'>
                 <input className="col-4 my-2 ms-2 startdatepick "selected={date} type="date" onChange={e=>setDate(e.target.value)}/>
                 <div className="col-md-5  e-startTime ">
                    <select className="form-select mt-2 e-startTimeSelect "  placeholder="Start Time">
                        <option selected>7:00 PM </option>
                        <option value="7:00">7:00 PM</option>
                        <option value="7:30">7:30 PM</option>
                        <option value="8:00">8:00 PM</option>
                        <option value="8:30">8:30 PM</option>
                        <option value="9:00">9:00 PM</option>
                        <option value="9:30">9:30 PM</option>
                        <option value="10:00">10:00 PM</option>
                        <option value="10:30">10:30 PM</option>
                        <option value="11:00">11:00 PM</option>
                        <option value="11:30">11:30 PM</option>
                        <option value="00:00">00:00 AM</option>
                        <option value="00:30">00:30 AM</option>
                        <option value="01:00">1:00 AM</option>
                        <option value="01:30">1:30 AM</option>
                        <option value="02:00">2:00 AM</option>
                        <option value="02:30">2:30 AM</option>
                        <option value="03:00">3:00 AM</option>
                        <option value="03:30">3:30 AM</option>
                        <option value="04:00">4:00 AM</option>
                        <option value="04:30">4:30 AM</option>
                        <option value="05:00">5:00 AM</option>
                        <option value="05:30">5:30 AM</option>
                        <option value="06:00">6:00 AM</option>
                        <option value="06:30">6:30 AM</option>
                        <option value="7:00">7:00 AM</option>
                        <option value="7:30">7:30 AM</option>
                        <option value="8:00">8:00 AM</option>
                        <option value="8:30">8:30 AM</option>
                        <option value="9:00">9:00 AM</option>
                        <option value="9:30">9:30 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="10:30">10:30 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:00">12:30 PM</option>
                        <option value="01:00">1:00 PM</option>
                        <option value="01:30">1:30 PM</option>
                        <option value="02:00">2:00 PM</option>
                        <option value="02:30">2:30 PM</option>
                        <option value="03:00">3:00 PM</option>
                        <option value="03:30">3:30 PM</option>
                        <option value="04:00">4:00 PM</option>
                        <option value="04:30">4:30 PM</option>
                        <option value="05:00">5:00 PM</option>
                        <option value="05:30">5:30 PM</option>
                        <option value="06:00">6:00 PM</option>
                        <option value="06:30">6:30 PM</option>
                    </select>
                  </div>  
               </div> 
               <div className='datePickerDiv row'>
                 <input className="col-4 my-2 ms-2 enddatepick "selected={date} type="date" onChange={e=>setDate(e.target.value)}/>
                 <div className="col-md-5  e-endTime ">
                    <select className="form-select mt-2 e-endTimeSelect "  placeholder="Start Time">
                        <option selected>7:00 PM </option>
                        <option value="7:00">7:00 PM</option>
                        <option value="7:30">7:30 PM</option>
                        <option value="8:00">8:00 PM</option>
                        <option value="8:30">8:30 PM</option>
                        <option value="9:00">9:00 PM</option>
                        <option value="9:30">9:30 PM</option>
                        <option value="10:00">10:00 PM</option>
                        <option value="10:30">10:30 PM</option>
                        <option value="11:00">11:00 PM</option>
                        <option value="11:30">11:30 PM</option>
                        <option value="00:00">00:00 AM</option>
                        <option value="00:30">00:30 AM</option>
                        <option value="01:00">1:00 AM</option>
                        <option value="01:30">1:30 AM</option>
                        <option value="02:00">2:00 AM</option>
                        <option value="02:30">2:30 AM</option>
                        <option value="03:00">3:00 AM</option>
                        <option value="03:30">3:30 AM</option>
                        <option value="04:00">4:00 AM</option>
                        <option value="04:30">4:30 AM</option>
                        <option value="05:00">5:00 AM</option>
                        <option value="05:30">5:30 AM</option>
                        <option value="06:00">6:00 AM</option>
                        <option value="06:30">6:30 AM</option>
                        <option value="7:00">7:00 AM</option>
                        <option value="7:30">7:30 AM</option>
                        <option value="8:00">8:00 AM</option>
                        <option value="8:30">8:30 AM</option>
                        <option value="9:00">9:00 AM</option>
                        <option value="9:30">9:30 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="10:30">10:30 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:00">12:30 PM</option>
                        <option value="01:00">1:00 PM</option>
                        <option value="01:30">1:30 PM</option>
                        <option value="02:00">2:00 PM</option>
                        <option value="02:30">2:30 PM</option>
                        <option value="03:00">3:00 PM</option>
                        <option value="03:30">3:30 PM</option>
                        <option value="04:00">4:00 PM</option>
                        <option value="04:30">4:30 PM</option>
                        <option value="05:00">5:00 PM</option>
                        <option value="05:30">5:30 PM</option>
                        <option value="06:00">6:00 PM</option>
                        <option value="06:30">6:30 PM</option>
                    </select>
                  </div>  
               </div> 
            </div>
            <hr></hr>
            <div className="ticketPrice-div flex m-5 col-md-12">
              <div class="e-ticketPrice ">
                <h2>Ticket Price</h2>
                <label  className="btn btn-outline-primary me-2" for="btn-check-outlined">Free</label>  
                <input  type="radio" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
                <input  type="radio" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
                <label  onClick={handelClickedOnline}className="btn btn-outline-primary m-2" for="btn-check-outlined">Ticket Price</label>
              </div>
              <div>
                <div className="col-md-10">
                  <label className="form-label my-2 " for="typeText">Price</label>
                  <input className="form-control w-10 location-name " type="text"  placeholder="Enter ticket price"></input>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
                <div className="flex m-5 col-md-10 ">
                <h2 className="">Event Capacity</h2>
                  <label className="form-label my-2  col-7" for="typeText">Enter total number of seats available for the event</label>
                  <input className="form-control col-4 location-name " type="text"  placeholder="Enter capacity"></input>
                </div>
              </div>
        </div> 
        <button className="btn submitbtm">Submit</button>   
      </form>   
    </div>
  )
}
export default EventForm;