interface Config {
  responseType?: '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
  header?: Record<any, any>;
}

/* eslint-disable */
function Http() {}
/* eslint-enable */

Http.get = function (method: 'GET' | 'POST', url: string, config: Config) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    /*
    xhrReq.open(method, url, async, user, password);
    async:
      default:true
    */
    xhr.open(method, url);
    xhr.responseType = config.responseType;
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.send();
  });
};

Http.post = function (url: string, data: Document | XMLHttpRequestBodyInit, config: Config) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    const { header } = config;
    /*
    xhrReq.open(method, url, async, user, password);
    async:
      default:true
    */
    xhr.open('POST', url);
    if (header) {
      for (const key of Object.keys(header)) {
        xhr.setRequestHeader(key, header[key]);
      }
    }
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.send(data);
  });
};

export default Http;
