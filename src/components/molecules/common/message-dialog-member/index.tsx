import { Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { title } from "process";
import styled from "styled-components";
import GZIconSuccess from "../../../atoms/icons/successIcon";

const Title = styled(Text)`
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 28px;
  font-family: "Inter";
  margin-bottom: 10px;
`;
const SubTitle = styled(Text)`
  font-size: 15px;
  color: #bfcfe8;
  font-weight: 400;
  line-height: 24px;
  font-family: "Inter";
  margin-bottom: 10px;
`;
const WrapBtn = styled.div`
  font-size: 14px;
  color: #bfcfe8;
  font-weight: 400;
  line-height: 20px;
  font-family: "Inter";
  display: flex;
  flex: 0 0 100%;
  row-gap: 5px;
  .btn-ban {
    border: none;
    background-color: #f04438;
    color: #fff;
    border-radius: 8px;
    &:hover {
      background-color: rgba(240, 68, 56, 0.7);
      color: #f5f5f5;
    }
  }
  .btn-no-outline {
    border: none;
    background-color: transparent;
    margin-right: 5px;
  }
`;
type GZMessageDialogMemberProps = {
  modalBigIcon?: boolean;
  showModalButtonText: string | JSX.Element;
  title?: string | JSX.Element;
  isCenterTitle?: boolean;
  subTitle?: string | JSX.Element;
  closeText: string;
  saveText?: string;
};
const GZMessageDialogMember = ({ modalBigIcon = false, showModalButtonText, closeText, saveText, title, subTitle }: GZMessageDialogMemberProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{showModalButtonText}</Button>
      <Modal isOpen={isOpen} onClose={onClose!} isCentered>
        <ModalOverlay />
        <ModalContent background="#1B2332" border="none" borderRadius="12px">
          {/* <ModalHeader padding="40px 32px" fontFamily="Inter" fontWeight="600" fontSize="40px" lineHeight="48px" text-align="center" letterSpacing="0.02em" color="#00CE6B" textAlign="center">
            {!modalBigIcon && modalHeader}
            {modalBigIcon && <GZIconSuccess />}
          </ModalHeader> */}
          <ModalBody padding="24px" fontFamily="Inter" fontWeight="400" fontSize="16px" lineHeight="150%" color="#BFCFE8" background="#1B2332" borderRadius="12px">
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </ModalBody>
          <ModalFooter justifyContent="end" padding="14px" background="#242E42" borderRadius="0 0 12px 12px">
            <Flex gap={5} flexWrap="wrap">
              <WrapBtn>
                <Button className="btn-no-outline" w="150px" maxW="100%" onClick={onClose}>
                  {closeText}
                </Button>
                <Button className="btn-ban" w="150px" maxW="100%" background="#F04438" color="#fff" borderRadius="8px">
                  {saveText}
                </Button>
              </WrapBtn>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default GZMessageDialogMember;
