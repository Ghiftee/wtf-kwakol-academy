import './Home.css';
import Cap from '../../../images/graduation-cap.png';
import FirstCircle from '../../../images/outer-layer.png';
import SecondCircle from '../../../images/inner-layer.png';
import Book from '../../../images/book.png';
import Teacher from '../../../images/teach.png';
import World from '../../../images/tabler_world.png';
import Mind from '../../../images/mind.png';
import Certified from '../../../images/badge1.png';

function StudySectionGroupPart({ img, alt, header, body }) {
    return (
        <section className='study-section-group-parts'>
            <div className='study-section-group-image'>
                <img src={FirstCircle} alt='icon-bg-1' className='icon-bg-1'/>
                <img src={SecondCircle} alt='icon-bg-2' className='icon-bg-2'/>
                <img src={img} alt={alt} className='cap-img'/>
            </div>
            <p className='study-section-group-parts-title'>{header}</p>
            <p className='study-section-group-parts-info'>
                {body}
            </p>
        </section>
    );
}

function Study() {
  return (
    <div className='study-section'>
        <h3 className='study-section-title'>Why study with us today</h3>
        <section className='study-section-group'>
            <StudySectionGroupPart
                img={Cap}
                alt="Cap image"
                header="Comprehensive content"
                body="Our courses cover all key topics you need to learn to trade effectively."
            />
            <StudySectionGroupPart
                img={Book}
                alt="Book image"
                header="Easy to learn"
                body="We've condensed content into bite-sized courses for your convenience."
            />
            <StudySectionGroupPart
                img={Teacher}
                alt="Teacher image"
                header="Live Classes"
                body="We offer regular live classes to keep you updated on the latest trades."
            />
        </section>
        <section className='study-section-group'>
            <StudySectionGroupPart
                img={World}
                alt="World image"
                header="Active community"
                body="Benefit from your peers as well as your tutors in our community."
            />
            <StudySectionGroupPart
                img={Mind}
                alt="Mind image"
                header="Learn from experts"
                body="Benefit from your peers as well as your tutors in our community."
            />
            <StudySectionGroupPart
                img={Certified}
                alt="Certified image"
                header="Get certified"
                body="Receive official certification from us and share on LinkedIn"
            />
        </section>
    </div>
  );
}

export default Study;
