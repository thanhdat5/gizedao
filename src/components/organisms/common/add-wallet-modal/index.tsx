import { Button, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import { IWalletConfig, IWalletNetwork } from "../../../../types/wallet";
import GZFieldGroup from "../../../molecules/common/field-group";
import GZNetworkItem from "../../../molecules/common/network-item";

type Props = {
    title: string;
    networks: IWalletNetwork[];
    configInitial: IWalletConfig;
    configSchema: any;
    onSubmit: (data: IWalletConfig) => void;
    onDismiss: () => void;
}


const GZAddWalletModal = ({
    title,
    networks,
    configInitial,
    configSchema,
    onSubmit,
    onDismiss
}: Props) => {
    const CustomFieldNetwork = ({ field, form }: any) => {
        const selectedNetwork = networks.find(x => x.name === field.value);

        return <Menu>
            <MenuButton
                w="100%"
                backgroundColor="transparent"
                p="0"
                border="1px solid rgba(78, 95, 131, 0.7)"
                h="32px"
                as={Button}
                overflow="hidden"
                _hover={
                    {
                        borderColor: 'rgba(78, 95, 131, 0.7)',
                    }
                }
                _active={
                    {
                        backgroundColor: '#242E42',
                        borderColor: 'rgba(78, 95, 131, 0.7)',
                        boxShadow: '0 0 0 1px #63b3ed'
                    }
                }
            >
                <GZNetworkItem
                    selected
                    name={selectedNetwork ? selectedNetwork.name : 'All networks'}
                    image={selectedNetwork ? selectedNetwork.image : ''}
                    rightIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12.8334L5 7.83341L6.16667 6.66675L10 10.5001L13.8333 6.66675L15 7.83341L10 12.8334Z" fill="#BFCFE8" />
                    </svg>}
                />
            </MenuButton>
            <MenuList
                w="346px"
                border="0"
                p="0"
                borderRadius="5px"
                overflow="hidden"
            >
                <MenuItem
                    p="0"
                    onClick={() => form.setFieldValue(field.name, '')}
                >
                    <GZNetworkItem name="All networks" selected={!field.value} />
                </MenuItem>
                {
                    networks.map((n, idx) => (
                        <MenuItem
                            key={idx}
                            p="0"
                            onClick={() => form.setFieldValue(field.name, n.name)}
                        >
                            <GZNetworkItem
                                image={n.image}
                                name={n.name}
                                selected={field.value === n.name}
                            />
                        </MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    };
    const CustomFieldName = ({ field, form }: any) => (
        <StyledSelect
            placeholder="e.g. Balancer ESSDAO 1"
            value={field.value}
            onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
        />
    );
    const CustomFieldAddress = ({ field, form }: any) => (
        <StyledInput
            type="text"
            placeholder="e.g. 0xd0023023010302032103120"
            value={field.value}
            onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
        />
    );
    return <Modal size="sm" isOpen={true} onClose={onDismiss} isCentered>
        <ModalOverlay />
        <Formik
            initialValues={configInitial}
            validationSchema={configSchema}
            onSubmit={(values, action) => onSubmit(values)}
        >
            {({ errors, touched }) => (
                <Form>
                    <ModalContent
                        background="#1B2332"
                        border="1px solid rgba(78, 95, 131, 0.7)"
                        borderRadius="10px"
                    >
                        <ModalHeader p="16px 18px">
                            <Text
                                mb="0"
                                fontWeight="500"
                                fontSize="16px"
                                lineHeight="150%"
                                textAlign="center"
                                color="#FFFFFF"
                            >
                                {title}
                            </Text>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p="4px 18px 44px">
                            <GZFieldGroup
                                size="sm"
                                mb="10px"
                                name="network"
                                label="Network"
                                invalid={errors.network && touched.network}
                                errorMessage={errors.network}
                                component={CustomFieldNetwork}
                            />
                            <GZFieldGroup
                                size="sm"
                                mb="10px"
                                name="name"
                                label="Name"
                                invalid={errors.name && touched.name}
                                errorMessage={errors.name}
                                component={CustomFieldName}
                            />
                            <GZFieldGroup
                                size="sm"
                                mb="0"
                                name="address"
                                label="Contract Address"
                                invalid={errors.address && touched.address}
                                errorMessage={errors.address}
                                component={CustomFieldAddress}
                            />

                        </ModalBody>
                        <ModalFooter p="18px" borderTop="1px #4E5F83 solid">
                            <Button w="100%" size="md" h="36px" colorScheme="green" color="#222222" type="submit">
                                Save
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Form>
            )}
        </Formik>
    </Modal>
}
export default GZAddWalletModal
const StyledInput = styled(Input)`
  background: transparent !important;
  border: 1px solid rgba(78, 95, 131, 0.7) !important;
  padding-top: 6px !important;
  padding-bottom: 6px !important;
  padding-right: 14px !important;
  line-height: 140% !important;
  font-size: 14px !important;
  height: 32px !important;
  &::placeholder {
    color: #94a7c699 !important;
  }
`;
const StyledSelect = styled(Select)`
  background: transparent !important;
  border: 1px solid rgba(78, 95, 131, 0.7) !important;
  border-radius: 5px !important;
  padding: 6px 14px !important;
  font-weight: 400;
  line-height: 140% !important;
  font-size: 14px !important;
  height: 32px !important;
  // color:#fff !important;
`;
