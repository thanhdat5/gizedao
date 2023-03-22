type GZLabelProps = {
  label: string;
  labelColor: string;
};
const GZLabel = ({ label, labelColor }: GZLabelProps) => {
  return <label color={labelColor}>{label}</label>;
};
export default GZLabel;
