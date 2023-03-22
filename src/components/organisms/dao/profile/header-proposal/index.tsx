import { Box, Button, Flex, Select, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

type GZHeaderProposalProps = {
    isAdd?: boolean;
    onChangeOption?: any
}

const GZHeaderProposal = ({isAdd = true, onChangeOption}: GZHeaderProposalProps) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
        <Box>
            <StyledText>
                Proposals
            </StyledText>
        </Box>
        <Box>
           <Flex gap="30px" alignItems="center">
                <Box>
                    <Select defaultValue='All' size="md" onChange={(e) => onChangeOption(e.target.value)}>
                        <option value='all'>All</option>
                        <option value='active'>Active</option>
                        <option value='closed'>Closed</option>
                    </Select>
                </Box>
                {isAdd && (
                <Box>
                    <StyledButton>
                        <StyledTextButton>
                            Add Proposal
                        </StyledTextButton>
                    </StyledButton>
                </Box>
                )}
           </Flex>
        </Box>
    </Flex>
  )
}

export default GZHeaderProposal

const StyledText = styled(Text)`
    font-size: 24px;
    font-weight:400;
    color : #fff;
`
const StyledTextButton = styled(Text)`
    color:#BFCFE8;
`
const StyledButton = styled(Button)`
    background:none!important;
    border:1px solid #4E5F83;
`