import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import GZDropdownItem from "./item"
import { IGZDropDownItem } from "./type"

type Props = {
    value?: IGZDropDownItem;
    options: IGZDropDownItem[];
    optionAllText?: string;
    onMenuClick: (option: IGZDropDownItem | null) => void;
    height?: string;
    width?: string;
    menuWidth?: string;
}
const GZDropdownList = ({
    value,
    options,
    optionAllText = "All",
    onMenuClick,
    height = "32px",
    width = "100%",
    menuWidth = "346px"
}: Props) => {
    return <Menu>
        <MenuButton
            w={width}
            backgroundColor="transparent"
            p="0"
            border="1px solid rgba(78, 95, 131, 0.7)"
            h={height}
            as={Button}
            overflow="hidden"
            _hover={
                {
                    borderColor: 'rgba(78, 95, 131, 0.7)',
                }
            }
            _active={
                {
                    backgroundColor: '#242E42',
                    borderColor: 'rgba(78, 95, 131, 0.7)',
                    boxShadow: '0 0 0 1px #63b3ed'
                }
            }
        >
            <GZDropdownItem
                selected
                label={value ? value.label : optionAllText}
                icon={value ? value.icon : ''}
                rightIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12.8334L5 7.83341L6.16667 6.66675L10 10.5001L13.8333 6.66675L15 7.83341L10 12.8334Z" fill="#BFCFE8" />
                </svg>}
            />
        </MenuButton>
        <MenuList
            w={menuWidth}
            border="0"
            p="0"
            borderRadius="5px"
            overflow="hidden"
        >
            <MenuItem
                p="0"
                onClick={() => onMenuClick(null)}
            >
                <GZDropdownItem label={optionAllText} selected={!value} />
            </MenuItem>
            {
                options.map((n, idx) => (
                    <MenuItem
                        key={idx}
                        p="0"
                        onClick={() => onMenuClick(n)}
                    >
                        <GZDropdownItem
                            icon={n.icon}
                            label={n.label}
                            selected={value?.value === n.value}
                        />
                    </MenuItem>
                ))
            }
        </MenuList>
    </Menu>
}
export default GZDropdownList