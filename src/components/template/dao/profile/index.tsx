import { Box, Flex, Text, useToast } from "@chakra-ui/react"
import GZIconTick from "components/atoms/icons/tick"
import GZButtonProfile from "components/molecules/profile/button-profile"
import GZCardProfile from "components/molecules/profile/card-profile"
import GZAvatarImage from "components/organisms/common/avatar"
import GZCoverImage from "components/organisms/common/cover"
import GZInvitationLinkModal from "components/organisms/common/invitation-link-modal"
import GZProposalCore from "components/organisms/common/proposals"
import GZHeaderProposal from "components/organisms/dao/profile/header-proposal"
import GZListProfile from "components/organisms/dao/profile/list-profile"
import { DATA_PROPOSALS } from "constants/layout"
import React from "react"

type GZProfileProps = {
    profileInfo: any;
    empty?:boolean;
    isVerified?:boolean
}
const GZProfile = ({ profileInfo ,empty = true,isVerified = false}: GZProfileProps) => {
    const [showModal,setShowModal] = React.useState<boolean>(false)
    const [values, setValues] = React.useState<string>(
        "https://app.gizedao.com/gizedao"
      );
    // const [token,setToken] = React.useState<boolean>(true)
    const handleClick = () => {
        setShowModal(!showModal)
    }
    const toast = useToast()
  const copyLink = async () => {
    await navigator.clipboard.writeText(values);
    toast({
      title:'Copy Successful',
      position:'top-right'
    })
    setShowModal(!showModal)
  };
    return <>
     {/* <GZCardProfile isCreate={token ?? true} onSubmit={() => {}}  /> */}
     {showModal ? <GZInvitationLinkModal value={values} onChangeInput={(e:any) =>setValues(e.target.value)} onDismiss={() => {setShowModal(false)}} onCopy={copyLink} /> : ""}
        {empty ?  <GZCardProfile onSubmit={() => {}}  /> : ""}
        <Flex direction="row" gap="46px" alignItems="flex-start">
            <Box
                flex="1"
                background="#1B2332"
                boxShadow="0px 4px 4px rgba(191, 207, 232, 0.04)"
                borderRadius="12px"
            >
                <GZCoverImage src={profileInfo.coverImage} />
                <Box mt="-40px" ms="32px" padding='4px' position="relative">
                    <GZAvatarImage size="88px" src={profileInfo.avatar} name={profileInfo.name} />
                    <Box position="absolute" bottom="0" right="32px" cursor="pointer">
                    {empty ? <GZButtonProfile onClick={handleClick} fs="14px"  text="Join DAO" p="6px 38px"  /> : '' } 
                    </Box>
                </Box>
                <Box p="16px 16px 24px" borderBottom="1px solid rgba(78, 95, 131, 0.7)">
                    <Flex alignItems="baseline" gap='10px'>
                    <Text
                        mb="6px"
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="140%"
                        color="#FFFFFF"
                    >
                        {profileInfo.name} 
                    </Text>
                    {!isVerified ? <GZIconTick /> : ''}
                    </Flex>
                    <Text
                        mb="16px"
                        fontWeight="400"
                        fontSize="14px"
                        lineHeight="140%%"
                        color="#94A7C6">
                        {profileInfo.member}
                    </Text>
                    <Text
                        mb="16px"
                        fontWeight="400"
                        fontSize="15px"
                        lineHeight="140%"
                        color="#BFCFE8">
                        {profileInfo.bio}
                    </Text>
                    <GZListProfile />
                </Box>
                <Box p="16px 16px 0px">
                    <GZHeaderProposal />
                </Box>
                <Box p="32px 24px 0px">
                    {
                        DATA_PROPOSALS.map((item: any) => (
                            <GZProposalCore item={item} key={item.id}/>
                        ))
                    }
                </Box>
            </Box>
        </Flex>
    </>
}
export default GZProfile