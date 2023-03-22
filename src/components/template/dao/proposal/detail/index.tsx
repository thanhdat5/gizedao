import { Box, Stack } from "@chakra-ui/react";
import GZProposalCore from "components/organisms/common/proposals";
import GZProposalVote from "components/organisms/dao/proposal/form-vote";
import GZInfo from "components/organisms/dao/proposal/list-info";
import GZListVote from "components/organisms/dao/proposal/list-voter";
import { IProposal } from "types/proposal";


type GZDetailProposalProps = {
  item: IProposal | undefined;
};
const GZDetailProposal = ({item}: GZDetailProposalProps) => {
  return (
    <Stack direction={['column', 'row']} spacing="40px">
      <Box flex={2}>
        <GZProposalCore item={item} isDetail/>
        <GZProposalVote />  
        <GZListVote voteData={item?.votes}/>
      </Box>
      <Box flex={1}>
        <GZInfo type="information" data={item?.informations}/>
        <GZInfo type="result" data={item?.votes}/>
      </Box>
    </Stack>
  )
}

export default GZDetailProposal