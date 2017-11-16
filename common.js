/**
 * 配置来源
 * 0:云端,1:城域网
 * @date 2017-07-07 15:12:36
 * @author kangxuefeng@etiantian.com
 */
var CONFIG_FROM = {
    CLOUD:0,
    DONG_GUA:1
}
var Config = {
    /**
     * 配置文件,选择是否是城域网
     * @type {number} 0:云端,1:城域网
     */
    CONFIG_FROM: CONFIG_FROM.CLOUD,//TODO 默认为CLOUD
    /**
     * 网校爱学域名地址（study-im-service-2.0及app-common-service）
     * 测试A
     */
    IM_SERVICE_DOMAIN: "http://i2.m.etiantian.com:48081/",
    /**
     * 数校爱学域名地址
     * 测试A
     */
    AIXUE_DOMAIN: "http://school.etiantian.com/",
    /**
     * 爱学项目名
     */
    SX_AIXUE_PROJECT_NAME :"dl910ta"

};


/**
 * 数校爱学项目地址
 */
Config.SX_AIXUE_PROJECT_URL = function(){return Config.AIXUE_DOMAIN + Config.SX_AIXUE_PROJECT_NAME};


/**
 * 数校 测试A sc910ta需改为dl910ta(修改时间:2016年3月22日 12:00:14)
 */
Config.shuxiaoBaseUrl =      function(){return Config.SX_AIXUE_PROJECT_URL()+"/im2.0.1"};
/**
 * @description
 * IM-WEB201-V2.0.5 教师年级科目列表
 * @author baoan.li
 */
Config.getTeacherSubjectListUrl = function(){return Config.shuxiaoBaseUrl()+"?m=getTeacherSubjectList.do"};

console.log(Config.getTeacherSubjectListUrl() )

/**
 * post Ajax请求,返回JSON
 * @param {Object} urlName
 * @param {Object} data	:json对象
 * @param {Object} successFn
 * @param {Object} errorFn
 * @author xuefeng.kang
 */
function postAjaxJSON(urlName,data,successFn,errorFn,completeFn){
//	urlName = urlName+".do";
    genericAjax(urlName,"POST",data,"json",successFn,errorFn,completeFn);
}

function getAjaxJSON2(urlName,data,successFn,errorFn,completeFn){
//	urlName = urlName+".do?"+data;
//	urlName = data?urlName+"?"+data:urlName;
    genericAjax(urlName,"get",data,"json",successFn,errorFn,completeFn);
}

/**
 * 公共ajax方法
 * @param {Object} urlName
 * @param {Object} type
 * @param {Object} data
 * @param {Object} successFn
 * @param {Object} errorFn
 * @param {Object} completeFn
 * @param {Boolean} async
 * @author xuefeng.kang
 */
function genericAjax(url,type,data,dataType,successFn,errorFn,completeFn,async){
//	console.log("postAjax url="+url);
    async = typeof async == "undefined" || async === true?true:false;
    console.log(data);
    $.ajax({
        url:url,
        type:type,
//		headers:{
//			"Access-Control-Allow-Origin":"*",
//          "Access-Control-Allow-Headers":"X-Requested-With"
//		},
        async:async,
        data:data,
        dataType:dataType,
        success:successFn,
        error:errorFn,
        complete:completeFn
    });
}

//**获取method值**
function getmethod(url){
    return url.substring(url.lastIndexOf("/")+1)
};

getmethod(Config.getTeacherSubjectListUrl())

/*
* 晒晒开启关闭
*
* 输入参数
* jid       String  用户jid
* time      long	当前时间毫秒数
* sign      String	加密签名
*
*
* var time=String(getTime());
* var sign = $.trim(data1);
* */

getAjaxJSON2()