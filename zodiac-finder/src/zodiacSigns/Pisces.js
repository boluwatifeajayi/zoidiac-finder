import React, { Component } from 'react'


export class Pisces extends Component {


    render() {
        const symbol = "The Two Fishes Swimming in Opposite Directions";
        const element = "Water";
        const color = "Mauve, Lilac, Purple, Violet, Sea green";
        const Day = "Thursday";
        const Ruler = "Neptune, Jupiter";
        const compatibility = "Virgo, Taurus";
        const luckyNumbers = "3, 9, 12, 15, 18, 24";
        const dateRange = "February 19 - March 20";
        const strengths = "Compassionate, artistic, intuitive, gentle, wise, musical";
        const weaknesses = "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr";
        const likes = "Being alone, sleeping, music, romance, visual media, swimming, spiritual themes";
        const dislikes = "Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind";
        const picture = "https://www.astrology-zodiac-signs.com/images/pisces.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/pisces/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/pisces/";
        const sumary = "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity.";

        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="pisces" width="120px" height="120px" />
                            <h1>Pisces Zodiac Sign</h1>
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

export default Pisces
