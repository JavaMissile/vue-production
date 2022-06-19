import requests from "./request";
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })