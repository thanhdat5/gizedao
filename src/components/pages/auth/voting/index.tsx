import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import GZHeaderTable from "../../../organisms/global/header-table";
import GZTablePrimary from "../../../organisms/global/table-primary";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";

import GZMessageDialogCommon from "../../../molecules/global/message-dialog-common";

import GZMessageDialogSuccess from "../../../molecules/global/message-dialog-success";
import GZMessageDialogMember from "../../../molecules/global/message-dialog-member";

const GZUserVotingPage = () => {
  return (
    <>
      <Flex gap={5}>
        <GZMessageDialogSuccess
          modalBigIcon={true}
          showModalButtonText="Success Modal"
          modalHeader="Test"
          modalBodyHeading=" You have successfully voted. Thanks for your vote!"
          modalBodyPara="Votes can be changed while the proposal is active"
          closeText="Close"
        />
        <GZMessageDialogCommon
          iconErr={true}
          showModalButtonText="Error Voting Modal"
          modalHeader="Cast your vote"
          textLeft1="Choice"
          textRight1="Yes! add the option"
          textLeft2="Choice"
          textRight2="You can add"
          textMesArea="Oops, it seems you don’t have any voting power at block 26,434,841."
          textLink="Learn more"
          modalBody="Vote can be change 1"
          closeText="Cancel"
          saveText="Save"
        />
        <GZMessageDialogCommon
          iconErr={false}
          showModalButtonText="Voting Modal"
          modalHeader="Cast your vote"
          textLeft1="Choice"
          textRight1="Yes! add the option"
          textLeft2="Your voting power"
          textRight2="10MES"
          textMesArea="Share your reason(optional)"
          modalBody="Vote can be change 1"
          closeText="Cancel"
          saveText="Confirm"
        />
        <GZMessageDialogCommon
          iconErr={false}
          showModalButtonText="Voting Modal Text long"
          modalHeader="Cast your vote"
          textLeft1="Choice"
          textRight1="Yes! add the option"
          textLeft2="Your voting power"
          textRight2="10MES"
          textMesArea="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet, lectus fringilla elementum malesuada, purus quam vestibulum ex, ac facilisis ex augue sed massa. In blandit elit non diam sodales, a aliquam nibh pulvinar.
          "
          modalBody="Vote can be change 1"
          closeText="Cancel"
          saveText="Confirm"
        />
        <GZMessageDialogMember showModalButtonText="Member modal" title="Ban 03x65...300xx" subTitle="They can't Apply to be a member of your organization!" closeText="Cancel" saveText="Ban member" />
      </Flex>
    </>
  );
};
export default GZUserVotingPage;
