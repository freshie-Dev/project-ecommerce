import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import UserContextProvider from '../context/UserContext';

function PopUp(props) {
    const {openModal, setOpenModal} = UserContextProvider()
//   const [openModal, setOpenModal] = useState(false);

  return (
    <>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{props.code}</Modal.Header>
        <Modal.Body>
          <h1>{props.error}</h1>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
