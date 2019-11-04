import React from 'react';
import SyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RubyHighlighter = (props: SyntaxHighlighterProps) => {

  return (
    <SyntaxHighlighter
      {...props}
      language="ruby"
      style={vs2015}
      customStyle={{ display: 'flex', lineHeight: 1.5, backgroundColor: '#171717' }}
      wrapLines={true}
      lineNumberContainerStyle={{ textAlign: 'right', paddingRight: 15 }}
      lineNumberStyle={{ color: '#727272' }}
    />
  );
}

export default RubyHighlighter;
