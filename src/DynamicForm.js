import React, { Component } from 'react'
import './Form.css'

class DynamicForm extends Component {
  state = {
    result: ''
  }

  handleSubmit = async (event) => {
    // Prevent the default html submit behavior
    event.preventDefault()
    event.stopPropagation()

    // Get form values
    const sleepDuration = document.getElementById('sleepDurationDynamic').value
    const fallingAsleepTime = document.getElementById('fallingAsleepTimeDynamic').value
    const wakingUpTime = document.getElementById('wakingUpTimeDynamic').value

    // Fetch result from api
    const response = await fetch(`https://sleep-recommender.herokuapp.com/api/health/html?sleepDuration=${sleepDuration}&fallingAsleepTime=${fallingAsleepTime}&wakingUpTime=${wakingUpTime}`)
    const result = await response.text()

    this.setState({ result: result })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Box" >
          <div className="Question">
            I want to sleep for (hours)
          </div>
          <input
            name="sleepDuration"
            id="sleepDurationDynamic"
            placeholder="hours"
            className="Input"
          />
          <div className="Question">
            Time it takes me to become sleepy sleepy (minutes)
          </div>
          <input
            name="fallingAsleepTime"
            id="fallingAsleepTimeDynamic"
            placeholder="MINUTES!"
            className="Input"
          />
          <div className="Question">
            I want to wake up at
          </div>
          <select name="wakingUpTime" id="wakingUpTimeDynamic" className="Submit" >
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
            <option value="12:00 PM">12:00 PM</option>
          </select>
          <br />
          <input type="submit" id="submit" className="Submit" />
        </div>
        <div className="Box">
          <div dangerouslySetInnerHTML={{ __html: this.state.result }}/>
        </div>
      </form>
    )
  }
}

export default DynamicForm
