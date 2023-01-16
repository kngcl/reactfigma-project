import React from 'react'
import Saf1 from '../../Images/saf1.png';
import Saf2 from '../../Images/saf2.png';
import Saf3 from '../../Images/saf3.png';
import AboutStyles from './AboutContent.module.css';

export default function AboutContent() {
  return (
    <div>
      <div className={AboutStyles.safarri}>
      <h1 className={AboutStyles.xaf}>Welcome to Africa Wizzy Safari</h1>
      <hr />
      <div className={AboutStyles.safarri__holder}>
        <div className={AboutStyles.safarri__cards}>
          <img src={Saf1} alt="no" className={AboutStyles.safarri__pic} />
          <p>
            Welcome to Africa Wizzy Safari, a leading tourism company based in
            Rwanda. We have been in business for over 5 years and are committed
            to providing top-quality tours and services to our clients. Our
            mission is to showcase the beauty and culture of Rwanda to visitors
            from around the world, and to contribute to the sustainable
            development of the country through responsible tourism practices.
          </p>
        </div>
        <div className={AboutStyles.safarri__cards}>
          <p>
            At Africa Wizzy safari, we offer a wide range of tours and
            activities, including cultural and historical tours, wildlife
            safaris, mountain gorilla trekking, and more. Our experienced and
            knowledgeable guides will ensure that you have a safe and enjoyable
            experience while exploring the stunning landscapes and rich culture
            of Rwanda.
          </p>
          <img src={Saf2} alt="no" className={AboutStyles.safarri__pic} />
        </div>

        <div className={AboutStyles.safarri__cards}>
          <img src={Saf3} alt="no" className={AboutStyles.safarri__pic} />
          <div className={AboutStyles.safarri__end}>
            <p>
              We are proud to have received numerous awards and accolades for
              our commitment to excellence, including the RDD award and the
              Excellence award.
            </p>

            <p>
              Thank you for choosing Africa Wizzy Safari for your travel needs
              in Rwanda. We look forward to welcoming you on one of our tours
              soon!
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
