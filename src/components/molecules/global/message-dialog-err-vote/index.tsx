import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import GZIconSuccess from "../../../atoms/icons/successIcon";
import styled from "styled-components";
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h4`
  font-size: 14px;
  text-align: left;
  color: #bfcfe8;
  font-weight: 400;
  line-height: 20px;
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
const PullRight = styled.span`
  float: right;
`;
const ButtonOutLine = styled.button`
  background-color: transparent;
  border: 1px solid rgba(78, 95, 131, 0.7);
`;
const MesArea = styled("div")({
  color: "#bfcfe8",
  border: "1px solid rgba(78, 95, 131, 0.7)",
  padding: 12,
  borderRadius: 10,
  opacity: 0.7,
});

type GZMessageDialogSuccessProps = {
  modalBigIcon?: boolean;
  showModalButtonText: string | JSX.Element;
  modalHeader: string | JSX.Element;
  modalBody: string | JSX.Element;
  title?: string | JSX.Element;
  body?: string | JSX.Element;
  closeText: string;
};
const GZMessageDialogErrVote = ({ modalBigIcon = false, showModalButtonText, modalHeader, modalBody, closeText }: GZMessageDialogSuccessProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{showModalButtonText}</Button>
      <Modal isOpen={isOpen} onClose={onClose!} isCentered>
        <ModalOverlay />
        <ModalContent background="#1B2332" border="1px solid rgba(78, 95, 131, 0.7)" borderRadius="10px">
          <ModalHeader
            padding="40px 32px"
            fontFamily="Inter"
            fontWeight="100"
            fontSize="18px"
            lineHeight="27px"
            text-align="center"
            letterSpacing="0.02em"
            color="#BFCFE8"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            {modalHeader}
          </ModalHeader>
          <ModalBody padding="0 24px 40px" fontFamily="Inter" fontWeight="400" fontSize="16px" lineHeight="150%" color="#BFCFE8">
            <Text mb={2}>
              <span>Choice</span>
              <PullRight className="pull-right">Yes! add the option</PullRight>
            </Text>
            <Text mb={2}>
              <span>Your voting power</span>
              <PullRight className="pull-right">Your voting power</PullRight>
            </Text>
            <MesArea>
              <h1>Test</h1>
            </MesArea>
          </ModalBody>
          <ModalFooter justifyContent="center" padding="0 24px 40px">
            <Button w="214px" maxW="100%" onClick={onClose} border="1px solid rgba(78, 95, 131, 0.7)" bg="" color="#BFCFE8">
              {closeText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default GZMessageDialogErrVote;
