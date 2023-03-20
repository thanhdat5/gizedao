import {
  Button,
  Center,
  Flex,
  Input,
  Modal,
  ModalBody, ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
type Props = {
  label?: string;
  value?: string;
  buttonText?: string;
  errorMessage?: string;
  onChangeInput:any;
  onCopy: () => void;
  onDismiss: () => void;
};

const GZInvitationLinkModal = ({
  label = "GizeDAO DAO",
  value,
  buttonText = "Copy",
  onChangeInput,
  onCopy,
  onDismiss,
}: Props) => {
  
  
  return (
    <Modal isOpen={true} onClose={onDismiss} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          p="22px"
          fontSize="24px"
          lineHeight="29px"
          fontWeight="600"
          letterSpacing="0.36px"
          color="#fff"
        >
          <Center>{label}</Center>
        </ModalHeader>
        <ModalBody textAlign="center" p="0">
          <Center>
            <Text>
              Here is your invitation link. <br />
              Copy and share with new members
            </Text>
          </Center>
          <Flex justifyContent="center" gap="20px" m="24px">
            <Input value={value} size='sm' onChange={onChangeInput}  />
            <Button onClick={onCopy} p="0" color="#222222">
              <Text p="8px 24px" color="#fff">
                {buttonText}
              </Text>
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GZInvitationLinkModal;
