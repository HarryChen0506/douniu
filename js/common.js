// tab切换组件
function Tabs(config){
    this.config = {
        container: document,
        navItemClassName: 'tab-nav-item',
        pannelClassName: 'tab-pannel-item',
        navItemFlag: 'active',
        pannelItemFlag: 'active',
        defaultIndex: 0,
    }
    for(var key in config){
        if(config[key]){
            this.config[key] = config[key]
        }
    }
    this.init(this.config);
}
Tabs.prototype = {
    init: function (config){
        if(!$){
            alert('tabs组件依赖jquery,请先引入！');
            return false
        }       
        this.bindUI();
    },
    bindUI: function (){
        var self = this;
        //绑定nav事件  
        var navItemClassName ='.'+this.config.navItemClassName; 
        var pannelClassName = '.'+this.config.pannelClassName; 

        var navList = $(this.config.container +' ' +navItemClassName);
        var pannelList = $(this.config.container +' '+ pannelClassName);
        self.initPage(navList, pannelList)

        $(this.config.container).delegate(navItemClassName, "click", function(){                         
             var index = $(this).index(); 
             navList.removeClass(self.config.navItemFlag);
             navList.eq(index).addClass(self.config.navItemFlag);          
             pannelList.removeClass(self.config.pannelItemFlag);
             pannelList.eq(index).addClass(self.config.pannelItemFlag);
        });
    },
    initPage: function(navList,pannelList){
        var index = this.config.defaultIndex;
         if(index<0){
             index = 0;
         }else if(index>=navList.length){
            index = navList.length-1
         }
         navList.removeClass(this.config.navItemFlag);
         navList.eq(index).addClass(this.config.navItemFlag);            
         pannelList.removeClass(this.config.pannelItemFlag);
         pannelList.eq(index).addClass(this.config.pannelItemFlag);
    }

}

// 注册
function Login(config){
    this.config = {
        container: '#dn-login-wrap',
        closeBtn: '#login-close'
    };
    for(var key in config){
        if(config[key]){
            this.config[key] = config[key]
        }
    }
    this.init(this.config);
}
Login.prototype = {
    init: function(){
        //注册页切换tab
        var login_tabs = new Tabs({
            container: '#login-tabs',
            navItemClassName: 'tab-btn',
            pannelClassName: 'tab-unit',
            navItemFlag: 'active',
            pannelItemFlag: 'active',
            defaultIndex:0
        })
        this.bindUI();
    },
    bindUI: function(){
        var self = this;
        $(this.config.closeBtn).on('click', function(){
            self.hideLogin();
        })
        $('.login-mask').on('click', function(){
            self.hideLogin();
        })
    },
    showLogin: function(){
        $(this.config.container).show();
    },
    hideLogin: function(){
        $(this.config.container).hide();
    }
}