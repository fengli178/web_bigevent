//注意：每次调用$.get() $.post() $.ajax() 时
//会先调用 ajaxPrefilter 这个函数
//在这个函数中，可以拿到我们给Ajax 提供的配置对象
$.ajaxPrefilter(function(option){
    
    //在发起真正的Ajax 请求 统一拼接请求的根路径
    option.url = ' http://www.liulongbin.top:3007'+ option.url

    console.log(option.url);
})