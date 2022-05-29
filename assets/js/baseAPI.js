//注意：每次调用$.get() $.post() $.ajax() 时
//会先调用 ajaxPrefilter 这个函数
//在这个函数中，可以拿到我们给Ajax 提供的配置对象
$.ajaxPrefilter(function(options){
    
    //在发起真正的Ajax 请求 统一拼接请求的根路径
    options.url = ' http://www.liulongbin.top:3007'+ options.url

    // console.log(option.url);

    //统一为有权限的接口，设置 headers 请求头
    if(options.url.indexOf('/my/') !== -1){
        options.headers={
            Authorization:localStorage.getItem('token') || ''
        }

    }

    //全局统一挂在 complete 回调函数
    options.complete=function(res){
        //    console.log('执行了 complete 回调');
        //    console.log(res);
        //在 complete 回调函数中，可使用responseJSON 得到服务器响应回来的数据
        if(res.responseJSON.status === 1 && res.responseJSON.message=== '身份认证失败！'){
            //1.强制清空 token
            localStorage.removeItem('token')
            //2.强制跳转到登录页面
            location.href = '/login.html'
        }
    }
})