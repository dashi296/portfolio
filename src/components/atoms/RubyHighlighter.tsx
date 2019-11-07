import React from 'react';
import SyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RubyHighlighter = (props: SyntaxHighlighterProps) => {

  const highlightTheme = monokaiSublime;
  return (
    <SyntaxHighlighter
      {...props}
      language="ruby"
      style={highlightTheme}
      customStyle={{ display: 'flex', lineHeight: 1.5, backgroundColor: '#171717' }}
      wrapLines={true}
      lineNumberContainerStyle={{ textAlign: 'right', paddingRight: 15, width: 40 }}
      lineNumberStyle={{ color: '#727272' }}
    />
  );
}

export default RubyHighlighter;
