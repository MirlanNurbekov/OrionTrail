import React, { useState } from "react";
import "../styles/CodeRunner.css";

export default function CodeRunner() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("<h1>Hello, World!</h1>");
  const [resultFeedback, setResultFeedback] = useState("");

  const generateOutput = () => {
    const iframe = document.getElementById("output-iframe");
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    iframeDocument.open();
    iframeDocument.write(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}<\/script>
        </body>
      </html>
    `);
    iframeDocument.close();

    // Compare with expected output
    const actualOutput = iframeDocument.body.innerHTML.trim();
    if (actualOutput === expectedOutput.trim()) {
      setResultFeedback("Correct! The output matches the expected result.");
    } else {
      setResultFeedback("Incorrect. The output does not match the expected result.");
    }
  };

  return (
    <div className="code-runner">
      <div className="editor-section">
        <div className="editor">
          <h3>HTML</h3>
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            placeholder="Write HTML code here..."
          ></textarea>
        </div>
        <div className="editor">
          <h3>CSS</h3>
          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            placeholder="Write CSS code here..."
          ></textarea>
        </div>
        <div className="editor">
          <h3>JavaScript</h3>
          <textarea
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            placeholder="Write JavaScript code here..."
          ></textarea>
        </div>
      </div>
      <button className="run-button" onClick={generateOutput}>
        Run Code
      </button>
      <div className="output-section">
        <h3>Output</h3>
        <iframe id="output-iframe" title="Code Output"></iframe>
      </div>
      <div className="expected-output-section">
        <h3>Expected Output</h3>
        <pre>{expectedOutput}</pre>
      </div>
      <div className="feedback-section">
        <p>{resultFeedback}</p>
      </div>
    </div>
  );
}
