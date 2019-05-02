import React, { Component } from 'react'
import './Form.css'

class StatefulForm extends Component {
  state = {
    sleepDuration: null,
    fallingAsleepTime: null,
    wakingUpTime: null,
    result: null
  }

  handleSubmit = async (event) => {
    // Prevent the default html submit behavior
    event.preventDefault()
    event.stopPropagation()

    // Get form values
    const { sleepDuration, fallingAsleepTime, wakingUpTime } = this.state;

    // Fetch result from api
    const response = await fetch(`https://sleep-recommender.herokuapp.com/api/health/html?sleepDuration=${sleepDuration}&fallingAsleepTime=${fallingAsleepTime}&wakingUpTime=${wakingUpTime}`)
    const result = await response.text()

    this.setState({ result: result })
  }

  handleChange = (event) => {
    // Avoid error if event or event.target don't exist for some reason
    if (!event || !event.target) {
      return
    }

    // Get tha name and value of the form element
    const { name, value } = event.target

    // Update component's state with new form element value
    this.setState({ [name]: value })
  }

  render() {
    const { sleepDuration, fallingAsleepTime, wakingUpTime, result } = this.state;
    console.log(result)

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Box" >
          <div className="Question">
            I want to sleep for (hours)
          </div>
          <input
            name="sleepDuration"
            id="sleepDuration"
            placeholder="hours"
            className="Input"
            onChange={this.handleChange}
          />
          <div className="Question">
            Time it takes me to fall asleep (minutes)
          </div>
          <input
            name="fallingAsleepTime"
            id="fallingAsleepTime"
            placeholder="minutes"
            className="Input"
            onChange={this.handleChange}
          />
          <div className="Question">
            I want to wake up at
          </div>
          <select
            name="wakingUpTime"
            id="wakingUpTime"
            className="Submit"
            onChange={this.handleChange}
          >
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
        <div className="Box">
          <h2>Current form values</h2>
          <div>sleepDuration</div><div>{sleepDuration}</div>
          <div>fallingAsleepTime</div><div>{fallingAsleepTime}</div>
          <div>wakingUpTime</div><div>{wakingUpTime}</div>
        </div>
        <div className="Box">
          <h2>Result from API</h2>
          <div dangerouslySetInnerHTML={{ __html: result }}/>
        </div>
      </form>
    )
  }
}

export default StatefulForm
