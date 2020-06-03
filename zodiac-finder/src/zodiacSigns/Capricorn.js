import React, { Component } from 'react'


export class Capricorn extends Component {


    render() {
        const symbol = "The Sea Goat";
        const element = "Earth";
        const color = "Brown, Black";
        const Day = "Saturday";
        const Ruler = "Sarturn";
        const compatibility = "Taurus, Cancer";
        const luckyNumbers = "4, 8, 13, 22";
        const dateRange = "December 22 - January 19";
        const strengths = " Responsible, disciplined, self-control, good managers";
        const weaknesses = "Know-it-all, unforgiving, condescending, expecting the worst";
        const likes = "Family, tradition, music, understated status, quality craftsmanship";
        const dislikes = "Almost everything at some point";
        const picture = "https://www.astrology-zodiac-signs.com/images/capricorn.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/capricorn/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/capricorn/";
        const sumary = "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise.";
        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="capricorn" width="120px" height="120px" />
                            <h1>Capricorn Zodiac Sign</h1>
                        </div>
                        <div className="col-lg-6">
                            <p><b>Symbol: </b>{symbol}</p>
                            <p><b>Element: </b>{element}</p>
                            <p><b>Color: </b>{color}</p>
                            <p><b>Day: </b>{Day}</p>
                            <p><b>Ruler: </b>{Ruler}</p>
                            <p><b>Compatibility: </b>{compatibility}</p>
                            <p><b>Lucky Numbers: </b>{luckyNumbers}</p>
                            <p><b>Date Range: </b>{dateRange}</p>

                        </div>
                    </div>
                </div>
                <div className="section sect-2">
                    <p><b>Strengths: </b>{strengths}</p>
                    <p><b>Weaknesses: </b>{weaknesses}</p>
                    <p><b>Likes: </b>{likes}</p>
                    <p><b>Dislikes: </b>{dislikes}</p>
                    <p><b>Sumary: </b>{sumary}</p>
                    <a href={readmore} type="button" className="btn btn-danger btn-md">Read More</a>
                    <a href={daily} type="button" className="btn btn-dark btn-md">Daily Horoscope</a>
                </div>
            </div>

        )
    }
}

export default Capricorn
