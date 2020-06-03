import React, { Component } from 'react'


export class Cancer extends Component {


    render() {
        
        const symbol = "Crab";
        const element = "Water";
        const color = "White";
        const Day = "Monday, Thursday";
        const Ruler = "Moon";
        const compatibility = "Capricorn, Tarus";
        const luckyNumbers = "2, 3, 15, 20";
        const dateRange = "June 21 - June 22";
        const strengths = "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive";
        const weaknesses = "Moody, pessimistic, suspicious, manipulative, insecure";
        const likes = "Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends";
        const dislikes = "Strangers, any criticism of Mom, revealing of personal life";
        const picture = "https://www.astrology-zodiac-signs.com/images/cancer.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/cancer/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/cancer/";
        const sumary = "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering.";
        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="cancer" width="120px" height="120px" />
                            <h1>Cancer Zodiac Sign</h1>
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

export default Cancer
