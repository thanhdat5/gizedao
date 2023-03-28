import { Box, Input } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import GZSelect from '../../../atoms/form-element/select';
import GZIconSearch from '../../../atoms/icons/Search';

type GZSelectLabelProps = {
	label?: string;
	maxW?: string;
	placeholder?: string;
	listOptions: string[];
	value?: string;
	selectStyle?: string;
	selectWidth?: string;
	fontSize?: number;
	onValueChange?: (newValue: string | number) => void;
};
const GZSelectLabel = ({
	placeholder,
	value,
	listOptions,
	label,
	selectStyle,
	selectWidth,
	fontSize,
	onValueChange
}: GZSelectLabelProps) => {
	const [keyword, setKeyword] = useState<string>(value || '');

	//   const handleSearch = (e: FormEvent<HTMLFormElement>) => {
	//     e.preventDefault();
	//     e.stopPropagation();
	//     if (onSearch) onSearch!(keyword);
	//   };

	return (
		<>
			<span>{label}</span>
			<GZSelect
				listOptions={listOptions}
				selectStyle={selectStyle}
				selectWidth={selectWidth}
				fontSize={fontSize}
			/>
		</>
	);
};
export default GZSelectLabel;
