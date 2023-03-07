import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

type GZMessageDialogProps = {
    isOpen?: boolean;
    title: string | JSX.Element;
    body: string | JSX.Element;
    closeText: string;
    onClose?: () => void;
}
const GZMessageDialog = ({ isOpen = false, title, body, closeText, onClose }: GZMessageDialogProps) => {
    return <Modal isOpen={isOpen} onClose={onClose!} isCentered>
        <ModalOverlay />
        <ModalContent
            background="#1B2332"
            border="1px solid rgba(78, 95, 131, 0.7)"
            borderRadius="10px"
        >
            <ModalHeader
                padding="40px 32px"
                fontFamily='Inter'
                fontWeight="600"
                fontSize="40px"
                lineHeight="48px"
                text-align="center"
                letterSpacing="0.02em"
                color="#00CE6B"
                textAlign="center"
            >
                {title}
            </ModalHeader>
            <ModalBody
                padding="0 24px 40px"
                fontFamily='Inter'
                fontWeight="400"
                fontSize="16px"
                lineHeight="150%"
                textAlign="center"
                color="#BFCFE8"
            >
                {body}
            </ModalBody>
            <ModalFooter
                justifyContent='center'
                padding="0 24px 40px"
            >
                <Button w="214px" maxW="100%" onClick={onClose}>{closeText}</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
}
export default GZMessageDialog;