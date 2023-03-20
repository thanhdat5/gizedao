import {
    Box,
    Button,
    Card, Center,
    Flex,
    Input, Text
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import GZIconStars from "components/atoms/icons/Stars";
import GZFieldGroup from "components/molecules/common/field-group";

type Props = {
    placeholder?: string;
    isCreate?: boolean;
    errorMessage?: string;
    icon?:JSX.Element,
    onSubmit: (text: string) => void;
    onDismiss?: () => void;
};

const GZCardProfile = ({
    placeholder = "Google form, Typeform, landing page etc.",
    isCreate = false,
    errorMessage,
    onSubmit,
    onDismiss
}: Props) => {
    const FormSchema = Yup.object().shape({
        text: Yup.string()
            .required('Required')
    });
    const CustomFieldText = ({ field, form }: any) => (
        <Input
            value={field.value}
            placeholder={placeholder}
            size="sm"
            width="340px"
            _dark={
                {
                    borderColor: errorMessage ? '#F04438' : '#4E5F83'
                }
            }
            onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
        />
    )
    return (
             <Formik
                initialValues={{ text: '' }}
                validationSchema={FormSchema}
                onSubmit={(values, action) => onSubmit(values.text)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Card mb="20px">
                            <Center mt='35px'>
                                <GZIconStars />
                            </Center>
                            {/* <ModalCloseButton /> */}
                            <Box textAlign="center">       
                                    <Text fontSize="24px" fontWeight="700" mb="12px" mt="24px">
                                        Your DAO is created
                                    </Text>
                                    <Text mb="20px" fontSize='15px' fontWeight='400'>
                                     Add application link, where people can apply to join your DAO. <br />
                                     You can set up or change it later in Settings.
                                    </Text>
                                <Flex justifyContent="center" gap="12px" mb="32px">
                                 <GZFieldGroup
                                        name="text"
                                        component={CustomFieldText}
                                        invalid={(errors.text && touched.text) || errorMessage} errorMessage={errors.text || errorMessage}
                                     />
                                    <Button color="#222222" type="submit">
                                        {isCreate ? 'Copy' : 'Add apply link'}
                                    </Button>
                                 </Flex>
                            </Box>
                        </Card>
                    </Form>
                )}
            </Formik>
    );
};

export default GZCardProfile;
