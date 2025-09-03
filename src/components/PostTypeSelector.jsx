import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function PostTypeSelector({ value, onChange }) {
  return (
    <FormControl>
      <FormLabel>Select Post Type</FormLabel>
      <RadioGroup row value={value} onChange={(e) => onChange(e.target.value)}>
        <FormControlLabel value="question" control={<Radio />} label="Question" />
        <FormControlLabel value="article" control={<Radio />} label="Article" />
      </RadioGroup>
    </FormControl>
  );
}
