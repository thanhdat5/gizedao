import { Button, Tooltip } from "@chakra-ui/react";

type GZIconButtonProps = {
    w?: string;
    h?: string;
    p?: string;
    icon: JSX.Element;
    tooltip?: string;
    onClick?: () => void;
}
const GZIconButton = ({
    w = "48px",
    h = "48px",
    p = "12px",
    icon,
    tooltip = '',
    onClick
}: GZIconButtonProps) => {
    return <Tooltip label={tooltip}>
        <Button
            type="button"
            onClick={onClick}
            backgroundColor="#242E42"
            borderRadius="50%"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px solid #242E42'
            w={w}
            h={h}
            padding={p}
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
            {icon}
        </Button>
    </Tooltip>
}
export default GZIconButton