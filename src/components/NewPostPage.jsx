import { Container, Paper, Typography, Box, Button, Divider } from "@mui/material";
import { useMemo, useState } from "react";
import PostTypeSelector from "../components/PostTypeSelector.jsx";
import QuestionForm from "../components/QuestionForm.jsx";
import ArticleForm from "../components/ArticleForm.jsx";

export default function NewPostPage() {
  const [type, setType] = useState("question");

  const [questionData, setQuestionData] = useState({
    title: "",
    description: "",
    tags: [],
  });

  const [articleData, setArticleData] = useState({
    title: "",
    abstract: "",
    text: "",
    tags: [],
  });

  const [errors, setErrors] = useState({});

  // ---- validators ----
  const validateQuestion = (d) => {
    const e = {};
    if (!d.title.trim()) e.title = "Title is required.";
    if (!d.description.trim()) e.description = "Description is required.";
    if (d.tags.length > 3) e.tags = "Max 3 tags.";
    return e;
  };

  const validateArticle = (d) => {
    const e = {};
    if (!d.title.trim()) e.title = "Title is required.";
    if (!d.abstract.trim()) e.abstract = "Abstract is required.";
    if (!d.text.trim()) e.text = "Article text is required.";
    if (d.tags.length > 3) e.tags = "Max 3 tags.";
    return e;
  };

  // compute live validity (for disabling the Post button)
  const isFormValid = useMemo(() => {
    const d = type === "question" ? questionData : articleData;
    const e = type === "question" ? validateQuestion(d) : validateArticle(d);
    return Object.keys(e).length === 0;
  }, [type, questionData, articleData]);

  const handlePost = () => {
    const d = type === "question" ? questionData : articleData;
    const e = type === "question" ? validateQuestion(d) : validateArticle(d);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      // stop here if invalid
      return;
    }
    
    const payload = { type, ...d };
    console.log("Post payload (to be saved in a future task):", payload);
    alert("Post action will be implemented in a future task.");
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>New Post</Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Select a post type. This section is designed based on the type of the post.
            {type === "question"
              ? " For posting a question, the following fields will appear."
              : " For posting an article, the following fields will appear."}
          </Typography>
          <PostTypeSelector value={type} onChange={setType} />
        </Box>

        <Divider sx={{ my: 2 }} />

        {type === "question" ? (
          <QuestionForm data={questionData} onChange={setQuestionData} errors={errors} />
        ) : (
          <ArticleForm data={articleData} onChange={setArticleData} errors={errors} />
        )}

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" onClick={handlePost} disabled={!isFormValid}>
            Post
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

