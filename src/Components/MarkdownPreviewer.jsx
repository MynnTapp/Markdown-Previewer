import "./MarkdownPreviewer.css";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownPreviewer() {
  const [input, setInput] = useState(`# Heading (H1)

## Subheading (H2)

[This is a link](https://www.example.com)

\`Inline code\`

\`\`\`
Code block
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item
- Another list item

> This is a blockquote

![Image](https://via.placeholder.com/150)

**Bolded text**`);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Markedown Previewer</h1>
      <h2>Editor</h2>
      <textarea id="editor" value={input} onChange={handleChange}></textarea>
      <h2 id="preview-text">Preview</h2>
      <div disabled id="preview">
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
  );
}
