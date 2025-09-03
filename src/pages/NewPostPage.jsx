import { Container, Paper, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import PostTypeSelector from "../components/PostTypeSelector";
import QuestionForm from "../components/QuestionForm";
import ArticleForm from "../components/ArticleForm";

export default function NewPostPage() {
  const [type, setType] = useState("question");
  const [questionData, setQuestionData] = useState({ title: "", description: "", tags: [] });
  const [articleData, setArticleData] = useState({ title: "", abstract: "", text: "", tags: [] });

  const handlePost = () => {
    const payload = type === "question" ? { type, ...questionData } : { type, ...articleData };
    console.log("Post payload (to be saved in a future task):", payload);
    alert("Post action will be implemented in a future task.");
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>New Post</Typography>

        <Box sx={{ mb: 2 }}>
          <PostTypeSelector value={type} onChange={setType} />
        </Box>

        {type === "question" ? (
          <QuestionForm data={questionData} onChange={setQuestionData} />
        ) : (
          <ArticleForm data={articleData} onChange={setArticleData} />
        )}

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" onClick={handlePost}>Post</Button>
        </Box>
      </Paper>
    </Container>
  );
}
