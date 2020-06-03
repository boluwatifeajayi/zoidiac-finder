import React, { Component } from 'react'


export class Virgo extends Component {


    render() {
        const symbol = "The Goddess of Wheat and Agriculture";
        const element = "Earth";
        const color = "Grey, Beige, Pale-Yellow";
        const Day = "Wednesday";
        const Ruler = "Mercury";
        const compatibility = "Pisces, Cancer";
        const luckyNumbers = "5, 14, 15, 23, 32";
        const dateRange = "August 23 - September 22";
        const strengths = "Loyal, analytical, kind, hardworking, practical";
        const weaknesses = "Shyness, worry, overly critical of self and others, all work and no play";
        const likes = "Animals, healthy food, books, nature, cleanliness";
        const dislikes = "Rudeness, asking for help, taking center stage";
        const picture = "https://www.astrology-zodiac-signs.com/images/virgo.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/virgo/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/virgo/";
        const sumary = "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.";

        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="virgo" width="120px" height="120px" />
                            <h1>Virgo Zodiac Sign</h1>
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

export default Virgo
