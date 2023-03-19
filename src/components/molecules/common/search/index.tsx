import { Box, Input } from "@chakra-ui/react";
import { FormEvent, useState } from 'react';
import GZIconSearch from "../../../atoms/icons/Search";

type GZSearchProps = {
    w?: string;
    maxW?: string;
    placeholder?: string;
    value?: string;
    onValueChange?: (newValue: string | number) => void;
    onSearch?: (newValue: string | number) => void;
}
const GZSearch = ({ placeholder, value, w = '250px', maxW = '100%', onSearch }: GZSearchProps) => {
    const [keyword, setKeyword] = useState<string>(value || '');

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (onSearch)
            onSearch!(keyword);
    }

    return <form onSubmit={handleSearch}>
        <Box position='relative' w={w} maxW={maxW}>
            <Box position='absolute' top='50%' transform='translateY(-50%)' left='10px' w='20px' h='20px' zIndex={2}>
                <GZIconSearch />
            </Box>
            <Input
                border={0}
                w="100%"
                size="sm"
                pl="40px"
                type="search"
                placeholder={placeholder}
                value={keyword}
                onChange={(e) => setKeyword!(e.target.value)}
            />
        </Box>
    </form>
}
export default GZSearch