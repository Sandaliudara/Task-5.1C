import { TextField, Chip, Box, FormHelperText } from "@mui/material";
import { useState, useRef, useEffect } from "react";

export default function TagsInput({ value = [], onChange, helperText = "Add up to 3 tags", errorText = "" }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // keep focus in the input after adding a tag
    inputRef.current?.focus();
  }, [value.length]);

  const addTag = (t) => {
    const tag = t.trim();
    if (!tag || value.includes(tag) || value.length >= 3) return;
    onChange([...value, tag]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(input);
    }
  };

  return (
    <Box>
      <TextField
        inputRef={inputRef}
        label="Tags"
        placeholder="e.g., Java"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
        error={Boolean(errorText)}
        inputProps={{ "aria-describedby": "tags-help" }}
        sx={{ mb: 1 }}
      />
      <FormHelperText id="tags-help" error={Boolean(errorText)} aria-live="polite">
        {errorText || `${helperText} • Press Enter to add`}
      </FormHelperText>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
        {value.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onDelete={() => onChange(value.filter((t) => t !== tag))}
            // Chip is keyboard deletable (Backspace/Delete) by default
          />
        ))}
      </Box>
    </Box>
  );
}

