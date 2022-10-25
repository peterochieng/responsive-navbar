import React from "react";
import './DrawerToggleButton.css';

const drawerToggleButton = (props) => {

return <button onClick={props.click} className="toggle_button">
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
</button>
}

export default drawerToggleButton;