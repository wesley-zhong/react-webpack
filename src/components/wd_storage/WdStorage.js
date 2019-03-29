import nattyStorage from 'natty-storage'

const SETTING_CACHE_KEY = 'WD-SETTING-KEY'
const PAGE_DATA_CACHE_KEY = 'WD-PAGE-DATA-CACHE-KEY'
const WD_LOGIN_KEY = "WD-LOGIN_KEY";

const localStorage = nattyStorage({
  type: 'localStorage',  // 缓存方式, 默认为'localStorage'
  key: 'wd-dev-lst',     // !!! 唯一必选的参数, 用于内部存储 !!!
  tag: 'v1.0',          // 缓存的标记, 用于判断是否有效
})


const sessionStorage = nattyStorage({
  type: 'sessionStorage',  // 缓存方式, 默认为'localStorage'
  key: 'wd-dev-page-sst',     // !!! 唯一必选的参数, 用于内部存储 !!!
  tag: 'v1.0',          // 缓存的标记, 用于判断是否有效
})


function wdlocalStoreSetItem(key, item) {
  localStorage.set(key, item)
}

function wdlocalStoreGetItem(key, item) {
  return localStorage.get(key, null)
}


function pageDataStoreSet(item) {
  sessionStorage.set(PAGE_DATA_CACHE_KEY, item)
}

function pageDataStoreGet() {
  return sessionStorage.get(PAGE_DATA_CACHE_KEY, null)
}

function pageDataStoreClear() {
  sessionStorage.remove(PAGE_DATA_CACHE_KEY)

}

function wdStorageSetItem(key, item) {
  sessionStorage.set(key, item)
}

function isLogin() {
  var user =  window.sessionStorage.getItem("Wd-loginKey");
  if(user != null){
    setLoginUser(JSON.parse(user));
    return true;
  }
  return (sessionStorage.get(WD_LOGIN_KEY, null) != null)
}

/**
 * 清除缓存的方法
 */
function  logout () {
  sessionStorage.set(WD_LOGIN_KEY, null)
}

function setLoginUser(obj) {
  if (obj == null)
    obj = {}
  sessionStorage.set(WD_LOGIN_KEY, obj)
}

function getMeInfo() {
  return sessionStorage.get(WD_LOGIN_KEY, null);
}


function wdStoreGetItem(key) {
  return localStorage.get(key, null)
}

export default {
  wdStorageSetItem,
  wdStoreGetItem,
  wdlocalStoreSetItem,
  wdlocalStoreGetItem,

  pageDataStoreSet,
  pageDataStoreGet,
  pageDataStoreClear,

  isLogin,
  setLoginUser,
  getMeInfo,
  logout,


  // key
  SETTING_CACHE_KEY,
  PAGE_DATA_CACHE_KEY,
}
