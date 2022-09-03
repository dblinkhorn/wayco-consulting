import React from "react";
import "../styles/BioSplash.scss";
import TomWay from "../static/images/tom-way.jpg";
import MichaelMessina from "../static/images/michael-messina.jpg";

const BioSplash = () => {
    return (
        <div className='bio-splash_outer-container'>
            <div className='bio-splash_inner-container'>
                <div className='bio-splash_text-container'>
                    <div className='bio-splash_left-text'>
                        We are WAYCO Disaster
                        <br /> Consulting & Training
                    </div>
                    <div className='bio-splash_right-text'>
                        WAYCO Disaster Consulting & Training excels at providing
                        excellent customer service to schools, places of
                        worship, and businesses. We provide multi-dimensional
                        solutions and training to increase preparedness,
                        effective response, and to reduce the impact and
                        vulnerability to hazards, diminish the impact of both
                        common and large scale natural or man-made emergencies.
                        Tom Way and Michael Messina possess over 80 years of
                        combined public and private sector experience in the
                        Fire and Emergency Medical Services as well as in
                        Training and Education.
                    </div>
                </div>
                <div className='bio-splash_image-container'>
                    <div className='bio-splash_tom-way'>
                        <img src={TomWay} alt='Tom Way' />
                        <div className='bio-splash_tom-text'>
                            <h1 className='bio-splash_img-name'>Tom Way</h1>
                            <span className='bio-splash_bio-text'>
                                FEMA Master Exercise Practitioner. Retired Fire
                                Captain. 34 years experience Fire & EMS as well
                                as Emergency Preparedness Training.
                            </span>
                        </div>
                    </div>
                    <div className='bio_splash_michael-messina'>
                        <img src={MichaelMessina} alt='Michael Messina' />
                        <div className='bio-splash_michael-text'>
                            <h1 className='bio-splash_img-name'>
                                Michael Messina
                            </h1>
                            <span className='bio-splash_bio-text'>
                                HAZMAT Specialist & Life Safety Instructor and
                                Coordinator. 38 years combined experience in
                                Fire & EMS and Public Safety Education.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BioSplash;
