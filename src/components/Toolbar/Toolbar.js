import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'

const Toolbar = (props) => {
  return (
    <header className='toolbar'>
        <nav className='toolvar__navigation'>
          <div className='toolbar__toggle-button'>
            <DrawerToggleButton click={props.drawerClickHandler}></DrawerToggleButton>
          </div>
            <div className='toolbar__logo'><a href='/'>The Logo</a></div>
            <div className='spacer'></div>
            <div className='toolbar_naviagtion-items'>
                <ul>
                    <li><a href='/'>Products</a></li>
                    <li><a href='/'>Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Toolbar; 