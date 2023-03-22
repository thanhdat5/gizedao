import { Badge, Box, Button, Stack, Tooltip } from "@chakra-ui/react";
import GZUserImageButton from "components/molecules/user/user-image-button";

type GZDAOIconButtonBadgeProps = {
    src: string;
    tooltip?: string;
    countBadge?:number | string;
    onClick?: () => void;
}
const GZDAOIconButtonBadge = ({ src,tooltip,countBadge }: GZDAOIconButtonBadgeProps) => {
    return <Box position='relative'>
        <GZUserImageButton src={src} tooltip={tooltip}/>
        <Stack position='absolute' direction='row' bottom='0' right='0' backgroundColor='#7986ED' borderRadius='50%'>
            <Badge colorScheme='#fffff' padding='0 4px' textAlign='center' minWidth='20px'>{countBadge}</Badge>
        </Stack>
    </Box>

}

export default GZDAOIconButtonBadge