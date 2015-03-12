/** Compiled By xtpl */
KISSY.add('test',function (S, require, exports, module) {
    var test = function (scope, buffer, undefined) {
        var tpl = this, nativeCommands = tpl.root.nativeCommands, utils = tpl.root.utils;
        var callFnUtil = utils['callFn'], callCommandUtil = utils['callCommand'], rangeCommand = nativeCommands['range'], eachCommand = nativeCommands['each'], withCommand = nativeCommands['with'], ifCommand = nativeCommands['if'], setCommand = nativeCommands['set'], includeCommand = nativeCommands['include'], parseCommand = nativeCommands['parse'], extendCommand = nativeCommands['extend'], blockCommand = nativeCommands['block'], macroCommand = nativeCommands['macro'], debuggerCommand = nativeCommands['debugger'];
        buffer.write('<div>\n\t', 0);
        var id0 = scope.resolve(['title'], 0);
        buffer.write(id0, true);
        buffer.write('\n\tbenfchen\n</div>\n', 0);
        var option1 = { escape: 1 };
        var params2 = [];
        params2.push('./subtest');
        option1.params = params2;
        require('./subtest');
        var callRet3;
        callRet3 = includeCommand.call(tpl, scope, option1, buffer, 5);
        if (callRet3 && callRet3.isBuffer) {
            buffer = callRet3;
            callRet3 = undefined;
        }
        buffer.write(callRet3, true);
        return buffer;
    };
    test.TPL_NAME = module.name;
    module.exports = test;
});