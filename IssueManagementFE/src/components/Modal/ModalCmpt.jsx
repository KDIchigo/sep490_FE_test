import { Button } from "@mui/material";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { BaseButton } from "../Base/BaseButton/BaseButton";

export const ModalCmpt = ({
  modalBody,
  btnToggle,
  modalBtn,
  classNameBtn,
  closeBtn,
  modalBtnColor,
  closeBtnColor,
  variant,
}) => {
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <BaseButton
        onClick={toggle}
        color="secondary"
        variant="outline"
        value="ADD NEW"
      >
        {btnToggle}
      </BaseButton>
      <Modal
        isOpen={modal}
        toggle={toggle}
        backdrop={backdrop}
        keyboard={keyboard}
        size="lg"
      >
        <ModalHeader toggle={toggle}>
          {modalBtn}
          {/* <img style={{width: "100px"}} src="https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"/> */}
        </ModalHeader>
        <ModalBody className="row">{modalBody}</ModalBody>
        <ModalFooter>
          <BaseButton
            value={closeBtn}
            variant={variant}
            color={closeBtnColor}
            onClick={toggle}
          />
          <BaseButton
            className="ms-3"
            value={modalBtn}
            variant={variant}
            color={modalBtnColor}
            onClick={toggle}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
};
