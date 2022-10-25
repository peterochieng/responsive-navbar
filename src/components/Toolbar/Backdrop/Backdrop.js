import './Backdrop.css';

const Backdrop = (props) => {

   return <div onClick={props.click} className='backdrop'></div>
}

export default Backdrop;