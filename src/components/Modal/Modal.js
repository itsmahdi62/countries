import LinearProgress from '@mui/material/LinearProgress';
import { Container } from "@mui/material";
import "./Modal.css"
const Modal = ({Loading}) => {
    return ( <div>
        {Loading ? <div className='progress'>
            <LinearProgress color="secondary" />
        </div> :null}
    </div> );
}
 
export default Modal;