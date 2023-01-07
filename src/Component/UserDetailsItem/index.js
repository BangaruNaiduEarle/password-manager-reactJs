import './index.css'

const UserDetailsItem = props => {
  const {eachUserDetail, onClickDeleteButton} = props
  const {websiteName, userName, password, id, color, checkbox} = eachUserDetail

  const onClickDeleteItem = () => {
    onClickDeleteButton(id)
  }

  return (
    <li className="list-items">
      <div className="details-container">
        <div className={`website-initial-container ${color}`}>
          <p className="website-initial">{websiteName.toUpperCase()[0]}</p>
        </div>
        <div>
          <p className="details-styles">{websiteName}</p>
          <p className="details-styles">{userName}</p>
          {checkbox ? (
            <p className="details-styles">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star-password"
            />
          )}
        </div>
      </div>

      <button
        type="button"
        // eslint-disable-next-line react/no-unknown-property
        testid="delete"
        className="button-container"
        onClick={onClickDeleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default UserDetailsItem
