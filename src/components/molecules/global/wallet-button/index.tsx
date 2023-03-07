import { Button } from "@chakra-ui/react"
import { useState, useEffect } from 'react';

type GZWalletButtonProps = {
    label: string;
    onClick: () => void;
}
const GZWalletButton = ({ label, onClick }: GZWalletButtonProps) => {
    const [walletAddress, setWalletAddress] = useState('');
    useEffect(() => {
        const rs = label?.length > 10 ? `${label.substring(0, 6)}...${label.substring(label.length - 4, label.length)}` : '';
        setWalletAddress(rs);
    }, [label])

    return <Button w="144px" type="button" color="#0E1420" onClick={onClick}>{walletAddress}</Button>
}
export default GZWalletButton;