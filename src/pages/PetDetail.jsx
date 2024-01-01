import React from 'react'
import './PetDetail.css'
import heart from '../img/heart-regular.svg'
import dog6 from '../img/dog6.jpg'

const PetDetail = () => {
  return (
    <div className='pet-detail'>
        <Header/>
        <div className='c-wrap-detail'>
            <div className='c-bloc-detail'>
                 <div className='c-card-detail'>
                    <div className='detail-left'>
                        <h1>Zhadow</h1>
                        <div className='dog-detail'>
                          <p>German Shepherd Dog</p>
                          <p>3 years old</p>
                        </div>
                    </div>
                    <div className='detail-right'>
                        <img src={heart} alt="icon" className='favourite'/>
                    </div>
                 </div>
                 <div className='c-card-additional'>
                    <div className='additional-left'>
                        <img src={dog6} alt="img"></img>
                    </div>
                    <div className='additional-right'>
                        <h2>Additional Detail</h2>
                        <div className='additional-detail'>
                            <p>Gender:</p>
                            <p>Female</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default PetDetail