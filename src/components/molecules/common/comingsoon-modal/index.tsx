import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";

type Props = {
    message?: string | JSX.Element;
    onDismiss?: () => void;
}
const GZComingsoonModal = ({
    message = `"We're working on adding this feature. Stay tuned for updates!"`,
    onDismiss
}: Props) => {
    return <Modal size="xs" isOpen={true} onClose={onDismiss!} isCentered>
        <ModalOverlay />
        <ModalContent
            background="#1B2332"
            border="1px solid rgba(78, 95, 131, 0.7)"
            borderRadius="8px"
        >
            <ModalCloseButton />
            <ModalBody
                padding="32px 12px"
                fontWeight="500"
                fontSize="14px"
                lineHeight="20px"
                textAlign="center"
                letterSpacing="-0.24 px"
            >
                <Flex mb="16px" justifyContent="center">
                    <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_515_29323)">
                            <path d="M32.3487 1.58125C32.8443 1.08022 33.4328 0.682668 34.0808 0.411339C34.7288 0.140011 35.4234 0.000231753 36.125 0L78.875 0C80.2929 0 81.6466 0.567812 82.6512 1.58125L112.932 32.1281C113.937 33.1344 114.5 34.5072 114.5 35.9375V79.0625C114.5 79.7702 114.361 80.471 114.092 81.1246C113.823 81.7783 113.429 82.372 112.932 82.8719L82.6512 113.419C82.1557 113.92 81.5672 114.317 80.9192 114.589C80.2712 114.86 79.5766 115 78.875 115H36.125C35.4234 115 34.7288 114.86 34.0808 114.589C33.4328 114.317 32.8443 113.92 32.3487 113.419L2.0675 82.8719C1.57083 82.372 1.17673 81.7783 0.907762 81.1246C0.638793 80.471 0.50023 79.7702 0.5 79.0625L0.5 35.9375C0.5 34.5072 1.06287 33.1416 2.0675 32.1281L32.3487 1.58125ZM38.3337 10.7812L11.1875 38.1656V76.8344L38.3337 104.219H76.6662L103.812 76.8344V38.1656L76.6662 10.7812H38.3337ZM57.5 28.75C58.9173 28.75 60.2765 29.3179 61.2786 30.3289C62.2807 31.3398 62.8438 32.7109 62.8438 34.1406V59.2969C62.8438 60.7266 62.2807 62.0977 61.2786 63.1086C60.2765 64.1196 58.9173 64.6875 57.5 64.6875C56.0827 64.6875 54.7235 64.1196 53.7214 63.1086C52.7192 62.0977 52.1562 60.7266 52.1562 59.2969V34.1406C52.1562 32.7109 52.7192 31.3398 53.7214 30.3289C54.7235 29.3179 56.0827 28.75 57.5 28.75ZM57.5 86.25C55.6103 86.25 53.7981 85.4927 52.4619 84.1448C51.1257 82.7969 50.375 80.9687 50.375 79.0625C50.375 77.1563 51.1257 75.3281 52.4619 73.9802C53.7981 72.6323 55.6103 71.875 57.5 71.875C59.3897 71.875 61.2019 72.6323 62.5381 73.9802C63.8743 75.3281 64.625 77.1563 64.625 79.0625C64.625 80.9687 63.8743 82.7969 62.5381 84.1448C61.2019 85.4927 59.3897 86.25 57.5 86.25Z" fill="#FF455C" />
                        </g>
                        <defs>
                            <clipPath id="clip0_515_29323">
                                <rect width="114" height="115" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </Flex>
                {message}
            </ModalBody>
        </ModalContent>
    </Modal>
}
export default GZComingsoonModal;