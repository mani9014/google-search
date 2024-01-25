// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, updateUser} = props
  const {suggestion, id} = suggestionsDetails
  const onUpdate = () => {
    updateUser(id)
  }
  return (
    <li className="list-items">
      <p className="suggestion-para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onUpdate}
      />
    </li>
  )
}
export default SuggestionItem
