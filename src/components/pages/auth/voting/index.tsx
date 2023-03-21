import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import GZHeaderTable from "../../../organisms/global/header-table";
import GZTablePrimary from "../../../organisms/global/table-primary";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";

import GZMessageDialogCommon from "../../../molecules/global/message-dialog-common";
import GZMessageDialogErrVote from "../../../molecules/global/message-dialog-err-vote";

const GZUserVotingPage = () => {
  return (
    <>
      <Flex gap={5}>
        <GZMessageDialogCommon modalBigIcon={true} showModalButtonText="Success Modal" modalHeader="Test" modalBody="Vote can be change" closeText="Close" />
        <GZMessageDialogErrVote showModalButtonText="Error Voting Modal" modalHeader="Cast your vote" modalBody="Vote can be change 1" closeText="Cancel" />
      </Flex>
    </>
  );
};
export default GZUserVotingPage;
