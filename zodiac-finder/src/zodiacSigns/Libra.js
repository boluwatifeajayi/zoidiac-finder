import React, { Component } from 'react'


export class Libra extends Component {


    render() {
        const symbol = "The Scales";
        const element = "Air";
        const color = "Pink, Green";
        const Day = "Friday";
        const Ruler = "Venus";
        const compatibility = "Aries, Sagittarius";
        const luckyNumbers = "4, 6, 13, 15, 24";
        const dateRange = "September 23 - October 22";
        const strengths = "Cooperative,diplomatic, gracious, fair-minded, social";
        const weaknesses = "Indecisive, avoids confrontations, will carry a grudge, self-pity";
        const likes = "Harmony, gentleness, sharing with others, the outdoors";
        const dislikes = "Violence, injustice, loudmouths, conformity";
        const picture = "https://www.astrology-zodiac-signs.com/images/libra.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/libra/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/libra/";
        const sumary = "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible";

        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="libra" width="120px" height="120px" />
                            <h1>Libra Zodiac Sign</h1>
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

export default Libra;
