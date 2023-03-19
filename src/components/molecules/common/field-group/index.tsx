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
}
const GZFieldGroup = ({
    name,
    label = "",
    sublabel = "",
    invalid = false,
    errorMessage = "",
    mb = "16px",
    component,
    children
}: Props) => {
    return <StyledFormGroup mb={mb} className={invalid ? 'invalid' : ''}>
        {label && (<StyledLabel className="gz-field-label">{label} {sublabel && (<span>{sublabel}</span>)}</StyledLabel>)}
        <Field name={name} id={`gz-filed-${name}`} component={component} />
        {children ? children : <></>}
        {invalid && errorMessage && (<StyledError className="gz-field-error">{errorMessage}</StyledError>)}
    </StyledFormGroup>
}
export default GZFieldGroup

const StyledFormGroup = styled(Box) <{ errorcls: string, mb: string }>`
  margin-bottom:  ${(props) => props.mb};
  &.invalid{
    .gz-field-label,
    .gz-field-error{
      color:#F04438;
    }
    input, select, textarea{
      border-color:#F04438 !important;
    }
  }
`;

const StyledLabel = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #BFCFE8;
  margin-bottom:6px;
  span{
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StyledError = styled(Text)`
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: #F04438;
  letter-spacing: -0.08px;
  margin-left: 16px;
  margin-top: 2px;
  margin-bottom: 0;
`