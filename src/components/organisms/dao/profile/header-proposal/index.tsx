import { Box, Button, Flex, Select, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const GZHeaderProposal = () => {
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
                    <Select defaultValue='All' size="md">
                        <option value='All'>All</option>
                        <option value='option2'>Active</option>
                        <option value='option3'>Closed</option>
                    </Select>
                </Box>
                <Box>
                    <StyledButton>
                        <StyledTextButton>
                            Add Proposal
                        </StyledTextButton>
                    </StyledButton>
                </Box>
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