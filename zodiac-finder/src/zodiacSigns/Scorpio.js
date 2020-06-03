import React, { Component } from 'react'


export class Scorpio extends Component {


    render() {
        const symbol = "The Scorpion";
        const element = "Water";
        const color = "Scarlet, Red, Rust ";
        const Day = "Tuesday";
        const Ruler = "Pluto, Mars";
        const compatibility = "Taurus, Cancer";
        const luckyNumbers = " 8, 11, 18, 22";
        const dateRange = "October 23 - November 21";
        const strengths = "Resourceful, brave, passionate, stubborn, a true friend";
        const weaknesses = "Distrusting, jealous, secretive, violent";
        const likes = "Truth, facts, being right, longtime friends, teasing, a grand passion";
        const dislikes = "Dishonesty, revealing secrets, passive people";
        const picture = "https://www.astrology-zodiac-signs.com/images/scorpio.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/scorpio/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/scorpio/";
        const sumary = "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.";
        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="scorpio" width="120px" height="120px" />
                            <h1>Scorpio Zodiac Sign</h1>
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

export default Scorpio
