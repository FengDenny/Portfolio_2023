import React, { useEffect, useRef, useState } from "react";
import {
  ocean,
  dark,
  docco,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

type Props = {
  content: string;
  delay: number;
  styling: string;
  tags?: keyof JSX.IntrinsicElements;
};

function index({ content, delay, styling, tags }: Props) {
  const [message, setMessage] = useState<string>(content);
  const [displayed, setDisplayed] = useState<string>("");

  let animate: any;
  const Tag: keyof JSX.IntrinsicElements = tags ?? "h4";

  useEffect(() => {
    // avoid empty flash by calling it once
    setDisplayed(message.charAt(0));
    animate = setInterval(typeLetter, delay);
    return () => {
      setDisplayed("");
      clearInterval(animate);
    };
  }, [message]);

  const typeLetter = () => {
    setDisplayed((prevText) => {
      if (typeof prevText === "string" && message.length <= prevText.length) {
        clearInterval(animate);
      }
      return prevText?.concat(message.charAt(prevText.length));
    });
  };

  return (
    <Tag className={`${styling}`}>
      <SyntaxHighlighter
        language="javascript"
        style={ocean}
        showLineNumbers
        wrapLongLines={true}
      >
        {displayed}
      </SyntaxHighlighter>
    </Tag>
  );
}

export default index;
