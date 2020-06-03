import React, { Component } from 'react'


export class Taurus extends Component {


    render() {
        const symbol = "The Bull";
        const element = "Earth";
        const color = "Green, Pink";
        const Day = "Friday";
        const Ruler = "Venus";
        const compatibility = "Scorpio, Cancer";
        const luckyNumbers = "2, 6, 9, 12, 24";
        const dateRange = "April 20 - May 20";
        const strengths = "Reliable, patient, practical, devoted, responsible, stable";
        const weaknesses = "Stubborn, possessive, uncompromising";
        const likes = "Gardening, cooking, music, romance, high quality clothes, working with hands";
        const dislikes = "Sudden changes, complications, insecurity of any kind, synthetic fabrics";
        const picture = "https://www.astrology-zodiac-signs.com/images/taurus.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodia-signs/taurus.jpg";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/taurus/";
        const sumary = "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.";

        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="taurus" width="120px" height="120px" />
                            <h1>Taurus Zodiac Sign</h1>
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
                    <p><b>Like: </b>{likes}</p>
                    <p><b>Dislikes: </b>{dislikes}</p>
                    <p><b>Sumary: </b>{sumary}</p>
                    <a href={readmore} type="button" className="btn btn-danger btn-md">Read More</a>
                    <a href={daily} type="button" className="btn btn-dark btn-md">Daily Horoscope</a>
                </div>
            </div>

        )
    }
}

export default Taurus
