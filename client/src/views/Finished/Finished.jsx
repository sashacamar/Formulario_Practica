import { useSelector } from 'react-redux';
import styles from './Finished.module.css';
import { Link } from 'react-router-dom';


const Finished = () => {
    const id = useSelector(state=>state.id);

    return <div className={styles.FinishedContainer}>
        <h1>Gracias por completar el Formulario</h1>

        <Link to='/response'>Ver respuestas</Link>
    </div>
}

export default Finished;
