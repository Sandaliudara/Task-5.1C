import { Box, TextField, Typography } from "@mui/material";
import TagsInput from "./TagsInput";

export default function QuestionForm({ data, onChange, errors = {} }) {
  const update = (patch) => onChange({ ...data, ...patch });

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        What do you want to ask or share
      </Typography>

      <TextField
        label="Title"
        placeholder="Start your question with how, what, why, etc."
        fullWidth
        value={data.title}
        onChange={(e) => update({ title: e.target.value })}
        error={Boolean(errors.title)}
        helperText={errors.title || " "}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Describe your problem"
        placeholder="Provide details…"
        fullWidth
        multiline
        minRows={6}
        value={data.description}
        onChange={(e) => update({ description: e.target.value })}
        error={Boolean(errors.description)}
        helperText={errors.description || " "}
        sx={{ mb: 2 }}
      />

      <TagsInput
        value={data.tags}
        onChange={(tags) => update({ tags })}
        helperText="Add up to 3 tags to describe your question"
        errorText={errors.tags}
      />
    </Box>
  );
}

