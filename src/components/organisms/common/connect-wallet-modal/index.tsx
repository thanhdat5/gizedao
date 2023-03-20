import {
    Box, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalHeader,
    ModalOverlay,
    Text
} from "@chakra-ui/react";
import { IWallet } from "types/wallet";
import GZWalletCard from "components/molecules/common/wallet-card";

type Props = {
    wallets?: IWallet[];
    onClick: (item: any) => void;
    onAddAnother: () => void;
    onDismiss: () => void;
};

const GZConnectWalletModal = ({
    wallets = [],
    onClick,
    onAddAnother,
    onDismiss
}: Props) => {
    return (
        <Modal size="xl" isOpen={true} onClose={onDismiss} isCentered>
            <ModalOverlay />
            <ModalContent
                background="#1B2332"
                borderRadius="10px"
            >
                <ModalHeader p="20px 20px 14px">
                    <Text
                        mb="4px"
                        fontWeight="700"
                        fontSize="36px"
                        lineHeight="44px"
                        letterSpacing="0.36px"
                        color="#FFFFFF"
                    >
                        Connect your wallet
                    </Text>
                    <Text
                        mb="0"
                        fontWeight="400"
                        fontSize="15px"
                        lineHeight="24px"
                        letterSpacing="-0.24px"
                        color="#94A7C6"
                    >
                        You can connect an existing M-Safe, Gnosis Safe or add any other wallet manually
                    </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p="0 10px 12px">
                    <Box
                        pb="14px"
                        borderBottom="1px #4E5F83 solid"
                        mb="6px"
                    >
                        {
                            wallets.map((item, idx) => (
                                <GZWalletCard
                                    key={idx}
                                    image={item.image}
                                    title={item.address}
                                    description={item.description}
                                    onClick={() => onClick(item)}
                                />
                            ))
                        }
                    </Box>
                    <GZWalletCard
                        isAddButton
                        title="Add another wallet"
                        description="Enter the address of your wallet to connect it"
                        onClick={onAddAnother}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default GZConnectWalletModal;
