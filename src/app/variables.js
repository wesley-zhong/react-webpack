// 这里放置全局的变量
const isDev = true;
const urlPrefix = isDev ? '/mock/' : '/';

export default {
  urlPrefix,
  isDev,
    // 这里放置全局的调用的URL
  URLS: {
    query: `${urlPrefix}query/query.json`,
  },
};
