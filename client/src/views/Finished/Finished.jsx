import { useDispatch, useSelector } from 'react-redux';
import styles from './Finished.module.css';
import { Link } from 'react-router-dom';
import { getFormById } from '../../redux/actions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Finished = () => {
    const id = useSelector(state=>state.id);

    const dispatch = useDispatch();
    const history = useHistory();

    const getFormHandler = async() =>{
        try {
            await dispatch(getFormById(id));
            history.push('/response');
        } catch (error) {
            
        }
    }


    return <div className={styles.FinishedContainer}>
        <h1>Gracias por completar el Formulario</h1>

        {/* <Link to='/response'
        onClick={getFormHandler}
        >Ver respuestas</Link> */}
        <div
        onClick={getFormHandler}
        >Ver respuestas</div>
    </div>
}

export default Finished;
