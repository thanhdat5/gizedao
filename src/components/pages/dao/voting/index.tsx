import { Box, Center, Flex } from '@chakra-ui/react';
import GZMessageDialogCommon from 'components/molecules/common/message-dialog-common';
import GZMessageDialogMember from 'components/molecules/common/message-dialog-member';
import GZMessageDialogSuccess from 'components/molecules/common/message-dialog-success';

const GZUserVotingPage = () => {
	return (
		<>
			<Flex gap={5}>
				<GZMessageDialogSuccess
					modalBigIcon={true}
					showModalButtonText="Success Modal"
					modalHeader="Test"
					iconHeader="iconSuccess"
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
				<GZMessageDialogMember
					showModalButtonText="Member modal"
					title="Ban 03x65...300xx"
					subTitle="They can't Apply to be a member of your organization!"
					closeText="Cancel"
					saveText="Ban member"
				/>
				<GZMessageDialogMember
					showModalButtonText="Add Member modal"
					title="Add Member"
					closeText="Cancel"
					saveText="Add member"
					isCenterTitle={true}
					isAddForm={true}
				/>
			</Flex>
		</>
	);
};
export default GZUserVotingPage;
