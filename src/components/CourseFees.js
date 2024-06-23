import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosSwap } from "react-icons/io";

const CourseFees = ({ data }) => {
    return (
        <>


            <div className="fee-card">
                <div className="fee-amount">₹ {data.course_fee_details.college_fees}</div>
                <div className="course-details">
                    <div>BE/B.Tech</div>
                    <div>- 1st Year Fees</div>
                </div>
                <div className="compare-fees">
                    <a href="/compare-fees"><IoIosSwap />Compare Fees</a>
                </div>
            </div>
        </>
    )
}

export default CourseFees;