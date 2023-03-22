import { Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, Link } from "@chakra-ui/react";
import GZIconSuccess from "../../../atoms/icons/successIcon";
import styled from "styled-components";
import GZIconCaution from "../../../atoms/icons/caution";
import GZIconExternalLink from "../../../atoms/icons/externalLink";

// import { ExternalLinkIcon } from "@chakra-ui/icons";
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h4`
  font-size: 14px;
  text-align: left;
  color: #bfcfe8;
  font-weight: 400;
  line-height: 20px;
  font-family: Inter;
`;
const SubTitle = styled(Text)`
  font-size: 14px;
  color: #bfcfe8;
  font-weight: 400;
  line-height: 20px;
  font-family: "Inter";
  .test {
    opacity: 0.7;
  }
  svg {
    display: inline-flex;
  }
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
  padding: 15,
  borderRadius: 10,
  opacity: 0.7,
  marginTop: "20px",
});

type GZMessageDialogCommonProps = {
  modalBigIcon?: boolean;
  showModalButtonText: string | JSX.Element;
  modalHeader: string | JSX.Element;
  modalBody: string | JSX.Element;
  title?: string | JSX.Element;
  body?: string | JSX.Element;
  textLeft1?: string | JSX.Element;
  textRight1?: string | JSX.Element;
  textLeft2?: string | JSX.Element;
  textRight2?: string | JSX.Element;
  textMesArea?: string | JSX.Element;
  textLink?: string | JSX.Element;
  closeText?: string;
  saveText?: string;
  iconErr?: boolean;
};
const GZMessageDialogCommon = ({
  modalBigIcon = false,
  showModalButtonText,
  modalHeader,
  modalBody,
  textLeft1,
  textLeft2,
  textRight1,
  textRight2,
  textMesArea,
  textLink,
  closeText,
  saveText,
  iconErr = false,
}: GZMessageDialogCommonProps) => {
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
            <Text mb={3}>
              <span>{textLeft1}</span>
              <PullRight className="pull-right">{textRight1}</PullRight>
            </Text>
            <Text mb={2}>
              <span>{textLeft2}</span>
              <PullRight className="pull-right">{textRight2}</PullRight>
            </Text>
            <MesArea>
              <Text>
                <Flex gap={1} alignItems="baseline">
                  <Flex maxW="10%">{iconErr && <GZIconCaution />}</Flex>

                  <Flex flex={1}>
                    <SubTitle>
                      <span className="test"> {textMesArea} </span>
                      {textLink && (
                        <Link href="https://chakra-ui.com" color="#BFCFE8" opacity={1} isExternal className="link-text">
                          {textLink} <GZIconExternalLink />
                        </Link>
                      )}
                    </SubTitle>
                  </Flex>
                </Flex>
              </Text>
            </MesArea>
          </ModalBody>
          <ModalFooter justifyContent="center" padding="0 24px 40px">
            <Flex gap={5} flexWrap="wrap">
              <Button w="150px" maxW="100%" onClick={onClose} border="1px solid rgba(78, 95, 131, 0.7)" bg="" color="#BFCFE8">
                {closeText}
              </Button>
              <Button w="150px" maxW="100%">
                {saveText}
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default GZMessageDialogCommon;
