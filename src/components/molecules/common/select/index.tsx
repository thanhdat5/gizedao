import { FormControl, FormLabel, Select } from "@chakra-ui/react";

type GZFormGroupProps = {
  label?: string;
  data: string[];
  placeholder?: string;
  required?: boolean;
  name?: string;
  onChangeValue?: any;
};

const GZSelect = ({
  label,
  data = [],
  placeholder,
  required = false,
  name,
  onChangeValue,
}: GZFormGroupProps) => {
  return (
    <FormControl isRequired={required}>
      <FormLabel mb="6px" color="#BFCFE8" fontWeight="400" fontSize="14px">
        {label}
      </FormLabel>
      <Select
        placeholder={placeholder}
        background="#242E42"
        name={name}
        onChange={onChangeValue}
      >
        {data.map((option) => (
          <option
            value={option}
            style={{
              background: "#1A2335",
            }}
            key={option}
          >
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default GZSelect;
