import {
	Avatar,
	AvatarGroup,
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Tag,
	Text
} from '@chakra-ui/react';
import GZIconActive from 'components/atoms/icons/Active';
import GZIconClosed from 'components/atoms/icons/Closed';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GZAvatarImage from '../avatar';
type GZProposalProps = {
	item: any;
	isDetail?: boolean;
};

const GZProposalCore = ({ item, isDetail = false }: GZProposalProps) => {
	const navigate = useNavigate();
	return (
		<StyledCard
			key={item?.id}
			onClick={() => (isDetail ? {} : navigate(`/proposal/${item?.id}`))}
			detail={isDetail}
		>
			<CardHeader p="30px">
				<Flex alignItems="center" justifyContent="space-between">
					<Flex alignItems="center" gap="20px">
						<GZAvatarImage size="30" src={item?.avatar} />
						<Text>{item?.name}</Text>
						<Tag size="lg" color="#fff" backgroundColor="#0075FF">
							{item?.tag}
						</Tag>
					</Flex>
					<Flex alignItems="center" gap="10px">
						<Box>
							{item?.status === 'Active' ? <GZIconActive /> : <GZIconClosed />}
						</Box>
						<Box color={item?.status === 'Active' ? '#00B900' : '#94A7C6'}>
							{item?.status}
						</Box>
					</Flex>
				</Flex>
			</CardHeader>
			<CardBody p="0 30px">
				<Text mb="24px" fontSize="20px" fontWeight="600">
					{item?.title}
				</Text>
				<Text fontSize="14px" fontWeight="400" color="#94A7C6">
					{item?.content}
				</Text>
			</CardBody>
			<CardFooter justifyContent="space-between" alignItems="center" p="30px">
				<Box display={isDetail ? 'flex' : 'block'} alignItems="center">
					{isDetail && (
						<>
							<AvatarGroup size="sm" max={2} mr="12px">
								{item?.votes?.map((userVote: any) => (
									<Avatar
										name={userVote.name}
										src={userVote.avatar}
										key={userVote.name}
									/>
								))}
							</AvatarGroup>

							<Text color="#94A7C6" mr="22px">
								Total Votes: {item?.votes?.length}
							</Text>
						</>
					)}

					<Text color="#94A7C6">{item?.time}</Text>
				</Box>
				{!isDetail ? (
					<Box border="1px solid #4E5F83" borderRadius="5px" p="10px 14px">
						<Text>Total Vote: {item?.totalVote}</Text>
					</Box>
				) : (
					<></>
				)}
			</CardFooter>
		</StyledCard>
	);
};

export default GZProposalCore;

const StyledCard = styled(Card)`
	border: 1px solid rgba(78, 95, 131, 0.7) !important;
	margin-bottom: 20px;
	border-radius: 10px !important;
	box-shadow: 0px 4px 4px rgba(191, 207, 232, 0.04) !important;
	transition: all 0.2s;
	background: ${props => props.detail && `#1B2332 !important`};

	${props =>
		!props.detail &&
		`&:hover {
		cursor: pointer;
		opacity: 0.8;
	} `};
`;
