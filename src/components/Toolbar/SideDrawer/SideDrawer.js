import './SideDrawer.css';

const SideDrawer = (props) => {
    let drawClasses = 'side_drawer';

    if(props.show){
        drawClasses = 'side_drawer open';
    } 
  return (
    <nav className={drawClasses}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
