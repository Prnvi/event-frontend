import React from 'react'
import NavBar from './NavBar'
import '../../Components/Style.css'

export default function MainPage() {
  return (
    <div>
      <NavBar/>
      <div className="pageContainer ">
          <div className="imageDiv">
              <img  className= "img-fluid " src='https://cdn.evbstatic.com/s3-build/fe/build/images/15dd4a3a546c59369ec4dd2fb092c4fe-5_tablet_1067x470.jpg' alt='img'></img>
             <div className="d-sm-none d-md-block">
                <p className="carousel-caption text-over-img1"> NOW </p>
                <p className="carousel-caption text-over-img2"> IS </p>
                <p className="carousel-caption text-over-img3"> YOUR </p>
                <p className="carousel-caption text-over-img4"> TIME </p>  
             </div>
             <div>
                 <button className='btn btn-primary   btnMainImg '> Find your next event</button>
             </div>
          </div>
          <div className="category m-5 ms-0">
              <h1 className='ms-5 pt-5'>Popular in City</h1>
                <div className="d-flex flex-row flex-wrap ms-5 my-4 categoryNames">
                    <div class="p-3 ps-0">All</div>
                    <div class="p-3">For you</div>
                    <div class="p-3">Online</div>
                    <div class="p-3">Today</div>
                    <div class="p-3">This weekend</div>
                    <div class="p-3">Free</div>
                    <div class="p-3">Music</div>
                    <div class="p-3">Food & drinks</div>
                    <div class="p-3">Charity</div>
                    <div class="p-3">Travel & outdoor</div>
                </div>
                <h4 className='ms-5'>Checkout trending Categories</h4>
                <div className="d-flex flex-row flex-wrap col-12 ms-5 categorybox">
                    <div class="flex catbox p-3 border m-2 ps-0 col-3">All</div>
                    <div class="flex catbox p-3 border m-2 col-3">For you</div>
                    <div class="flex catbox p-3 border m-2 col-3">Online</div>
                    <div class="flex catbox p-3 border m-2 col-3 ">All</div>
                    <div class="flex catbox p-3 border m-2 col-3 ps-0">For you</div>
                    <div class="flex catbox p-3 border m-2 col-3">Online</div>
                    <div class="flex catbox p-3 border m-2 col-3">For you</div>
                    <div class="flex catbox p-3 border m-2 col-3">Online</div>
                </div>
          </div>
      </div>
    </div>
  )
}
