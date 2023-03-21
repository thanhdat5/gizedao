import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react";
import GZDropdownList from "components/molecules/common/dropdown-list";
import GZFieldGroup from "components/molecules/common/field-group";
import { Form, Formik } from "formik";
import styled from "styled-components";
import { IWalletConfig, IWalletNetwork } from "types/wallet";

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
        return <GZDropdownList
            value={selectedNetwork ? {
                icon: selectedNetwork.image,
                value: selectedNetwork.name,
                label: selectedNetwork.name
            } : undefined}
            options={networks.map(n => ({
                icon: n.image,
                value: n.name,
                label: n.name
            }))}
            onMenuClick={(opt) => form.setFieldValue(field.name, opt ? opt.value : '')}
            optionAllText="All networks"
        />
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
