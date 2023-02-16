import styles from '../styles/Modal.module.css'
import Button from './Button'
import { useState } from 'react'
import ApplicationForm from './ApplicationForm';
import { RxCross1 } from 'react-icons/rx';

export default function Modal(props) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    // if (typeof window !== "undefined") {
    //     if(modal){
    //         document.body.classList.add('active_modal')
    //     }else{
    //         document.body.classList.remove('active_modal')
    //     }
    // }   
    
    return(
        <>
            <Button click={toggleModal}>{props.text}</Button>

            {modal && (
            <div className={styles.modal}>
                <div className={styles.overlay} onClick={toggleModal}></div>
                <div className={styles.modal_content}>
                    <ApplicationForm />
                    <button className={styles.close_popup_menu} onClick={toggleModal} type="button"><RxCross1 /></button>
                </div>
            </div>
            )}
        </>
    )
}