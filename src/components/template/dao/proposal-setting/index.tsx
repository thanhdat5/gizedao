import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    Text,
    Textarea,
  } from "@chakra-ui/react";
  import { Form, Formik } from "formik";
  import styled from "styled-components";
  import GZIconSocialWebsite from "components/atoms/icons/SocialWebsite";
  import GZCoverImageControl from "components/molecules/common/cover-control";
  import GZFieldGroup from "components/molecules/common/field-group";
import { IProposalSettingModel } from "types/proposal";
import {useState,useCallback} from "react"
import GZIconAdd from "components/atoms/icons/Add";
  type Props = {
    types?: any[];
    initialValues: IProposalSettingModel;
    validationSchema: any;
    onBack: () => void;
    onPreview: () => void;
    onSubmit: (values: any) => void;
  };
  
  const GZProposalSetting = ({
    types = [],
    initialValues,
    validationSchema,
    onBack,
    onPreview,
    onSubmit,
  }: Props) => {
  
   
        const [inputs,setInputs] = useState<string[]>([])
        const addInput = () => {
          setInputs([...inputs, ""])
        }
      // const addInput = useCallback(() => {
      //   setInputs([...inputs, ""])
      // },[inputs])
    const CustomFieldCover = ({ field, form }: any) => (
      <GZCoverImageControl  text="Upload image" image={field.value} onChange={() => {}} />
    );
    const CustomFieldTitle = ({ field, form }: any) => (
      <StyledInput
        pl="14px"
        type="text"
        placeholder="Name of your organization"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    );
   
  
    const CustomFieldDescription = ({ field, form }: any) => (
      <StyledTextarea
        placeholder="Your proposal description"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    );
  
    const CustomFieldType = ({ field, form }: any) => (
      <StyledSelect
        placeholder="Single choice voting"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      >
        {types.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    );
        
    const CustomFieldStart = ({ field, form }: any) => (
      <InputGroup>
        <InputLeftElement children={<GZIconSocialWebsite />} />
        <StyledInput
          placeholder="e.g.https://espstarter.com"
          value={field.value}
          onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
        />
      </InputGroup>
    );
    const CustomFieldEnd = ({ field, form }: any) => (
      <InputGroup>
        <InputLeftElement children={<GZIconSocialWebsite />} />
        <StyledInput
          placeholder="e.g.https://espstarter.com"
          value={field.value}
          onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
        />
      </InputGroup>
    );
    const CustomFieldDiscussion = ({ field, form }: any) => (
        <InputGroup>
          <InputLeftElement children={<GZIconSocialWebsite />} />
          <StyledInput
            pl="44px"
            placeholder="https://app.blockchaindev.com/"
            value={field.value}
            onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
          />
        </InputGroup>
      );
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, action) => onSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Box w="800px" maxW="100%" margin="auto">
              <StyledBox>
                <StyledTitle>
                     Proposal settings
                </StyledTitle>
                <Box p="24px">
                <GZFieldGroup
                    name="title"
                    label="Title *"
                    invalid={errors.title && touched.title}
                    errorMessage={errors.title}
                    component={CustomFieldTitle}
                  />
                   <GZFieldGroup
                    name="description"
                    label="Description"
                    invalid={errors.description && touched.description}
                    component={CustomFieldDescription}
                  />
                  <GZFieldGroup
                    name="cover"
                    invalid={errors.cover && touched.cover}
                    errorMessage={errors.cover}
                    component={CustomFieldCover}
                  />
                  <GZFieldGroup
                    name="discussion"
                    label="Discussion"
                    sublabel="(optional)"
                    invalid={errors.discussion && touched.discussion}
                    errorMessage={errors.discussion}
                    component={CustomFieldDiscussion}
                   />
                </Box>
              </StyledBox>
                <StyledBox>
                    <StyledTitle>
                        Voting
                    </StyledTitle>
                      <Box p="24px">
                        <GZFieldGroup
                            name="type"
                            label="Type"
                            invalid={errors.type && touched.type}
                            component={CustomFieldType}
                        />
                    </Box>
                    <Box p="24px">
                      <Text fontSize="16px" fontWeight="500" color="#BFCFE8" lineHeight="24px">
                        Choices
                      </Text>
                      {inputs.map((item,idx) => (
                        <InputGroup key={idx}>
                          <InputLeftElement children={<GZIconSocialWebsite />} />
                           <Input mb="10px" value={item}  onChange = {(e) => {
                            const newInputs = [...inputs]
                              newInputs[idx] = e.target.value
                              setInputs(newInputs)
                           }} />
                       </InputGroup>
                      ))}
                      <Center mb="24px" mt="20px">
                        <StyledButtonAdd onClick={addInput} >
                          <GZIconAdd />
                        </StyledButtonAdd>
                      </Center>
                    </Box>
                    

                </StyledBox>
                <StyledBox
                >
                    <StyledTitle>
                        Date
                    </StyledTitle>
                    <Flex p="24px" gap="24px">
                        <Box flexBasis="50%">
                          <GZFieldGroup
                              name="start"
                              label="Start"
                              invalid={errors.start && touched.start}
                              component={CustomFieldStart}
                          />
                        </Box>
                        <Box flexBasis="50%">
                          <GZFieldGroup
                              name="end"
                              label="End"
                              invalid={errors.end && touched.end}
                              component={CustomFieldEnd}
                          />
                        </Box>
                    </Flex>
                </StyledBox>
              <Flex alignItems="center" justifyContent="flex-end">
                <StyledButton
                  onClick={onBack}
                  type="button"
                  variant="ghost"
                  colorScheme="gray"
                >
                  Back
                </StyledButton>
                <StyledButton
                    onClick={onPreview}
                    type="button"
                    variant="ghost"
                    colorScheme="gray"
                    >
                         Preview
                    </StyledButton>
                <Button p="4px 24px" ml="5px" type="submit">
                    Publish
                </Button>
              </Flex>
            </Box>
          </Form>
        )}
      </Formik>
    );
  };
  
  export default GZProposalSetting;
  const StyledBox = styled(Box)`
    background: #1B2332;
    border : 1px solid rgba(78, 95, 131, 0.6);
    margin-bottom: 24px;
    border-radius: 10px;
  `
  
  const StyledButton = styled(Button)`
    background: #1B2332;
    padding: 4px 24px!important;
    margin: 0 5px;
  `
  const StyledTitle = styled(Text)`
    padding: 16px 24px;
    font-size: 16px;
    color:#BFCFE8;
    font-weight: 600;
    border-bottom: 1px solid rgba(78, 95, 131, 0.6);
    background: #242E42;
    line-height: 150%;
    width: 100%;
    letter-spacing: 0.02em;
  `
  const StyledInput = styled(Input)`
    background: #242e42 !important;
    border: 1px solid rgba(78, 95, 131, 0.7) !important;
    padding-top: 9px !important;
    padding-bottom: 9px !important;
    padding-right: 14px !important;
    line-height: 150% !important;
    width: 100%;
    height: 42px !important;
    &::placeholder {
      color: #94a7c699 !important;
    }
  `;
  const StyledTextarea = styled(Textarea)`
    background: #242e42 !important;
    border: 1px solid rgba(78, 95, 131, 0.7) !important;
    padding: 9px 14px !important;
    line-height: 150% !important;
    height: 198px!important;
    &::placeholder {
      color: #94a7c699 !important;
    }
  `;
  const StyledButtonAdd = styled(Button)`
  cursor: pointer;
  padding: 8px!important;
  background: #181C2C!important;
  border-radius: 50%!important;
  border: 1px solid #4E5F83!important;
  `;
  const StyledSelect = styled(Select)`
    background: #242e42 !important;
    border: 1px solid rgba(78, 95, 131, 0.7) !important;
    border-radius: 5px !important;
    padding: 9px 14px !important;
    font-weight: 400;
    line-height: 150% !important;
    height: 42px !important;
    // color:#fff !important;
  `;
  