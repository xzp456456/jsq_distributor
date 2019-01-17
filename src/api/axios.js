import axios from 'axios'
import qs from 'qs'
import store from '../vuex/store'
import layer from 'layer-mobile'
import $ from 'jquery'
import { Indicator } from 'mint-ui';
const baseURL = process.env.HTTP_URL+"/";
//axios.defaults.baseURL = process.env.HTTP_URL;

var GetDomainName = function () {//获取域名后缀
    var url = window.location.host;
    url = url.substring(url.lastIndexOf('.'));
    return url;
};

if(GetDomainName()==".com"){
    axios.defaults.baseURL = 'http://www.iyunmima.com'
}else{
    axios.defaults.baseURL = '/api'
}

//axios.defaults.timeout = 2500;
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
axios.defaults.headers['access-token'] = localStorage.getItem('access_token');
    //axios.defaults.headers['is-wap'] = 1;
    axios.interceptors.request.use(
        
        config => {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
              });
            if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
                config.headers.Authorization = `token ${store.state.token}`;
            }
            return config;
        },
        err => {
            return Promise.reject(err);
        }
    );

//http response 拦截器
axios.interceptors.response.use(
    
    response => {
        Indicator.close();
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    break;
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    }
 );

export const getAjax = (url, param) => {
    return new Promise((resolve, reject) => {
        axios.get(url, param,{
            headers: {
                'access-token': localStorage.getItem('access_token')
            }
        }).then((res) => {
            resolve(res.data);
        }).then((err) => {
            reject(err);
        })
    })
}

export const postAjax = (url, param) => {
    return new Promise((resolve, reject) => {
        param.dealer_id = localStorage.getItem('dealer_id');
        axios.post(url,qs.stringify(param),
            {
                headers: {
                    'access-token': localStorage.getItem('access_token')
                }
            }).then((res) => {
                resolve(res.data);
            }).then((err) => {
                reject(err);
            })
    })
}

export const postServer = (url, param) => {
    param.dealer_id = localStorage.getItem('dealer_id');
    return new Promise((resolve, reject) => {
        $.ajax({
            type:'post',
            url:baseURL+url,
            data:param,
            headers: {
                'access-token': localStorage.getItem('access_token'),
                'Content-Type':'application/x-www-form-urlencoded'
            },
            dataType:'json',
            success:(res)=>{
                resolve(data)
            },
            error:(err)=>{
                reject(err);
            }
        })
    })
}


export const layOpen = (msg) => {
    layer.open({
        skin: "msg",
        time: 1.5,
        content: msg
    })
}