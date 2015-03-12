/** Compiled By xtpl */
KISSY.add(function (S, require, exports, module) {
    var subtest = function (scope, buffer, undefined) {
        var tpl = this, nativeCommands = tpl.root.nativeCommands, utils = tpl.root.utils;
        var callFnUtil = utils['callFn'], callCommandUtil = utils['callCommand'], rangeCommand = nativeCommands['range'], eachCommand = nativeCommands['each'], withCommand = nativeCommands['with'], ifCommand = nativeCommands['if'], setCommand = nativeCommands['set'], includeCommand = nativeCommands['include'], parseCommand = nativeCommands['parse'], extendCommand = nativeCommands['extend'], blockCommand = nativeCommands['block'], macroCommand = nativeCommands['macro'], debuggerCommand = nativeCommands['debugger'];
        buffer.write('<div>', 0);
        var id0 = scope.resolve(['subtest'], 0);
        buffer.write(id0, true);
        buffer.write('</div>', 0);
        return buffer;
    };
    subtest.TPL_NAME = module.name;
    module.exports = subtest;
});