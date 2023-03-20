import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Select } from "@chakra-ui/react";

type GZSelectProps = {
  listOptions: string[];
  placeholder?: string;
  selectWidth?: string;
  selectStyle?: string;
  size?: string;
  bg?: string;
  fontSize?: number;
  onValueChange?: (newValue: string | number) => void;
};
const GZSelect = ({ listOptions, placeholder, onValueChange, selectStyle, selectWidth, size, bg, fontSize }: GZSelectProps) => {
  return (
    <Select variant={selectStyle} w={selectWidth} maxW={selectWidth} size={size} bg={bg} fontSize={fontSize}>
      {listOptions.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </Select>
  );
};
export default GZSelect;
