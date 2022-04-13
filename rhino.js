common.hookAllMethods('com.cjtec.remoteassis.bean.UserTime', 'getRemaining_time', function (param) {
    param.setResult('9999999');
});
common.hookAllMethods('com.cjtec.remoteassis.App','p',function(param){
param.setResult(true);
});
common.hookAllMethods('com.cjtec.remoteassis.bean.UserInfo','getVipendtime',function(param){
param.setResult('永不过期啦');
});
common.hookAllMethods('com.cjtec.remoteassis.App','q',function(param){
param.setResult(true);
});
