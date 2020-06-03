import React, { Component } from 'react'


export class Aquarius extends Component {


    render() {
        const symbol = "The Water Bearer";
        const element = "Air";
        const color = "Light-blue, Silver";
        const Day   =  "Saturday";
        const Ruler= "Uranus, Saturn";
        const compatibility = "Leo, Sagittarius";
        const luckyNumbers = "  4, 7, 11, 22, 29";
        const dateRange = "January 20 - February 18";
        const strengths =  " Progressive, original, independent, humanitarian";
        const weaknesses = " Runs from emotional expression, temperamental, uncompromising, aloof";
        const likes = "  Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener";
        const dislikes = "Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them";
        const picture = "https://www.astrology-zodiac-signs.com/images/aquarius.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/aquarius/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/aquarius/";
        const sumary = "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems. Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.";

        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="aquarius" width="120px" height="120px" />
                            <h1>Aquarius Zodiac Sign</h1>
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

export default Aquarius
