// 首页js

$(function(){  
    //主视频
    var main_tabs = new Tabs({
        container: '#index-main',
        navItemClassName: 'tab-nav-item',
        pannelClassName: 'tab-pannel-item',
        navItemFlag: 'active',
        pannelItemFlag: 'active',
        defaultIndex:0
    })
    // console.log('main_tabs', main_tabs)
    //游戏推荐
     var recommend_tabs = new Tabs({
        container: '#index-recommend',
        navItemClassName: 'tab-nav-item',
        pannelClassName: 'tab-pannel-item',
        navItemFlag: 'active',
        pannelItemFlag: 'active',
        defaultIndex:0
    })
    // console.log('recommend_tabs', recommend_tabs)

    //登录
    var login = new Login({
        container: '#dn-login-wrap',
        closeBtn: '#login-close'
    });   
    $('.login-register').on('click', function(){
        //打开登录弹出层
         login.showLogin();
    })

})