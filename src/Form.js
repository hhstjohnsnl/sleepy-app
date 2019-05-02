import React, { Component } from 'react'
import './Form.css'
import { apiEndpoint } from './config'

// const apiEndpoint = 'https://sleep-recommender.herokuapp.com/api/health/html?wakingUpTime=07:00%20AM&sleepDuration=7&fallingAsleepTime=15'

class Form extends Component {
  render() {
    return (
      <form action={apiEndpoint} method="GET">
        <div className="Box" >
          <div className="Question">
            I want to sleep for (hours)
          </div>
          <input
            name="sleepDuration"
            id="sleepDuration"
            placeholder="hours"
            className="Input"
          />
          <div className="Question">
            Time it takes me to fall asleep (minutes)
          </div>
          <input
            name="fallingAsleepTime"
            id="fallingAsleepTime"
            placeholder="minutes"
            className="Input"
          />
          <div className="Question">
            I want to wake up at 
          </div>
          <select name="wakingUpTime" id="wakingUpTime" className="Submit" >
            <option value="05:00 AM">05:00 AM</option>
            <option value="05:30 AM">05:30 AM</option>
            <option value="06:00 AM">06:00 AM</option>
            <option value="06:30 AM">06:30 AM</option>
            <option value="07:00 AM">07:00 AM</option>
            <option value="07:30 AM">07:30 AM</option>
            <option value="08:00 AM">08:00 AM</option>
            <option value="08:30 AM">08:30 AM</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="09:30 AM">09:30 AM</option>
          </select>
          <br />
          <input type="submit" id="submit" className="Submit" />
        </div>
      </form>
    )
  }
}

export default Form
