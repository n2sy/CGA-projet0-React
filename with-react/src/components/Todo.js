import { useState } from "react"
import Modal from "./Modal";
import Backdrop from './Backdrop';



export default function Todo(props) {
    const [allowModal, setAllowModal] = useState(false);

    function deleteHandler() {
        console.log("V3");
        setAllowModal(true);
    }

    function closeModalHandler() {
        setAllowModal(false);
    }

    function confirmHandler() {
        console.log("Confirm");
        closeModalHandler();
    }
    function cancelHandler() {
        console.log("Cancel");
        closeModalHandler();
    }

    return (

        <>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    {/* <button onClick={function () { console.log("V1") }} className="btn">Delete</button>
                <button onClick={() => { console.log("V2") }} className="btn">Delete</button> */}
                    <button onClick={deleteHandler} className="btn">Delete</button>
                </div>
            </div>
            {allowModal ? <Modal onConfirm={confirmHandler} onCancel={cancelHandler} ></Modal> : null}
            {allowModal && <Backdrop onNidhal={closeModalHandler}></Backdrop>}
        </>

    )
}