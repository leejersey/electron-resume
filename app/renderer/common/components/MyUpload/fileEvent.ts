import { createUID } from '@common/utils';

class FileEvent {
  public uuid: string;
  public file: any;
  public fileType: string;
  public base64URL: string;

  public constructor(file: any) {
    this.file = file;
    this.uuid = createUID();
    const types = file?.type?.split('/') || [];
    this.fileType = types.length ? types[0] : '';
    /**
     * @description 本地预览地址
     */
    this.base64URL = window.URL.createObjectURL(file);
  }

  // 释放
  public revokeFileBase64URL(base64URL: string) {
    window.URL.revokeObjectURL(base64URL);
  }

  public upload() {}
  public cancel() {}
  public retry() {}
}

export default FileEvent;
