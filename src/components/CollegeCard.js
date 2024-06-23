import React from "react";

import { FaDownload } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const CollegeCard = ({ data }) => {
    return (

        <div className="college-card">
            <div className="college-informations">
                <div className="college-logo">
                    <img src={data.logo} alt="IIT Madras Logo" />
                </div>
                <div className="college-info">
                    <h2>{data.college_name}</h2>
                    <p>{`${data.college_details.city}, ${data.college_details.state}`} | {data.college_details.accreditions.map((ele) => {
                        return (`${ele} ,`)
                    })}</p>
                    <div className="course-details">
                        <span className="course-name">
                            <span className="name">{data.college_details.course_details.course_name}</span>
                            <span className="jeerank">{`${data.college_details.course_details.jee_exam_name} Cutoff : ${data.college_details.course_details.jee_cutoff}`}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="actions">
                <a href="/apply" className="apply-now"><FaArrowRight />Apply Now</a>
                <a href="/download-brochure" className="download-brochure"><FaDownload />Download Brochure</a>
                <label className="compare-checkbox">
                    <input type="checkbox" />
                    Add To Compare
                </label>
            </div>

        </div>




    )
}

export default CollegeCard;