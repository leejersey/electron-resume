import React from 'react';

interface IProps {
  text: string; // 标题
  styles?: React.CSSProperties; // 样式
}

function Title({ text, styles }) {
  return <div style={styles}>{text}</div>;
}

export default Title;
