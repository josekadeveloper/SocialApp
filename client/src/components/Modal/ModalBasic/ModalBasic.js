import React from "react";
import { Header, Modal } from "semantic-ui-react";
import "./ModalBasic.scss";

export default function ModalBasic(props) {
    const { show, setShow, title, children } = props;

    const onClose = () => {
        setShow(false);
    };

    return (
        <Modal size="mini" open={show} onClose={onClose} className="modal-basic">
            { title && <Header>{title}</Header> }
            {children}
        </Modal>
    );
}
