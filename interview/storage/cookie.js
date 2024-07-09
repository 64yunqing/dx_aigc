/**
 * CookieManager cookie 处理类
 * 
 */
// 登录
// cookie 操作有点难打理，痛苦一次，封装一下

class CookieManager{
    constructor(){}
    //es6 
    setCookie(name,value,expires=7){
         let expiresDate = '';
         if(expires){

            const date = new Date();
            // console.log(date.getTime());
            date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
            // console.log(date,date.getTime());
            // console.log(expiresDate);
            expiresDate = `;expires=${date.toUTCString()}`;
        }   
        document.cookie = name + "=" + value + expiresDate + ";path=/"
    }
    getCookie(){

    }
    deleteCookie(name){
        this.setCookie(name,'',-1);
    }
}