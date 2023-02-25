import React from 'react';
import './Home.css';
import firstPerson from '../../../images/review-girl.png';
import secondPerson from '../../../images/review-man.png';
import thirdPerson from '../../../images/review-girl-2.png';

function Reviews() {
  return (
    <div className='reviews'>
        <h2 className='reviews-h2'>What our students say about us</h2>
        {/*Would be refactored*/}
        <div className='reviews-section'>
            <section className='reviews-box'>
                <section className='reviews-heading'>
                    <p className='reviews-heading-p-1'>Jenny Wilson</p>
                    <img src={firstPerson} alt='lady-1' className='reviews-img'/>
                </section>
                <p className='reviews-heading-p-2'>
                    "The academy's courses and <br/> 
                    instructors gave me the <br/>
                    confidence to start trading and <br/>
                    make informed decisions. I'm <br/>
                    now a more knowledgeable <br/>
                    and confident trader, and <br/>
                    highly recommend the <br/>academy."
                </p>
            </section>
            <section className='reviews-box'>
                <section className='reviews-heading'>
                    <p className='reviews-heading-p-1'>Ariene McCoy</p>
                    <img src={secondPerson} alt='man' className='reviews-img'/>
                </section>
                <p className='reviews-heading-p-2'>
                    "The academy's advanced <br/> 
                    courses and coaching helped <br/> 
                    me correct my mistakes and <br/>
                    trade more confidently, leading <br/>
                    to consistent profits. Thank you, <br/>forex academy!"
                </p>
            </section>
            <section className='reviews-box'>
                <section className='reviews-heading'>
                    <p className='reviews-heading-p-1'>Jenny Wilson</p>
                    <img src={thirdPerson} alt='lady-2' className='reviews-img'/>
                </section>
                <p className='reviews-heading-p-2'>
                "The academy's courses and <br/>
                instructors gave me the <br/>
                confidence to trade on my own <br/>
                and make informed decisions. <br/>
                Highly recommend for <br/>
                beginner traders looking to <br/>grow their portfolio."
                </p>
            </section>
        </div>

    </div>
  )
}

export default Reviews;