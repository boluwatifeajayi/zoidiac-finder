import React, { Component } from 'react'


export class Sagittarius extends Component {


    render() {
        const symbol = "The Archer";
        const element = "Fire";
        const color = "Blue";
        const Day = "Thursday";
        const Ruler = "Jupiter";
        const compatibility = "Gemini, Aries";
        const luckyNumbers = "3, 7, 9, 12, 21";
        const dateRange = "November 22 - December 21";
        const strengths = "Generous, idealistic, great sense of humor";
        const weaknesses = "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic";
        const likes = "Freedom, travel, philosophy, being outdoors";
        const dislikes = "Clingy people, being constrained, off-the-wall theories, details";
        const picture = "https://www.astrology-zodiac-signs.com/images/sagittarius.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/sagittarius/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/sagittarius/";
        const sumary = "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.";
        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="sagittarius" width="120px" height="120px" />
                            <h1>Sagittarius Zodiac Sign</h1>
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

export default Sagittarius
