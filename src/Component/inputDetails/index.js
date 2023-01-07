import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import UserDetailsItem from '../UserDetailsItem'

import './index.css'

const RandomColorsList = [
  'orange',
  'darkGreen',
  'shaffron',
  'lightGreen',
  'Red',
  'skyblue',
]

class PasswordManager extends Component {
  state = {
    userDetails: [],
    websiteName: '',
    userName: '',
    password: '',
    searchInput: '',
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state

    const randomColor = Math.ceil(Math.random() * RandomColorsList.length) - 1

    const newUserDetails = {
      id: uuidv4(),
      websiteName,
      userName,
      password,

      color: RandomColorsList[randomColor],
      checkbox: false,
    }

    this.setState(prevState => ({
      userDetails: [...prevState.userDetails, newUserDetails],
      websiteName: '',
      userName: '',
      password: '',
      searchInput: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickDelete = id => {
    const {userDetails} = this.state

    const filteredUserDetails = userDetails.filter(each => each.id !== id)

    this.setState({userDetails: filteredUserDetails})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      userDetails: prevState.userDetails.map(each => ({
        ...each,
        checkbox: !each.checkbox,
      })),
    }))
  }

  onChangeSearchWebsite = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      userDetails,
      websiteName,
      userName,
      password,
      searchInput,
    } = this.state

    console.log(userDetails)
    const filteredList = userDetails.filter(each =>
      each.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const NumOfPasswords = filteredList.length

    return (
      <div className="app-container-lg">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="user-details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
            <form
              className="user-input-details-container"
              onSubmit={this.onClickAddButton}
            >
              <h1 className="pwd-heading">Add New Password</h1>

              <div className="website-container">
                <div className="website-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-image"
                  />
                </div>
                <input
                  placeholder="Enter Website"
                  type="text"
                  value={websiteName}
                  className="website-input"
                  onChange={this.onChangeWebsite}
                />
              </div>

              <div className="website-container">
                <div className="website-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="website-image"
                  />
                </div>
                <input
                  placeholder="Enter Username"
                  type="text"
                  value={userName}
                  className="website-input"
                  onChange={this.onChangeUsername}
                />
              </div>

              <div className="website-container">
                <div className="website-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="website-image"
                  />
                </div>
                <input
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  className="website-input"
                  onChange={this.onChangePassword}
                />
              </div>

              <div className="btn-container">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="password-container">
            <div className="pwd-search-container">
              <div className="password-count-container">
                <h1 className="pwd-heading">Your Passwords</h1>
                <p className="pwd-count">{NumOfPasswords}</p>
              </div>

              <div className="search-container">
                <div className="search-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-image"
                  />
                </div>

                <input
                  placeholder="Search"
                  type="search"
                  value={searchInput}
                  className="search-input"
                  onChange={this.onChangeSearchWebsite}
                />
              </div>
            </div>

            <hr className="h-line" />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox"
                className="check-box"
                onClick={this.onClickCheckbox}
              />
              <label htmlFor="checkbox" className="showPassword">
                Show Passwords
              </label>
            </div>
            {NumOfPasswords === 0 ? (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords"
                />
                <p className="no-password-txt">No Passwords</p>
              </div>
            ) : (
              <ul className="unOrderList">
                {filteredList.map(each => (
                  <UserDetailsItem
                    eachUserDetail={each}
                    key={each.id}
                    onClickDeleteButton={this.onClickDelete}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
