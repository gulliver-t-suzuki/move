/*import React, { useState } from "react";

const FormExample = () => {
  const [inputText, setInputText] = useState("");

  const handleButtonClick = () => {
    if (inputText === "あいうえお") {
      // 送信処理
      console.log("送信処理");
    } else {
      setInputText("あいうえお");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>ボタン</button>
    </div>
  );
};

export default FormExample;*/

import React, { useState } from "react";

const TextAreaForm = () => {
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");
  const [savedLines, setSavedLines] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const lines = text.split("\n");
    setSavedLines(lines);
    setText("");
  };

  const handleLineClick = (line: string) => {
    if (inputText === line) {
      // 送信処理
      console.log(line);
    } else {
      setInputText(line);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: "1000",
      }}
    >
      <textarea value={text} onChange={handleChange} rows={5} cols={30} />
      <button onClick={handleSave}>保存</button>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        style={{
          width: "100%",
          backgroundColor: "white",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "white",
          overflowX: "hidden",
          overflowY: "scroll",
          cursor: "default",
        }}
      >
        {savedLines.map((line, index) => (
          <button key={index} onClick={() => handleLineClick(line)}>
            {line}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TextAreaForm;
