import { Button, Image, Tooltip } from "@chakra-ui/react";

type GZLogoImageButtonProps = {
    src: string;
    alt?: string;
    tooltip?: string;
    onClick?: () => void;
}
const GZUserImageButton = ({ src, alt, tooltip, onClick }: GZLogoImageButtonProps) => {
    return <Tooltip hasArrow label={tooltip} placement='auto-start'>
        <Button
            type="button"
            onClick={onClick}
            padding="0"
            backgroundColor="#242E42"
            borderRadius="50%"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            w="48px"
            h="48px"
            border='1px solid #242E42'
            overflow="hidden"
            _hover={{
                borderColor: 'rgba(191, 207, 232, 0.1)'
            }}
            _active={{
                bg: '#394662',
                borderColor: '#394662'
            }}
            _focus={{
                bg: '#394662',
                borderColor: '#394662'
            }}
        >
            <Image src={src} alt={alt} w="100%" h="100%" objectFit="cover" />
        </Button>
    </Tooltip>
}
export default GZUserImageButton