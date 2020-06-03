import React, { Component } from 'react'

export class HomePage extends Component {
    
    render() {
        return (
          <div style={{marginTop: '30px'}}>
            <h2>Astrology Zodiac Signs</h2>
            <img
              src="https://images.unsplash.com/photo-1515942661900-94b3d1972591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Astrology"
              className="astroimg"
            />
            <p>
              Your Zodiac sign, or star sign, reflects the position of the sun
              when you were born. With its strong influence on your personality,
              character, and emotions, your sign is a powerful tool for
              understanding yourself and your relationships. And of course, your
              sign can show you the way to an incredible life. Select your birth range above to discover to discover their powerful traits and secrets.
            </p>
          </div>
        );
    }
}
const img =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthespinoff.co.nz%2Fsociety%2F06-02-2020%2Fis-astrology-cool-now-why-young-people-are-listening-to-the-stars%2F&psig=AOvVaw3p8e7g5UwTHKJz-bJyJSDf&ust=1591243574915000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCt9LLi5OkCFQAAAAAdAAAAABAW";


export default HomePage
