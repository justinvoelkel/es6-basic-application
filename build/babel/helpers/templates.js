'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(template, payload) {
    var template = _jquery2.default.get('templates/' + template);
    template.done(function (data) {
        var html = TemplateEngine(data, payload);
        (0, _jquery2.default)('#main').empty();
        (0, _jquery2.default)('#main').append(html);
    });
}

var TemplateEngine = function TemplateEngine(html, options) {
    var re = /<%([^%>]+)?%>/g,
        reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
        code = 'var r=[];\n',
        cursor = 0,
        match;
    var add = function add(line, js) {
        js ? code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n' : code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '';
        return add;
    };
    while (match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code += 'return r.join("");';
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
};

exports.render = render;