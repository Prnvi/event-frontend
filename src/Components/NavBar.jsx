import React from 'react'
import Logo from '../assets/logo5.png'
import { Link } from 'react-router-dom';
import './Style.css'
import { Component } from 'react';
import { FaTicketAlt, FaRegHeart ,} from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";
import {BsPersonCircle} from "react-icons/bs"
import {AiOutlinePlus} from 'react-icons/ai'
import {TfiTicket} from 'react-icons/tfi'


 function NavBar() {
  return (
    
    <div className="containerNavBar">
      <nav className="navbar navbar-expand-lg navbar-light sticky container-xxl flex-wrap flex-lg-nowrap ">
  
          {/* <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"> */}
          {/* <span className="navbar-toggler-icon"></span> */}
          {/* </button> */}
          <div className=" e-logo">
              <Link  to="/" >
              <img src={Logo} alt="logo" class="img-fluid object-fit-cover  rounded  ms-3 my-1 logoimg"/>
              </Link>
          </div>
          <div className="col-5 row bg-light mx-2">
              <div className='col-1 my-3 '>
                  <BsSearch/>
              </div>
              <div className="col-11 input">
                  <input class="form-control col-10 my-2 ms-0 me-2 searchbar" type="search" placeholder="Search" aria-label="Search"></input>
              </div>
          </div>
            
                <div className='col-2 d-flex row ms-2 justify-content-center plusdiv text-decoration-none '>
                    <Link to='/manage/event'>
                        <div className='row me-2 e-plus fs-4 my-2'><AiOutlinePlus/></div>
                        <div className="row mx-2 neweve text-decoration-none">Create new event</div>
                    </Link>
                </div>
            
            <div className='col-1 d-flex row '>
                <div className='row fs-5 my-2 heart'><FaRegHeart /> </div>
                <div className="row ms-3 mt-2 like">Likes</div>
            </div>
            <div className='col-1 d-flex row'>
                <div className='row mt-2 ticket-icon  mb-1 fs-4'><TfiTicket className='w-10'/></div>
                <div className="row  ticket mt-3 ms-2">Tickets</div>
            </div>
            <div className="d-flex row m-2">
                <div className='col fs-5  mt-2 '><BsPersonCircle/></div>
                <div className='col  mt-3 fs-8 '>abc@gmail</div>
            </div>
      </nav>
   </div>
  )
}
export default NavBar;