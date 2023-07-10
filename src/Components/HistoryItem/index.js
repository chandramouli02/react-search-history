import './index.css'
import {Component} from 'react'

class HistoryItem extends Component {
  render() {
    const {item, onDelete} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = item

    const onDeleteClick = () => {
      onDelete(id)
    }

    return (
      <li key={id} className="history-item-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt={title} />
        <p className="title">
          {title} <span className="domain">{domainUrl}</span>
        </p>
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={onDeleteClick}
        />
      </li>
    )
  }
}

export default HistoryItem
