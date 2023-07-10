import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {inputVal: ''}

  onInputChange = e => {
    this.setState({inputVal: e.target.value})
  }

  render() {
    const {initialHistoryList, onDelete} = this.props
    const {inputVal} = this.state

    let finalHistoryList

    switch (inputVal) {
      case '':
        finalHistoryList = initialHistoryList
        break

      default:
        finalHistoryList = initialHistoryList.filter(eachItem =>
          eachItem.title.toLowerCase().includes(inputVal.toLowerCase()),
        )
        break
    }

    return (
      <div>
        <div className="header">
          <img
            className="history-img"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              className="input-area"
              type="search"
              placeholder="Search History"
              onChange={this.onInputChange}
            />
          </div>
        </div>
        <ul className="history-items-container">
          {finalHistoryList.map(item => (
            <HistoryItem key={item.id} item={item} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    )
  }
}

export default History
