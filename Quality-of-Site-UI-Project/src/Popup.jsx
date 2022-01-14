import React from 'react'
import "./NavBar.css"

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => { props.setTrigger() }}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup
