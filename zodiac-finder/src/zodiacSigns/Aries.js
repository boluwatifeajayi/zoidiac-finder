import React, { Component } from 'react'


export class Areis extends Component {
    
    
    render() {
        const symbol = "The Ram";
        const element = "fire";
        const color =  "Red";
        const Day = "Tuesday";
        const Ruler = "Mars";
        const compatibility = "Libra, Leo";
        const luckyNumbers = "1,8, 17";
        const dateRange = "March 21 - April 19";
        const strengths = "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate";
        const weaknesses = "Impatient, moody, short-tempered, impulsive, aggressive";
        const likes = "Comfortable clothes, taking on leadership roles, physical challenges, individual sports";
        const dislikes = "Inactivity, delays, work that does not use one's talents";
        const picture = "https://www.astrology-zodiac-signs.com/images/aries.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/aries/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/aries/";
        const sumary ="As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings. Thanks to its ruling planet Mars and the fact it belongs to the element of Fire (just like Leo and Sagittarius), Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before they think about it well.";
        
        return (
            <div>
                <div className="section sect-1">
                    <div className="row">
                        
                        <div className="col-lg-6">
                            <img src={picture} alt="aries" width="120px" height="120px"/>
                            <h1>Areis Zodiac Sign</h1>
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

export default Areis
