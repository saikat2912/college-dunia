import React from "react";

const Ranking = ({ data }) => {
    return (
        <>

            {console.log("Data is ",data)}
            <div className="ranking-badge">
                <div className="ranking">
                    <span className="rank">#{data.ranking_details.india_today_rank}<sup>rd</sup></span>
                    <span className="details">/{data.ranking_details.india_today_total} in India</span>
                </div>
                <div className="publication">
                    <span className="publication-name"><img src={"/images/theweek.png"} alt="theweek" className="logo" /></span>
                    <span className="year">2023</span>
                </div>
                <div className="logos">
                    <img src={"images/indiatoday.png"} alt="timesofindia" className="logo" />
                    <img src={"images/toi.png"} alt="toi" className="logo" />
                    <span className="more">+ 9 More</span>
                </div>
            </div>
        </>
    )
}

export default Ranking;