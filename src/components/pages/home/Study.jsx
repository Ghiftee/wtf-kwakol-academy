import './Home.css';
import Cap from '../../../images/graduation-cap.png';
import FirstCircle from '../../../images/outer-layer.png';
import SecondCircle from '../../../images/inner-layer.png';
// import Book from '../../../images/book.png';
// import Teacher from '../../../images/teach.png';
// import World from '../../../images/tabler_world.png';
// import Mind from '../../../images/mind.png';
// import Certified from '../../../images/badge1.png';


function Study() {
  return (
    <div className='study-section'>
        <p className='study-section-title'>Why study with us today</p>
            {/*Would be refactored*/}
            <section className='study-section-group'>
                <section className='study-section-group-parts'>
                    <div>
                        <img src={FirstCircle} alt='icon-bg-1' className='icon-bg-1'/>
                        <img src={SecondCircle} alt='icon-bg-2' className='icon-bg-2'/>
                        <img src={Cap} alt='graduation cap' className='cap-img'/>
                    </div>
                    <p className='study-section-group-parts-title'>Comprehensive content</p>
                    <p className='study-section-group-parts-info'>
                        Our courses cover all key topics you <br/>
                        need to learn to trade effectively.
                    </p>
                </section>
                <section className='study-section-group-parts'>
                    
                    <p className='study-section-group-parts-title'>Easy to learn</p>
                    <p className='study-section-group-parts-info'>
                        We've condensed content into bite- <br/>
                        sized courses for your convenience.
                    </p>
                </section>
                <section className='study-section-group-parts'>
                    
                    <p className='study-section-group-parts-title'>Live Classes</p>
                    <p className='study-section-group-parts-info'>
                        We offer regular live classes to keep <br/>
                        you updated on the latest trades.
                    </p>
                </section>
            </section>
            <section className='study-section-group'>
                <section className='study-section-group-parts'>
                    
                    <p className='study-section-group-parts-title'>Active community</p>
                    <p className='study-section-group-parts-info'>
                        Benefit from your peers as well as <br/>
                        your tutors in our community.
                    </p>
                </section>
                <section className='study-section-group-parts'>
                    
                    <p className='study-section-group-parts-title'>Learn from experts</p>
                    <p className='study-section-group-parts-info'>
                        Benefit from your peers as well as <br/>
                        your tutors in our community.
                    </p>
                </section>
                <section className='study-section-group-parts'>
                    
                    <p className='study-section-group-parts-title'>Get certified</p>
                    <p className='study-section-group-parts-info'>
                        Receive official certification from us <br/>
                        and share on LinkedIn.
                    </p>
                </section>
            </section>
    </div>
  )
}

export default Study;