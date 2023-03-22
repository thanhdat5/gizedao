import {
  Box,
  Button, Stack
} from '@chakra-ui/react';
import { useState } from 'react';
import styled from 'styled-components';
import GZWhiteTick from '../../../atoms/icons/White-Tick';

type GZGroupRadioProps = {
	options: string[];
  labelButton: string;
};

const GZGroupRadio = ({ options, labelButton }: GZGroupRadioProps) => {
	const [selectedOption, setSelectedOption] = useState<string>();

	return (
    <Box>
			<Stack mb="30px">
				{options.map((option: string) => (
					<Box display="flex" gap="10px" alignItems="center" key={option}>
						<StyledCircle opacity={selectedOption !== option && "0.6" }/>
						<StyledRadio onClick={() => setSelectedOption(option)}>
							{option}
							{selectedOption === option && <GZWhiteTick />}
						</StyledRadio>
					</Box>
				))}
				 
			</Stack>
      <Box width="100%" textAlign="end">
      <Button width="auto" color="#222222" fontWeight="600" padding="6px 32px">
					{labelButton}
				</Button>
      </Box>
    </Box>
	);
};

export default GZGroupRadio;

const StyledCircle = styled(Box)`
	width: 20px;
	height: 20px;
	background: #94a7c6;
	border-radius: 50%;
`;

const StyledRadio = styled(Box)`
	width: 100%;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #4e5f83b2;
	border-radius: 10px;
	color: '#fff';
	font-weight: 400;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;
