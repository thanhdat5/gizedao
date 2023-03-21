import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import styled from "styled-components";
import GZIconSuccess from "../../../atoms/icons/successIcon";

const Title = styled.h4`
  font-size: 18px;
  text-align: center;
  color: #bfcfe8;
  font-weight: 400;
  line-height: 27px;
  font-family: Inter;
`;
const SubTitle = styled.h6`
  font-size: 12px;
  text-align: center;
  color: #bfcfe8;
  font-weight: 400;
  line-height: 18px;
  opacity: 0.7;
  font-family: Inter;
  margin-top: 10px;
`;
type GZMessageDialogCommonProps = {
  modalBigIcon?: boolean;
  showModalButtonText: string | JSX.Element;
  modalHeader: string | JSX.Element;
  modalBody: string | JSX.Element;
  title?: string | JSX.Element;
  body?: string | JSX.Element;
  closeText: string;
  // onClose?: () => void;
};
const GZMessageDialogCommon = ({ modalBigIcon = false, showModalButtonText, modalHeader, modalBody, closeText }: GZMessageDialogCommonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{showModalButtonText}</Button>
      <Modal isOpen={isOpen} onClose={onClose!} isCentered>
        <ModalOverlay />
        <ModalContent background="#1B2332" border="1px solid rgba(78, 95, 131, 0.7)" borderRadius="10px">
          <ModalHeader padding="40px 32px" fontFamily="Inter" fontWeight="600" fontSize="40px" lineHeight="48px" text-align="center" letterSpacing="0.02em" color="#00CE6B" textAlign="center">
            {!modalBigIcon && modalHeader}
            {modalBigIcon && <GZIconSuccess />}
          </ModalHeader>
          <ModalBody padding="0 24px 40px" fontFamily="Inter" fontWeight="400" fontSize="16px" lineHeight="150%" textAlign="center" color="#BFCFE8">
            {modalBody}
          </ModalBody>
          <ModalFooter justifyContent="center" padding="0 24px 40px">
            <Button w="214px" maxW="100%" onClick={onClose}>
              {closeText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default GZMessageDialogCommon;
