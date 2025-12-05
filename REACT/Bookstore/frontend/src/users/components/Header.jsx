import React from 'react'

const Header = () => {
  return (
    <div className="grid grid-cols-3 p-3">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqUs3T58cp4uUxHjONLdM2K2MK4onV8JNhw&s"
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div className="fllex justify-center items-center">
        <h1 className="text-3xl">BOOKSTORE</h1>
      </div>
      <div>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </div>
  )
}

export default Header;
