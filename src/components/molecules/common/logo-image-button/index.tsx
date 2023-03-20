import { Button, Tooltip } from "@chakra-ui/react";
import GZIconLogo from "components/atoms/icons/Logo";

type GZLogoImageButtonProps = {
    tooltip?: string;
    onClick?: () => void;
}
const GZLogoImageButton = ({ tooltip = '', onClick }: GZLogoImageButtonProps) => {
    return <Tooltip label={tooltip}>
        <Button
            type="button"
            onClick={onClick}
            padding="7px"
            backgroundColor="#242E42"
            borderRadius="50%"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            w="48px"
            h="48px"
            border='1px solid #242E42'
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
            <GZIconLogo />
        </Button>
    </Tooltip>
}
export default GZLogoImageButton