import { Flex } from "@chakra-ui/react";
import { LAYOUT_SETTING } from "constants/layout";
import GZNotification from "components/molecules/common/notification";
import GZSearch from "components/molecules/common/search";
import GZWalletButton from "components/molecules/common/wallet-button";

const GZHeader = () => {
    return <Flex
        justifyContent="space-between"
        position='fixed'
        zIndex={999}
        top={0}
        left={LAYOUT_SETTING.SIDEBAR_WIDTH}
        background="#0E1420"
        borderBottom="1px solid rgba(78, 95, 131, 0.7)"
        padding="19px 44px"
        w={`calc(100% - ${LAYOUT_SETTING.SIDEBAR_WIDTH})`}
        h={LAYOUT_SETTING.HEADER_HEIGHT}
    >
        <GZSearch w="574px" placeholder="Search Organization" />
        <Flex gap="16px">
            <GZNotification haveNoti />
            <GZWalletButton label="0xe23a123456789b7Cc" onClick={() => { }} />
        </Flex>
    </Flex>
}
export default GZHeader;