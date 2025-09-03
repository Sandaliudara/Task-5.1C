import { TextField, Chip, Box } from "@mui/material";
import { useState } from "react";

export default function TagsInput({
  value = [],
  onChange,
  helperText = "Add up to 3 tags",
  errorText = "",
}) {
  const [input, setInput] = useState("");

  const addTag = (t) => {
    const tag = t.trim();
    if (!tag) return;
    if (value.includes(tag)) return;
    if (value.length >= 3) return;
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
        label="Tags"
        placeholder="e.g., Java"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
        error={Boolean(errorText)}
        helperText={errorText || `${helperText} • Press Enter to add`}
        sx={{ mb: 1 }}
      />
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {value.map((tag) => (
          <Chip key={tag} label={tag} onDelete={() => onChange(value.filter((t) => t !== tag))} />
        ))}
      </Box>
    </Box>
  );
}

