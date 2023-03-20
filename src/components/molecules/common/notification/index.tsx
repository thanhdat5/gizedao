import { Box, Flex } from "@chakra-ui/react"
import GZIconBell from "components/atoms/icons/Bell";
import GZIconBellActive from "components/atoms/icons/BellActive";
import GZIconDot from "components/atoms/icons/Dot";

type GZNotificationProps = {
    haveNoti?: boolean;
    onClick?: () => void
}
const GZNotification = ({ haveNoti = false, onClick }: GZNotificationProps) => {
    return <Flex
        w='40px'
        h='40px'
        borderRadius='50%'
        backgroundColor="#181C2C"
        alignItems='center'
        justifyContent='center'
        position='relative'
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        cursor='pointer'
        _hover={{
            bg: 'rgba(191, 207, 232, 0.1)',
            borderColor: 'rgba(191, 207, 232, 0.1)'
        }}
        _active={{
            bg: '#394662',
            borderColor: '#394662',
        }}
        _focus={{
            bg: '#394662',
            borderColor: '#394662',
        }}
        onClick={onClick}
    >
        {
            haveNoti ? <>
                <GZIconBellActive />
                <Box position='absolute' top={0} right={0}>
                    <GZIconDot />
                </Box>
            </> : <>
                <GZIconBell />
            </>
        }
    </Flex>
}
export default GZNotification