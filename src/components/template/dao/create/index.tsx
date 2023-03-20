import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import { ICreateDaoModel } from "../../../../types/dao";
import GZIconDiscord from "../../../atoms/icons/Discord";
import GZIconGithub from "../../../atoms/icons/Github";
import GZIconInstagram from "../../../atoms/icons/Instagram";
import GZIconSocialWebsite from "../../../atoms/icons/SocialWebsite";
import GZIconTelegram from "../../../atoms/icons/Telegram";
import GZIconTwitter from "../../../atoms/icons/Twitter";
import GZAvatarControl from "../../../molecules/common/avatar-control";
import GZCoverImageControl from "../../../molecules/common/cover-control";
import GZFieldGroup from "../../../molecules/common/field-group";

type Props = {
  chains?: any[];
  categories?: any[];
  initialValues: ICreateDaoModel;
  validationSchema: any;
  onBack: () => void;
  onSubmit: (values: any) => void;
};

const GZCreateDAO = ({
  chains = [],
  categories = [],
  initialValues,
  validationSchema,
  onBack,
  onSubmit,
}: Props) => {
  const CustomFieldAvatar = ({ field, form }: any) => (
    <GZAvatarControl image={field.value} onChange={() => {}} />
  );

  const CustomFieldCover = ({ field, form }: any) => (
    <GZCoverImageControl image={field.value} onChange={() => {}} />
  );

  const CustomFieldChain = ({ field, form }: any) => (
    <StyledSelect
      placeholder="Choose your network"
      value={field.value}
      onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
    >
      {chains.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );

  const CustomFieldName = ({ field, form }: any) => (
    <StyledInput
      pl="14px"
      type="text"
      placeholder="Name of your organization"
      value={field.value}
      onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
    />
  );

  const CustomFieldAbout = ({ field, form }: any) => (
    <StyledTextarea
      placeholder="What is your organization about?"
      value={field.value}
      onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
    />
  );

  const CustomFieldCategory = ({ field, form }: any) => (
    <StyledSelect
      placeholder="Choose your category"
      value={field.value}
      onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
    >
      {categories.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );

  const CustomFieldWebsite = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconSocialWebsite />} />
      <StyledInput
        pl="44px"
        placeholder="e.g.https://espstarter.com"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldPublicUrl = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement
        color="#fff"
        pl="14px"
        w="auto"
        children="https://app.espstarter.com/dao/"
      />
      <StyledInput
        pl="272px"
        placeholder="Enter your public URL"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldTwitter = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconTwitter />} />
      <StyledInput
        placeholder="Enter your Twitter link"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldDiscord = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconDiscord />} />
      <StyledInput
        placeholder="Enter your Discord link"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldGithub = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconGithub />} />
      <StyledInput
        placeholder="Enter your Github link"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldTelegram = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconTelegram />} />
      <StyledInput
        placeholder="Enter your Telegram link"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldInstagram = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconInstagram />} />
      <StyledInput
        placeholder="Enter your Instagram link"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldHideHomepage = ({ field, form }: any) => (
    <FormControl display="flex" alignItems="center" py="6px">
      <Switch
        id="email-alerts"
        marginRight="10px"
        colorScheme="green"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.checked)}
      />
      <FormLabel
        htmlFor="email-alerts"
        mb="0"
        fontWeight="400"
        fontSize="16px"
        lineHeight="150%"
        letterSpacing="0.02em"
        color="#BFCFE8"
      >
        Hide space from homepage
      </FormLabel>
    </FormControl>
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
            <Box
              background="#1B2332"
              borderRadius="10px"
              border="1px solid rgba(78, 95, 131, 0.6)"
              mb="24px"
            >
              <Text
                w="100%"
                p="16px 24px"
                background="#242E42"
                borderBottom="1px solid rgba(78, 95, 131, 0.6)"
                fontSize="16px"
                fontWeight="600"
                lineHeight="150%"
                letterSpacing="0.02em"
                color="#BFCFE8"
              >
                Profile
              </Text>
              <Box p="24px">
                <GZFieldGroup
                  name="avatar"
                  label="Avatar"
                  component={CustomFieldAvatar}
                />

                <GZFieldGroup
                  name="cover"
                  label="Cover image * (1208x380)"
                  invalid={errors.cover && touched.cover}
                  errorMessage={errors.cover}
                  component={CustomFieldCover}
                />

                <GZFieldGroup
                  name="chain"
                  label="Chain"
                  invalid={errors.chain && touched.chain}
                  errorMessage={errors.chain}
                  component={CustomFieldChain}
                />

                <GZFieldGroup
                  name="name"
                  label="Name *"
                  invalid={errors.name && touched.name}
                  errorMessage={errors.name}
                  component={CustomFieldName}
                />

                <GZFieldGroup
                  name="about"
                  label="About *"
                  invalid={errors.about && touched.about}
                  errorMessage={errors.about}
                  component={CustomFieldAbout}
                />

                <GZFieldGroup
                  name="category"
                  label="Categorie(s) *"
                  invalid={errors.category && touched.category}
                  errorMessage={errors.category}
                  component={CustomFieldCategory}
                />

                <GZFieldGroup
                  name="website"
                  label="Website"
                  sublabel="(optional)"
                  invalid={errors.website && touched.website}
                  errorMessage={errors.website}
                  component={CustomFieldWebsite}
                />

                <GZFieldGroup
                  name="publicUrl"
                  label="Public URL"
                  sublabel="(optional)"
                  mb="24px"
                  component={CustomFieldPublicUrl}
                />

                <Text
                  fontSize="20px"
                  fontWeight="400"
                  lineHeight="150%"
                  letterSpacing="0.02em"
                  color="#BFCFE8"
                  mb="16px"
                >
                  Community Links
                </Text>
                <GZFieldGroup name="twitter" component={CustomFieldTwitter} />
                <GZFieldGroup name="discord" component={CustomFieldDiscord} />
                <GZFieldGroup name="github" component={CustomFieldGithub} />
                <GZFieldGroup name="telegram" component={CustomFieldTelegram} />
                <GZFieldGroup
                  name="instagram"
                  component={CustomFieldInstagram}
                />
                <GZFieldGroup
                  name="hideSpaceFromHomepage"
                  component={CustomFieldHideHomepage}
                  mb="24px"
                />
              </Box>
            </Box>

            <Flex alignItems="center" justifyContent="flex-end">
              <Button
                onClick={onBack}
                type="button"
                variant="ghost"
                colorScheme="gray"
                color="#BFCFE8"
                w="86px"
                mr="13px"
              >
                Back
              </Button>
              <Button w="84px" type="submit">
                Next
              </Button>
            </Flex>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default GZCreateDAO;

const StyledInput = styled(Input)`
  background: #242e42 !important;
  border: 1px solid rgba(78, 95, 131, 0.7) !important;
  padding-top: 9px !important;
  padding-bottom: 9px !important;
  padding-right: 14px !important;
  line-height: 150% !important;
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
  height: 66px;
  &::placeholder {
    color: #94a7c699 !important;
  }
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
