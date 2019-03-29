import {hashHistory} from 'react-router';

var pageParamsArray = new Array();

function getPageParam() {
    var pageObj = pageParamsArray.slice(-1)[0]
    return pageObj
}


function popParam() {
    pageParamsArray.pop()
}

function href(pageName, paramObj) {
    var pageParam = {
        pageName: pageName,
        pageParam: paramObj
    }
    pageParamsArray.push(pageParam)
    hashHistory.push(pageName);
}

function goBack() {
    popParam();

}

function getPageStack() {
    return pageParamsArray;

}


export default {
    getPageParam,
    popParam,
    href,
    getPageStack,
    goBack,
}
