import React, { Component } from 'react'


export class Leo extends Component {


    render() {
        const symbol = "The Lion";
        const element = "Fire";
        const color = "Gold, Yellow, Orange";
        const Day = "Sunday";
        const Ruler = "Sun";
        const compatibility = "Aquarius, Gemini";
        const luckyNumbers = "1, 3, 10, 19";
        const dateRange = "July 23 - August 22";
        const strengths = "Creative, passionate, generous, warm-hearted, cheerful, humorous";
        const weaknesses = "Arrogant, stubborn, self-centered, lazy, inflexible";
        const likes = "Theater, taking holidays, being admired, expensive things, bright colors, fun with friends";
        const dislikes = "Being ignored, facing difficult reality, not being treated like a king or queen";
        const picture = "https://www.astrology-zodiac-signs.com/images/leo.jpg";
        const readmore = "https://www.astrology-zodiac-signs.com/zodiac-signs/leo/";
        const daily = "https://www.astrology-zodiac-signs.com/horoscope/leo/";
        const sumary = "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their king of the jungle status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.";

        return (
            <div>
                <div className="section sect-1">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={picture} alt="leo" width="120px" height="120px" />
                            <h1>Leo Zodiac Sign</h1>
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

export default Leo
