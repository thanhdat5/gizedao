import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

type GZDAOModalProps = {
  isOpen: boolean;
  onClick: () => void;
};

const GZDAOModal = ({ isOpen, onClick }: GZDAOModalProps) => {
  const [userInput, setUserInput] = useState("");
  const [errorInput, setErrorInput] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={() => {}} isCentered>
      <ModalContent>
        <Box color="white">
          <ModalHeader>Invitation Code</ModalHeader>
        </Box>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={userInput}
            placeholder="Enter invitation code (Optional)"
            size="sm"
            onChange={(e: any) => setUserInput(e.target.value)}
          />
          {errorInput !== "" && (
            <Text
              fontWeight="400"
              fontSize="13px"
              lineHeight="18px"
              color="#F04438"
              ml="4"
            >
              {errorInput}
            </Text>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            w="100%"
            size="lg"
            onClick={() => {
              if (userInput !== "123") {
                setErrorInput("Invalid code");
                console.log(errorInput);
              } else {
                onClick();
              }
            }}
          >
            Continue
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GZDAOModal;
