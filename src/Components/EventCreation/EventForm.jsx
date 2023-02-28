import React from 'react'
import { Link } from 'react-router-dom';
import {BsPersonCircle} from "react-icons/bs"
import Logo from '../../assets/logo5.png'

function EventForm() {
  return (
    <div className="eventForm-container">
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
        <div className=' form form-container w-300 bg-light'>
        <div class="col-md-6 form-outline">
            <h2>Create your Event</h2>
            <label class="form-label " for="typeText"></label>
            <input  class="form-control uname" type="text"  placeholder="Event Title"></input>
          </div>
          <div class="col-md-6 form-outline">
            <label class="form-label " for="typeText"></label>
            <input  class="form-control uname" type="text"  placeholder="Organizer name"></input>
          </div>
          <div class="row my-1">
                <div class="col-md-3  mt-4">
                    <select class="form-select"  placeholder="Category">
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
                <div class="col-md-3 form-outline">
                    <label class="form-label " for="typeText"></label>
                    <input  class="form-control uname" type="text"  placeholder="Sub Category"></input>
                </div>
          </div>
          <div class="col-md-6 form-outline">
                    <label class="form-label " for="typeText"></label>
                    <input  class="form-control uname" type="text"  placeholder="Description"></input>
                </div>
            </div>
            <hr></hr>
            <div className="event-location">
                
            </div>
        
    </div>
  )
}
export default EventForm;