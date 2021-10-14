import Url from 'url-parse';
import Http from './utils/http';

export async function dnl(options: {
  url: string;
  method: 'GET' | 'POST';
  header: { [key: string]: string };
  name?: string;
}): Promise<void> {
  const { url, method = 'GET', name } = options;
  const urlObj = new Url(url);
  const response = await Http.get(method, url, { responseType: 'blob' });
  const resource = URL.createObjectURL(response);
  const a = document.createElement('a');
  a.href = resource;
  a.download = name ?? urlObj.pathname.split('/').pop();
  a.click();
}

export function upl(
  fileEle: HTMLInputElement,
  address: string,
  data?: Record<any, any>,
  config?: Record<any, any>
): void {
  fileEle.addEventListener('change', async () => {
    const file = fileEle.files[0];
    const formData = new FormData();
    formData.append('file', file);
    if (data) {
      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }
    }
    // if (!config.header['Content-Type']) {
    //   config.header['Content-Type'] = 'multipart/form-data';
    // }
    const response = await Http.post(address, formData, config);
    console.log(response);
  });
}
