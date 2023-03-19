import { Box, Image } from "@chakra-ui/react";

type Props = {
    src: string;
    alt?: string;
    w?: string;
    h?: string;
}
const GZCover = ({ src, alt, w = "100%", h = "140px" }: Props) => {
    return <Box overflow="hidden" h={h} w={w} borderRadius="12px 12px 0 0">
        <Image src={src} alt={alt} objectFit="cover" w="100%" h="100%" />
    </Box>
}
export default GZCover