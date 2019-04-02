// 这里放置全局的变量
const isDev = true;
const urlPrefix = isDev ? '/mock/' : '/';
const   URLS={
  query: `${urlPrefix}query/query.json`,
    }

export   {
  urlPrefix,
  isDev,
    // 这里放置全局的调用的URL
  URLS
};
