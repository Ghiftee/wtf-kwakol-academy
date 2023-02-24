import './Home.css';
import Star from '../../images/star.png';
import Chart from '../../images/chart.png';
import Folder from '../../images/files.png';
import Chat from '../../images/chat.png';
import Arrow from '../../images/bullseye.png';
import Badge from '../../images/badge.png';

function Study() {
  return (
    <div className='study-section'>
        <p className='study-section-title'>Why study with us today</p>
            {/*Would be refactored*/}
            <section className='study-section-group'>
                <section className='study-section-group-parts'>
                    <img src={Star} alt='star'/>
                    <p className='study-section-group-parts-title'>Comprehensive content</p>
                    <p className='study-section-group-parts-info'>
                        Our courses cover all key topics you <br/>
                        need to learn to trade effectively.
                    </p>
                </section>
                <section className='study-section-group-parts'>
                    <img src={Chart} alt='chart'/>
                    <p className='study-section-group-parts-title'>Easy to learn</p>
                    <p className='study-section-group-parts-info'>
                        We've condensed content into bite- <br/>
                        sized courses for your convenience.
                    </p>
                </section>
                <section className='study-section-group-parts'>
                    <img src={Folder} alt='folder'/>
                    <p className='study-section-group-parts-title'>Live Classes</p>
                    <p className='study-section-group-parts-info'>
                        We offer regular live classes to keep <br/>
                        you updated on the latest trades.
                    </p>
                </section>
            </section>
            <section className='study-section-group'>
                <section className='study-section-group-parts'>
                    <img src={Chat} alt='chat'/>
                    <p className='study-section-group-parts-title'>Active community</p>
                    <p className='study-section-group-parts-info'>
                        Benefit from your peers as well as <br/>
                        your tutors in our community.
                    </p>
                </section>
                <section className='study-section-group-parts'>
                    <img src={Arrow} alt='bullseye'/>
                    <p className='study-section-group-parts-title'>Learn from experts</p>
                    <p className='study-section-group-parts-info'>
                        Benefit from your peers as well as <br/>
                        your tutors in our community.
                    </p>
                </section>
                <section className='study-section-group-parts'>
                    <img src={Badge} alt='award'/>
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