import { Box, Text } from "@chakra-ui/react";
import { Field } from "formik";
import styled from "styled-components";

type Props = {
  name: string;
  label?: string;
  sublabel?: string;
  invalid?: boolean | string;
  errorMessage?: string;
  mb?: string;
  component: any;
  children?: JSX.Element;
  size?: "md" | "sm"
};
const GZFieldGroup = ({
  name,
  label = "",
  sublabel = "",
  invalid = false,
  errorMessage = "",
  mb = "16px",
  component,
  children,
  size = "md"
}: Props) => {
  return (
    <StyledFormGroup mb={mb} className={invalid ? "invalid" : ""}>
      {label && (
        <StyledLabel size={size} className="gz-field-label">
          {label} {sublabel && <span>{sublabel}</span>}
        </StyledLabel>
      )}
      <Field name={name} id={`gz-filed-${name}`} component={component} />
      {children ? children : <></>}
      {invalid && errorMessage && (
        <StyledError className="gz-field-error">{errorMessage}</StyledError>
      )}
    </StyledFormGroup>
  );
};
export default GZFieldGroup;

const StyledFormGroup = styled(Box) <{ errorcls: string; mb: string }>`
  margin-bottom: ${(props) => props.mb};
  &.invalid {
    .gz-field-label,
    .gz-field-error,
    .gz-field-file {
      color: #f04438;
    }
    input,
    select,
    textarea,
    .gz-field-file {
      border-color: #f04438 !important;
    }
  }
`;

const StyledLabel = styled(Text)<{ size: "sm" | "md" }>`
  font-weight: 400;
  font-size: ${(props) => props.size === 'md' ? '16px' : '14px'};
  line-height: ${(props) => props.size === 'md' ? '150%' : '21px'};
  letter-spacing: ${(props) => props.size === 'md' ? '0.02em' : '0'};
  color: #bfcfe8;
  margin-bottom: ${(props) => props.size === 'md' ? '6px' : '0'};
  span {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StyledError = styled(Text)`
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: #f04438;
  letter-spacing: -0.08px;
  margin-left: 16px;
  margin-top: 2px;
  margin-bottom: 0;
`;
