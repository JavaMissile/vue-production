import requests from "./ajax";
import mockRequests from "./mockAjax"
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
export const reqGetBannerList = () => mockRequests.get('/banner');
export const reqGetFloorList = () => mockRequests.get('/floor');
//post
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });

export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });

export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });

export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });