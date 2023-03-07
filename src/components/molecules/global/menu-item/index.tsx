import { As, Flex, MenuItem } from "@chakra-ui/react";

type GZMenuItemProps = {
    icon: JSX.Element;
    rightIcon?: JSX.Element;
    label: string;
    as?: As;
    onClick?: () => void;
    href?: string;
}
const GZMenuItem = ({ icon, rightIcon, label, as, href, onClick }: GZMenuItemProps) => {
    return <MenuItem
        as={as}
        to={href}
        p="9px 8px"
        borderRadius="5px"
        backgroundColor="transparent"
        transition="all ease-in-out .3s"
        icon={icon}
        iconSpacing="10px"
        onClick={onClick}
        _hover={
            {
                backgroundColor: "#EDF2F7",
                _dark: {
                    backgroundColor: "#242E42"
                }
            }
        }
    >
        <Flex alignItems="center" justifyContent="space-between">
            {label}
            {rightIcon ? rightIcon : <></>}
        </Flex>
    </MenuItem>
}
export default GZMenuItem