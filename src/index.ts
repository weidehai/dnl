import Url from 'url-parse';

export default function dnl(options: {
  url: string;
  method: string;
  data?: string;
  header: { [key: string]: string };
  name?: string;
}): void {
  const { url, method = 'GET', data, name } = options;
  const urlObj = new Url(url);
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.responseType = 'blob';
  xhr.onload = () => {
    const resource = URL.createObjectURL(xhr.response);
    const a = document.createElement('a');
    a.href = resource;
    a.download = name ?? urlObj.pathname.split('/').pop();
    a.click();
  };
  xhr.send(data);
}
