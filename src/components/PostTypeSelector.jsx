import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from "@mui/material";

export default function PostTypeSelector({ value, onChange }) {
  return (
    <FormControl>
      <FormLabel id="post-type-label">Select Post Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="post-type-label"
        name="post-type"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <FormControlLabel value="question" control={<Radio />} label="Question" />
        <FormControlLabel value="article" control={<Radio />} label="Article" />
      </RadioGroup>
      <FormHelperText>Changes the fields below (conditional rendering).</FormHelperText>
    </FormControl>
  );
}
