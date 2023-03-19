import {
    IconButton,
    IconButtonProps, useColorMode,
    useColorModeValue
} from "@chakra-ui/react"
import * as React from "react"
import { FaToggleOff, FaToggleOn } from "react-icons/fa"

type GZColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const GZColorModeSwitcher: React.FC<GZColorModeSwitcherProps> = (props) => {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaToggleOn, FaToggleOff)

    return (
        <IconButton
            zIndex={2}
            p="0"
            h="auto"
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
            {...props}
        />
    )
}
