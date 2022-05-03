import {lazyTarget, removeTarget} from "../config";

const convertNode = (content) => {
  const parser = new DOMParser();
  return parser.parseFromString(content, 'text/html');
}

const removeNode = (doc) => {
  const target = removeTarget.join(',');

  doc.body.querySelectorAll(target).forEach((item) => {
    item.parentElement?.removeChild(item);
  });
}

const changeLazyImg = (doc) => {
  const target = lazyTarget.map((item) => `[${item}]`).join(',');

  doc.body.querySelectorAll(target).forEach((item) => {
    lazyTarget.forEach((attr) => {
      item.getAttribute(attr) && item.setAttribute('src', item.getAttribute(attr));
    })
  });
}

const convertStr = (doc) => {
  return doc.body.innerHTML;
}

export const createNews = (content) => {
  const doc = convertNode(content);

  removeNode(doc);
  changeLazyImg(doc);

  const str = convertStr(doc);

  return str;
}