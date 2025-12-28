import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';

const FeaturedSection = () => {

    const navigate=useNavigate();

    console.log("dummyShowsData",dummyShowsData);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overlow-hidden'>

        <div className="relative flex item-center justify-between pt-20 pb-10">
            <BlurCircle top='0' right='-80px'/>
            <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
            <button onClick={()=>navigate('/movies')} className='group flex items-center gap-2 text-gray-300 cursor-pointer'>
                View All
            </button>


        </div>
        <div className='flex flex-wrap gap-8 mt-10 max-sm:justify-center'>
          {
            dummyShowsData.slice(0,4).map((show)=>{
              return <MovieCard key={show.id} movie={show}/>
            })
          }

        </div>

        <div className="flex justify-center mt-20">
          <button 
          onClick={()=>{
            navigate('/movies',scrollTo(0,0))
          }}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition-rounded-md font-medium cursor-pointer'>
           Show more
          </button>
        </div>

    </div>
  )
}

export default FeaturedSection