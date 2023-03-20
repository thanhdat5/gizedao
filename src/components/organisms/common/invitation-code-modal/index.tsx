import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import GZFieldGroup from "components/molecules/common/field-group";

type Props = {
    label?: string;
    placeholder?: string;
    buttonText?: string;
    errorMessage?: string;
    onSubmit: (code: string) => void;
    onDismiss: () => void;
};

const GZInvitationCodeModal = ({
    label = "Invitation Code",
    placeholder = "Enter invitation code (Optional)",
    buttonText = "Continue",
    errorMessage,
    onSubmit,
    onDismiss
}: Props) => {
    const FormSchema = Yup.object().shape({
        code: Yup.string()
            .required('Required')
    });
    const CustomFieldCode = ({ field, form }: any) => (
        <Input
            value={field.value}
            placeholder={placeholder}
            size="sm"
            _dark={
                {
                    borderColor: errorMessage ? '#F04438' : '#4E5F83'
                }
            }
            onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
        />
    )
    return (
        <Modal isOpen={true} onClose={onDismiss} isCentered>
            <ModalOverlay />
            <Formik
                initialValues={{ code: '' }}
                validationSchema={FormSchema}
                onSubmit={(values, action) => onSubmit(values.code)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <ModalContent>
                            <ModalHeader
                                p="22px"
                                fontSize="24px"
                                lineHeight="29px"
                                fontWeight="600"
                                letterSpacing="0.36px"
                                color="#fff"

                            >
                                {label}
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody p="2px 22px 22px">
                                <GZFieldGroup
                                    name="code"
                                    component={CustomFieldCode}
                                    invalid={(errors.code && touched.code) || errorMessage} errorMessage={errors.code || errorMessage}
                                />
                                <Button w="100%" color="#222222" type="submit">
                                    {buttonText}
                                </Button>
                            </ModalBody>
                        </ModalContent>
                    </Form>
                )}
            </Formik>

        </Modal>
    );
};

export default GZInvitationCodeModal;
