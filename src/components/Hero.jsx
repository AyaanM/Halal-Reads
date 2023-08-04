import useState from 'react'
import {Book_Reviews, Filters, Navbar} from '.' // was just testing things out

const Hero = () => { 
  return ( // majority of ui should go here I assume, but its up to you
  // how you want to do things, for now we can make a dummy site and
  // then later populate it with the stuff we need from SQL database
    <div>
      <div>
        <div class="flex bg-primary p-4"> 
          <ul class="w-60 h-fit py-4 px-4 bg-secondary rounded-xl">
            <div class="px-1 py-1 h-full bg-altSecondary text-1xl text-center text-secondary rounded-xl">
              Filters
              <div className="align-text-bottom toolTip">&#63;
                <span className="toolTipText">Not our reccommended age rating, but where the publisher put it at</span>
              </div>
              <hr className='height: 20px'></hr>
            </div>
          </ul>
          <ul class="w-full bg-primary">
            <div class="py-4 px-4">
              <Book_Reviews/>
            </div>
          </ul>
          <ul class="w-60 h-fit py-4 px-4 bg-secondary rounded-xl ">
            <div class="px-1 py-1 h-full bg-altSecondary text-1l text-center text-secondary rounded-xl">
              Trending Reviews
            </div>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero 