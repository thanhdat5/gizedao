import { Avatar, Flex } from "@chakra-ui/react";
import GZIconProfile from "components/atoms/icons/Profile";

type GZAvatarImageProps = {
    src?: string;
    name?: string;
    size?: string;
    borderWidth?: string;
    borderColor?: string;
    showIcon?: boolean;
}

const GZAvatar = ({ src, name = "", size = "92px", borderWidth = "4px", borderColor = "#242E42", showIcon = true }: GZAvatarImageProps) => {
    return <Flex
        borderRadius="50%"
        background="#242E42"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        h={size}
        w={size}
        border={`${borderWidth} ${borderColor} solid`}
    >
        {src ? <Avatar w="100%" h="100%" name={name} src={src} /> :
            <>{
                showIcon ? <GZIconProfile /> : <></>
            }
            </>}
    </Flex>
}
export default GZAvatar