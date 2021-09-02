import React from 'react';
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import MyButton from '@src/common/components/MyButton';
import MyInput from '@src/common/components/MyInput';
import MyModal from '@src/common/components/MyModal';

import './index.less';

function Resume() {
  getAppPath().then((rootPath: string) => {
    console.log('应用程序的目录路径为: ', rootPath);
    console.log('文件读取，内容数据为: ');
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });
  return (
    <div>
      我是简历模块<MyButton>1111</MyButton>
      <MyInput
        value="1"
        placeholder="请输入姓名" // 占位文本
        allowClear={true} // 是否显示清除icon
        onChange={(e) => console.log(e.target.value)}
      />
      <MyModal.Confirm
        title="确定要打印简历吗？"
        description="请确保信息的正确，目前仅支持单页打印哦～"
        config={{
          cancelBtn: {
            isShow: true,
            callback: () => {},
          },
          submitBtn: {
            isShow: true,
            callback: () => {},
          },
        }}
      />
    </div>
  );
}
export default Resume;
