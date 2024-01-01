import React, { useState } from 'react'
import Header from '../components/Header'
import './Home.css'
import dog6 from '../img/dog6.jpg'
import dog2 from '../img/dog2.jpg'
import dog3 from '../img/dog3.jpg'
import dog4 from '../img/dog4.jpg'
import dog1 from '../img/dog1.jpg'
import heart from '../img/heart-regular.svg'
import Button from '../components/Button'
import petCareImg from '../img/petCareIcon.png'

const Home = () => {
 const [dogs,setDog] = useState([
  {id :1, img :dog6, dogName:'Phyu Phyu Myint',dogSize:'Large',dogAge:'Baby'},
  {id :2, img :dog4, dogName:'Zolly',dogSize:'Medium',dogAge:'Young'},
  {id :3, img :dog3, dogName:'Rachel',dogSize:'Small',dogAge:'Adult'},
  {id :4, img :dog2, dogName:'Tayza',dogSize:'Large',dogAge:'Adult'}
 ])

 const api = () => {
    const url = 'http://10.10.4.66:8080/test'
 }

 

  return (
    <div className='container'>
        <Header/>
        <div className='main-bloc'>
          <div className='mainText'>Find Your New Pet</div>
        </div>
      
      {/* Newest the dog */}
      <div className="c-wrap-animal">
        <div className="c-bloc-txt">
            <h2>Newest Adoptable Pet</h2>
        </div>
      
      <div className='c-bloc-pet'>
        {dogs.map((item)=>( 
            <div className="c-card-pet">
              <div className="c-card__inner">
                  <div className="img-box">
                    <img src={item.img} alt="img"></img>
                    <img src={heart} alt="icon" className='favourite'/>
                  </div>
                  <div className="txt-name">
                    <h2>{item.dogName}</h2>
                    <div className='txt-box'>
                      <p>{item.dogSize}</p>
                      <p>{item.dogAge}</p>
                    </div>
                  </div>
              </div>
            </div>
        ))}
      </div>
      </div>

    {/* planning to adopte a pet */}
    <div className='c-wrap-planning'>
        <div className="c-bloc-txt">
            <h2>Planning to Adopte Pet?</h2>
        </div>
        
        <div className='c-bloc c-bloc--plan'>

          <div className='c-card-plan'>
            <div className='c-card__inner'>
              <div className='img-box-plan'>
                  <img src={petCareImg} alt="img" />
              </div>
              <div className='txt-box-plan'>
                  <h4>A Step-by-Step Guide of Adopting A Dog</h4>
                  Look into different breeds or species to find one that suits your lifestyle.
                   Consider factors like space, time commitment, activity level, 
                   and any allergies you or your family might have.
              </div>
              <Button/>
            </div>
          </div>

          <div className='c-card-plan'>
            <div className='c-card__inner'>
              <div className='img-box-plan'>
                 <img src={petCareImg} alt="img" />
              </div>
              <div className='txt-box-plan'>
                  <h4>A Step-by-Step Guide of Adopting A Dog</h4>
                  Look into different breeds or species to find one that suits your lifestyle.
                   Consider factors like space, time commitment, activity level, 
                   and any allergies you or your family might have.
              </div>
              <Button/>
            </div>
          </div>

          <div className='c-card-plan'>
            <div className='c-card__inner'>
              <div className='img-box-plan'>
                 <img src={petCareImg} alt="img" />
              </div>
              <div className='txt-box-plan'>
                  <h4>A Step-by-Step Guide of Adopting A Dog</h4>
                  <p>
                    Look into different breeds or species to find one that suits your lifestyle.
                    Consider factors like space, time commitment, activity level, 
                     and any allergies you or your family might have.
                  </p>
              </div>
              <Button/>
            </div>
          </div>

        </div>

    </div>
    
    {/* popular pet */}
    <div className='c-wrap-popular'>
        <div className='c-bloc-txt'>
          <h2>Popular Pet!</h2>
        </div>
        
        <div className='c-bloc c-bloc--popular'>
            <div className='c-card-popular'>
                <div className='popular-img'>
                    <img src={dog1} alt="img" />
                </div>
                <div className='popular-txt'>
                    <h4>Small Dog</h4>
                    <p>View Animals</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home