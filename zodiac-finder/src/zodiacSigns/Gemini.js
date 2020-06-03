import React, { Component } from 'react'


export class Gemini extends Component {


    render() {
        const symbol = "The Celestial Twins";
        const element = "Air";
        const color = "Light-Green, Yellow";
        const Day = "Wednesday";
        const Ruler = "Mecury";
        const compatibility = "Sagittarius, Aquarius";
        const luckyNumbers = "  25, 7, 14, 23";
        const dateRange = "May 21 -  June 20";
        const strengths = " Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas";
        const weaknesses = " Nervous, inconsistent, indecisive";
        const likes = "  Music, books, magazines, chats with nearly anyone, short trips around the town";
        const dislikes = "Being alone, being confined, repetition and routine";
        const picture = "https://www.astrology-zodiac-signs.com/images/gemini.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/gemini/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/gemini/";
        const sumary = "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.";

        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="gemini" width="120px" height="120px" />
                            <h1>Gemini Zodiac Sign</h1>
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

export default Gemini
