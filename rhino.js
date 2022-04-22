
//这里的代码不确定有效，先删掉，仅供参考，实际是下面的加壳hook方式有效果
/*common.hookAllMethods('com.cjtec.remoteassis.bean.UserTime', 'getRemaining_time', function (param) {
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
});*/


//下面是加壳的hook方式
common.hookAllMethods('android.app.ActivityThread', 'performLaunchActivity', null, function (param) {
    var mInitialApplication = common.getObjectField(param.thisObject, 'mInitialApplication');
    var classLoader = common.callMethod(mInitialApplication, 'getClassLoader');
    var UserTime = common.findClass('com.cjtec.remoteassis.bean.UserTime', classLoader);
    common.hookAllMethods(UserTime, 'getRemaining_time', function (param) {
        param.setResult(java.lang.Integer.valueOf('9999999'));
    });
});
