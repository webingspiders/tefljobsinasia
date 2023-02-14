import styles from '../styles/Button.module.css'
import {motion} from 'framer-motion'

export default function Button(props) {
    return(
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        type="button" onClick={props.click} className={styles.signup}>
            {props.children}
        </motion.button>
    )
}