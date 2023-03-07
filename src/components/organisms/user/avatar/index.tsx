import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import GZIconUpload20px from "../../../atoms/icons/Upload";
import GZAvatarImage from "../../../molecules/user/avatar-image";

type GZUserAvatarProps = {
    src?: string;
    name?: string;
    size?: string;
    borderWidth?: string;
    borderColor?: string;
    editable?: boolean;
    onUpload?: () => void;
}

const GZUserAvatar = ({ src, name = "", size = "92px", borderWidth = "4px", borderColor = "#242E42", editable, onUpload }: GZUserAvatarProps) => {
    const [isHover, setIsHover] = useState(false);

    return <Box
        position="relative"
        borderRadius="50%"
        w={size}
        h={size}
        overflow="hidden"
        onMouseEnter={() => { if (editable) setIsHover(true) }}
        onMouseLeave={() => setIsHover(false)}
        cursor="pointer"
    >
        <GZAvatarImage src={src} name={name} size={size} borderWidth={borderWidth} borderColor={borderColor} showIcon={!isHover} />
        {editable ? <Flex
            position='absolute'
            top="0"
            left="0"
            h='100%'
            w='100%'
            alignItems="center"
            justifyContent="center"
            bg="rgba(36, 46, 66, 0.4)"
            backdropBlur="3.5px"
            transition="all ease-in-out .3s"
            opacity={isHover ? 1 : 0}
            cursor='pointer'
            onClick={onUpload}
        >
            <GZIconUpload20px />
        </Flex> : <></>
        }
    </Box>
}

export default GZUserAvatar