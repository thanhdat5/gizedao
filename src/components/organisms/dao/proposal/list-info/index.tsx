import { Box, Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import GZItemInfo from 'components/atoms/icons/icon-information';
import { useEffect } from 'react';
import styled from 'styled-components';

type GZInfoProps = {
	type: 'information' | 'result';
	data: any;
};

const GZInfo = ({ type, data }: GZInfoProps) => {
	useEffect(() => {
		if (type === 'result') {
			// calculate percent
		}
	}, [type]);

	return (
		<StyledCard>
			<StyledCardHeader>
				<Text color="#fff" fontWeight="600" fontSize="16px">
					{type === 'information' ? 'Information' : 'Current results'}
				</Text>
			</StyledCardHeader>
			<CardBody p="10px 30px" fontSize="15px" fontWeight="400" color="#BFCFE8">
				{type === 'information' && data ? (
					Object.keys(data).map((key, index) => (
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							mb="8px"
							key={key}
						>
							<StyledText>{key}</StyledText>
							<Box display="flex" alignItems="center" gap="5px">
								<StyledText>{data[key]}</StyledText>
								{(key == 'ipfs' || key == 'snapshot') && (
									<Box transition="all 0.2s" _hover={{opacity: 0.8, cursor: 'pointer'}}>
										<GZItemInfo />	
									</Box>
								)}
							</Box>
						</Box>
					))
				) : (
					<>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							mb="6px"
						>
							<Text fontWeight="400" color="#BFCFE8">
								Yes! add the option...
							</Text>
							<Box display="flex" alignItems="center">
								<StyledText mr="4px">100k</StyledText>
								<StyledText mr="11px">ESS</StyledText>
								<StyledText>100%</StyledText>
							</Box>
						</Box>
						<StyledBoxPercent percent={100} mb="24px" />

						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							mb="6px"
						>
							<Text fontWeight="400" color="#BFCFE8">
								No
							</Text>
							<Box display="flex" alignItems="center">
								<StyledText mr="4px">30k</StyledText>
								<StyledText mr="11px">ESS</StyledText>
								<StyledText>30%</StyledText>
							</Box>
						</Box>

						<StyledBoxPercent percent={30} />
					</>
				)}
			</CardBody>
		</StyledCard>
	);
};

export default GZInfo;

const StyledCard = styled(Card)`
	border: 1px solid rgba(78, 95, 131, 0.7) !important;
	margin-bottom: 20px;
	border-radius: 10px !important;
	box-shadow: 0px 4px 4px rgba(191, 207, 232, 0.04) !important;
	transition: all 0.2s;
	background-color: #1b2332 !important;
`;

const StyledCardHeader = styled(CardHeader)`
	font-size: 16px;
	font-weight: 600;
	color: '#fff';
	background: '#242E42';
	padding: 16px 20px;
	border-bottom: 1px solid rgba(78, 95, 131, 0.7) !important;
`;

const StyledText = styled(Text)`
	font-size: 14px;
	font-weight: 400;
	color: '#bfcfe8b2';
	text-transform: capitalize;
	display: inline;
`;

const StyledBoxPercent = styled(Box)`
	width: 100%;
	background-color: #242e42b2;
	height: 6px;
	border-radius: 100px;
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		width: ${props => `${props.percent}%`};
		height: 6px;
		background-color: #7986ed;
		position: absolute;
		top: 0;
		left: 0;
	}
`;
