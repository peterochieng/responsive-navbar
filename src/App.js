import Toolbar from "./components/Toolbar/Toolbar";
import { useState } from "react";
import SideDrawer from "./components/Toolbar/SideDrawer/SideDrawer";
import Backdrop from "./components/Toolbar/Backdrop/Backdrop";
function App() {
  const [drawerOpen, setdrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    
    setdrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setdrawerOpen(false)
  }


  let backdrop;

  if(drawerOpen === true) {

backdrop = <Backdrop click={backdropClickHandler}></Backdrop>
  }

  return (
  
    <div style={{ height: "100%" }}>
      <SideDrawer show={drawerOpen}></SideDrawer>
      <Toolbar drawerClickHandler={drawerToggleClickHandler}></Toolbar>
     
      {backdrop}
      
      <main style={{ marginTop: "64px" }}>
        <p>This is the page content</p>
      </main>
    </div>
  );
}

export default App;
