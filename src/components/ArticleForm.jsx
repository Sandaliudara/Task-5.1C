import { Box, TextField, Typography } from "@mui/material";
import TagsInput from "./TagsInput";

export default function ArticleForm({ data, onChange, errors = {} }) {
  const update = (patch) => onChange({ ...data, ...patch });

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        What do you want to ask or share
      </Typography>

      <TextField
        label="Title"
        placeholder="Enter a descriptive title"
        fullWidth
        value={data.title}
        onChange={(e) => update({ title: e.target.value })}
        error={Boolean(errors.title)}
        helperText={errors.title || " "}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Abstract"
        placeholder="Enter a 1-paragraph abstract"
        fullWidth
        multiline
        minRows={3}
        value={data.abstract}
        onChange={(e) => update({ abstract: e.target.value })}
        error={Boolean(errors.abstract)}
        helperText={errors.abstract || " "}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Article Text"
        placeholder="Enter a 1-paragraph article"
        fullWidth
        multiline
        minRows={8}
        value={data.text}
        onChange={(e) => update({ text: e.target.value })}
        error={Boolean(errors.text)}
        helperText={errors.text || " "}
        sx={{ mb: 2 }}
      />

      <TagsInput
        value={data.tags}
        onChange={(tags) => update({ tags })}
        helperText="Add up to 3 tags to describe your article"
        errorText={errors.tags}
      />
    </Box>
  );
}



