import styles from '../styles/Container.module.css'

export default function Container(props) {
    return(
        <section className={`${props.main_class} ${styles.section}`}>
            {props.align === "row" ? (
            <div className={`${props.container_class} ${styles.container}`}>
                {props.children}
            </div>
            ):(
            <div className={`${props.container_class} ${styles.container}`} style={{flexDirection: 'column'}}>
                {props.children}
            </div>
            )
            }   
        </section>
    )
}