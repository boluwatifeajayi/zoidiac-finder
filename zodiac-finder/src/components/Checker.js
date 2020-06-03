import React, { Component } from 'react'
import zodiacApi from '../api/zodiacApi';

export class Checker extends Component {
    getZodiacs = () => {
        zodiacApi().then(zodiacname => {
            this.setState({
                zodiacs: zodiacname
            });
        });
    }
    noDisplay = () => {
        document.getElementById("homer").style.display = "block";
        document.getElementById("aries").style.display = "none";
        document.getElementById("aquarius").style.display = "none";
        document.getElementById("cancer").style.display = "none";
        document.getElementById("capricorn").style.display = "none";
        document.getElementById("gemini").style.display = "none";
        document.getElementById("leo").style.display = "none";
        document.getElementById("libra").style.display = "none";
        document.getElementById("pisces").style.display = "none";
        document.getElementById("sagittarius").style.display = "none";
        document.getElementById("scorpio").style.display = "none";
        document.getElementById("taurus").style.display = "none";
        document.getElementById("virgo").style.display = "none";
    }
    componentDidMount() {
        this.getZodiacs();
        this.noDisplay();
    }
    

    checkZodiac = () => {
        let check = document.getElementById("checker").value;


        if (check === "aries") {
            document.getElementById("aries").style.display = "block"; 
            document.getElementById("homer").style.display = "none";
            
            document.getElementById("aquarius").style.display = "none";
            document.getElementById("cancer").style.display = "none";
            document.getElementById("capricorn").style.display = "none";
            document.getElementById("gemini").style.display = "none";
            document.getElementById("leo").style.display = "none";
            document.getElementById("libra").style.display = "none";
            document.getElementById("pisces").style.display = "none";
            document.getElementById("sagittarius").style.display = "none";
            document.getElementById("scorpio").style.display = "none";
            document.getElementById("taurus").style.display = "none";
            document.getElementById("virgo").style.display = "none";
        }
        else if (check === "aquarius") {
            document.getElementById("aquarius").style.display = "block";
            document.getElementById("homer").style.display = "none";

            document.getElementById("aries").style.display = "none";
            document.getElementById("cancer").style.display = "none";
            document.getElementById("capricorn").style.display = "none";
            document.getElementById("gemini").style.display = "none";
            document.getElementById("leo").style.display = "none";
            document.getElementById("libra").style.display = "none";
            document.getElementById("pisces").style.display = "none";
            document.getElementById("sagittarius").style.display = "none";
            document.getElementById("scorpio").style.display = "none";
            document.getElementById("taurus").style.display = "none";
            document.getElementById("virgo").style.display = "none";
        }
        else if (check === "cancer") {
            document.getElementById("cancer").style.display = "block";
            document.getElementById("homer").style.display = "none";

            document.getElementById("aries").style.display = "none";
            document.getElementById("aquarius").style.display = "none";
            document.getElementById("capricorn").style.display = "none";
            document.getElementById("gemini").style.display = "none";
            document.getElementById("leo").style.display = "none";
            document.getElementById("libra").style.display = "none";
            document.getElementById("pisces").style.display = "none";
            document.getElementById("sagittarius").style.display = "none";
            document.getElementById("scorpio").style.display = "none";
            document.getElementById("taurus").style.display = "none";
            document.getElementById("virgo").style.display = "none";
        }
        else if (check === "capricorn") {
            document.getElementById("capricorn").style.display = "block";
            document.getElementById("homer").style.display = "none";

            document.getElementById("aries").style.display = "none";
            document.getElementById("aquarius").style.display = "none";
            document.getElementById("cancer").style.display = "none";
            document.getElementById("gemini").style.display = "none";
            document.getElementById("leo").style.display = "none";
            document.getElementById("libra").style.display = "none";
            document.getElementById("pisces").style.display = "none";
            document.getElementById("sagittarius").style.display = "none";
            document.getElementById("scorpio").style.display = "none";
            document.getElementById("taurus").style.display = "none";
            document.getElementById("virgo").style.display = "none";
        }
        else if (check === "gemini") {
            document.getElementById("gemini").style.display = "block";
            document.getElementById("homer").style.display = "none";

            document.getElementById("aries").style.display = "none";
            document.getElementById("aquarius").style.display = "none";
            document.getElementById("cancer").style.display = "none";
            document.getElementById("capricorn").style.display = "none";
            document.getElementById("leo").style.display = "none";
            document.getElementById("libra").style.display = "none";
            document.getElementById("pisces").style.display = "none";
            document.getElementById("sagittarius").style.display = "none";
            document.getElementById("scorpio").style.display = "none";
            document.getElementById("taurus").style.display = "none";
            document.getElementById("virgo").style.display = "none";
        }
        else if (check === "leo") {
            document.getElementById("leo").style.display = "block";
            document.getElementById("homer").style.display = "none";

            document.getElementById("aries").style.display = "none";
            document.getElementById("aquarius").style.display = "none";
            document.getElementById("cancer").style.display = "none";
            document.getElementById("capricorn").style.display = "none";
            document.getElementById("gemini").style.display = "none";
            document.getElementById("libra").style.display = "none";
            document.getElementById("pisces").style.display = "none";
            document.getElementById("sagittarius").style.display = "none";
            document.getElementById("scorpio").style.display = "none";
            document.getElementById("taurus").style.display = "none";
            document.getElementById("virgo").style.display = "none";
        }
        else if (check === "libra") {
            document.getElementById("libra").style.display = "block";
            document.getElementById("homer").style.display = "none";

            document.getElementById("aries").style.display = "none";
            document.getElementById("aquarius").style.display = "none";
            document.getElementById("cancer").style.display = "none";
            document.getElementById("capricorn").style.display = "none";
            document.getElementById("gemini").style.display = "none";
            document.getElementById("leo").style.display = "none";
            document.getElementById("pisces").style.display = "none";
            document.getElementById("sagittarius").style.display = "none";
            document.getElementById("scorpio").style.display = "none";
            document.getElementById("taurus").style.display = "none";
            document.getElementById("virgo").style.display = "none";
        }
        else if (check === "pisces") {
            document.getElementById("pisces").style.display = "block";
            document.getElementById("homer").style.display = "none";

            document.getElementById("aries").style.display = "none";
            document.getElementById("aquarius").style.display = "none";
            document.getElementById("cancer").style.display = "none";
            document.getElementById("capricorn").style.display = "none";
            document.getElementById("gemini").style.display = "none";
            document.getElementById("leo").style.display = "none";
            document.getElementById("libra").style.display = "none";
            document.getElementById("sagittarius").style.display = "none";
            document.getElementById("scorpio").style.display = "none";
            document.getElementById("taurus").style.display = "none";
            document.getElementById("virgo").style.display = "none";
        }
        else if (check === "sagittarius") {
               document.getElementById("sagittarius").style.display = "block";
               document.getElementById("homer").style.display = "none";

               document.getElementById("aries").style.display = "none";
               document.getElementById("aquarius").style.display = "none";
               document.getElementById("cancer").style.display = "none";
               document.getElementById("capricorn").style.display = "none";
               document.getElementById("gemini").style.display = "none";
               document.getElementById("leo").style.display = "none";
               document.getElementById("libra").style.display = "none";
               document.getElementById("pisces").style.display = "none";
               document.getElementById("scorpio").style.display = "none";
               document.getElementById("taurus").style.display = "none";
               document.getElementById("virgo").style.display = "none";
             } else if (check === "scorpio") {
               document.getElementById("scorpio").style.display = "block";
               document.getElementById("homer").style.display = "none";

               document.getElementById("aries").style.display = "none";
               document.getElementById("aquarius").style.display = "none";
               document.getElementById("cancer").style.display = "none";
               document.getElementById("capricorn").style.display = "none";
               document.getElementById("gemini").style.display = "none";
               document.getElementById("leo").style.display = "none";
               document.getElementById("libra").style.display = "none";
               document.getElementById("pisces").style.display = "none";
               document.getElementById("sagittarius").style.display = "none";
               document.getElementById("taurus").style.display = "none";
               document.getElementById("virgo").style.display = "none";
             } else if (check === "taurus") {
               document.getElementById("taurus").style.display = "block";
               document.getElementById("homer").style.display = "none";

               document.getElementById("aries").style.display = "none";
               document.getElementById("aquarius").style.display = "none";
               document.getElementById("cancer").style.display = "none";
               document.getElementById("capricorn").style.display = "none";
               document.getElementById("gemini").style.display = "none";
               document.getElementById("leo").style.display = "none";
               document.getElementById("libra").style.display = "none";
               document.getElementById("pisces").style.display = "none";
               document.getElementById("sagittarius").style.display = "none";
               document.getElementById("scorpio").style.display = "none";
               document.getElementById("virgo").style.display = "none";
             } else if (check === "virgo") {
               document.getElementById("virgo").style.display = "block";
               document.getElementById("homer").style.display = "none";

               document.getElementById("aries").style.display = "none";
               document.getElementById("aquarius").style.display = "none";
               document.getElementById("cancer").style.display = "none";
               document.getElementById("capricorn").style.display = "none";
               document.getElementById("gemini").style.display = "none";
               document.getElementById("leo").style.display = "none";
               document.getElementById("libra").style.display = "none";
               document.getElementById("pisces").style.display = "none";
               document.getElementById("sagittarius").style.display = "none";
               document.getElementById("scorpio").style.display = "none";
               document.getElementById("taurus").style.display = "none";
             } else {
               alert("You Have To Select A Date Range");
             }

    }
    render() {
        return (
            <div>
                <h3 className="heading">Select Your Birthdate Range.</h3>
                <div className="selecter">
                    <select name="city" id="checker">
                        <option style={grey}>Select A Date Range...</option>
                        <option value="aries">March 21 - April 19 (Aries)</option>
                        <option value="taurus">April 20 - May 20 (Taurus)</option>
                        <option value="gemini">May 21 - June 20 (Gemini)</option>
                        <option value="cancer">June 21 - July 22 (Cancer)</option>
                        <option value="leo">July 23 - August 22 (Leo)</option>
                        <option value="virgo">August 23 - September 22 (Virgo)</option>
                        <option value="libra">September 23 - October 22 (Libra)</option>
                        <option value="scorpio">October 23 - November 21 (Scorpio)</option>
                        <option value="sagittarius">November 22 - December 21 (Sagittarius)</option>
                        <option value="capricorn">December 22 - January 19 (Capricorn)</option>
                        <option value="aquarius">January 20 - February 18 (Aquarius)</option>
                        <option value="pisces">February 19 - March 20 (Pisces)</option>

                    </select>
                    <button onClick={this.checkZodiac} className="select-btn">Check</button>
                </div>
            </div>
        )
    }
}

const grey = {
    color : 'grey'
}

export default Checker
