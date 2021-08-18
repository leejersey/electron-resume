import React from 'react';
import './index.less';

interface IProps {
  text: string; // 标题
  styles?: React.CSSProperties; // 样式
}

function Title({ text, styles }) {
  return (
    <div style={styles} styleName="title">
      {text}
    </div>
  );
}

export default Title;
