import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosSwap } from "react-icons/io";

const Placement = ({ data }) => {
    return (
        <>
            <div className="placement-info">
                <p className="average-package">₹ {data.placement_details.average_package}</p>
                <p className="label">Average Package</p>
                <p className="highest-package">{data.placement_details.highest_package}</p>
                <p className="label">Highest Package</p>
                <a href="#compare-placement" className="compare-link"><IoIosSwap />Compare Placement</a>
            </div>
        </>
    )
}

export default Placement;