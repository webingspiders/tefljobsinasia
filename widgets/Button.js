import styles from '../styles/Button.module.css'

export default function Button(props) {
    return(
        <button type="button" onClick={props.click} className={styles.signup}>
            {props.children}
        </button>
    )
}