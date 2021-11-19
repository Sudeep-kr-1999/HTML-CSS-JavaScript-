/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+java+javadoc+javadoclike+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+typescript&plugins=toolbar+copy-to-clipboard+download-button */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function (u) { var c = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, e = {}, M = { manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: { encode: function e(n) { return n instanceof W ? new W(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") }, type: function (e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId: function (e) { return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id }, clone: function t(e, r) { var a, n; switch (r = r || {}, M.util.type(e)) { case "Object": if (n = M.util.objId(e), r[n]) return r[n]; for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r)); return a; case "Array": return n = M.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) { a[n] = t(e, r) }), a); default: return e } }, getLanguage: function (e) { for (; e && !c.test(e.className);)e = e.parentElement; return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none" }, currentScript: function () { if ("undefined" == typeof document) return null; if ("currentScript" in document) return document.currentScript; try { throw new Error } catch (e) { var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1]; if (n) { var t = document.getElementsByTagName("script"); for (var r in t) if (t[r].src == n) return t[r] } return null } }, isActive: function (e, n, t) { for (var r = "no-" + n; e;) { var a = e.classList; if (a.contains(n)) return !0; if (a.contains(r)) return !1; e = e.parentElement } return !!t } }, languages: { plain: e, plaintext: e, text: e, txt: e, extend: function (e, n) { var t = M.util.clone(M.languages[e]); for (var r in n) t[r] = n[r]; return t }, insertBefore: function (t, e, n, r) { var a = (r = r || M.languages)[t], i = {}; for (var l in a) if (a.hasOwnProperty(l)) { if (l == e) for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]); n.hasOwnProperty(l) || (i[l] = a[l]) } var s = r[t]; return r[t] = i, M.languages.DFS(M.languages, function (e, n) { n === s && e != t && (this[e] = i) }), i }, DFS: function e(n, t, r, a) { a = a || {}; var i = M.util.objId; for (var l in n) if (n.hasOwnProperty(l)) { t.call(n, l, n[l], r || l); var o = n[l], s = M.util.type(o); "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a)) } } }, plugins: {}, highlightAll: function (e, n) { M.highlightAllUnder(document, e, n) }, highlightAllUnder: function (e, n, t) { var r = { callback: t, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; M.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), M.hooks.run("before-all-elements-highlight", r); for (var a, i = 0; a = r.elements[i++];)M.highlightElement(a, !0 === n, r.callback) }, highlightElement: function (e, n, t) { var r = M.util.getLanguage(e), a = M.languages[r]; e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r; var i = e.parentElement; i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r); var l = { element: e, language: r, grammar: a, code: e.textContent }; function o(e) { l.highlightedCode = e, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), t && t.call(l.element) } if (M.hooks.run("before-sanity-check", l), (i = l.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !l.code) return M.hooks.run("complete", l), void (t && t.call(l.element)); if (M.hooks.run("before-highlight", l), l.grammar) if (n && u.Worker) { var s = new Worker(M.filename); s.onmessage = function (e) { o(e.data) }, s.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 })) } else o(M.highlight(l.code, l.grammar, l.language)); else o(M.util.encode(l.code)) }, highlight: function (e, n, t) { var r = { code: e, grammar: n, language: t }; return M.hooks.run("before-tokenize", r), r.tokens = M.tokenize(r.code, r.grammar), M.hooks.run("after-tokenize", r), W.stringify(M.util.encode(r.tokens), r.language) }, tokenize: function (e, n) { var t = n.rest; if (t) { for (var r in t) n[r] = t[r]; delete n.rest } var a = new i; return I(a, a.head, e), function e(n, t, r, a, i, l) { for (var o in r) if (r.hasOwnProperty(o) && r[o]) { var s = r[o]; s = Array.isArray(s) ? s : [s]; for (var u = 0; u < s.length; ++u) { if (l && l.cause == o + "," + u) return; var c = s[u], g = c.inside, f = !!c.lookbehind, h = !!c.greedy, d = c.alias; if (h && !c.pattern.global) { var p = c.pattern.toString().match(/[imsuy]*$/)[0]; c.pattern = RegExp(c.pattern.source, p + "g") } for (var v = c.pattern || c, m = a.next, y = i; m !== t.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) { var b = m.value; if (t.length > n.length) return; if (!(b instanceof W)) { var k, x = 1; if (h) { if (!(k = z(v, y, n, f))) break; var w = k.index, A = k.index + k[0].length, P = y; for (P += m.value.length; P <= w;)m = m.next, P += m.value.length; if (P -= m.value.length, y = P, m.value instanceof W) continue; for (var E = m; E !== t.tail && (P < A || "string" == typeof E.value); E = E.next)x++, P += E.value.length; x--, b = n.slice(y, P), k.index -= y } else if (!(k = z(v, 0, b, f))) continue; var w = k.index, S = k[0], O = b.slice(0, w), L = b.slice(w + S.length), N = y + b.length; l && N > l.reach && (l.reach = N); var j = m.prev; O && (j = I(t, j, O), y += O.length), q(t, j, x); var C = new W(o, g ? M.tokenize(S, g) : S, d, S); if (m = I(t, j, C), L && I(t, m, L), 1 < x) { var _ = { cause: o + "," + u, reach: N }; e(n, t, r, m.prev, y, _), l && _.reach > l.reach && (l.reach = _.reach) } } } } } }(e, a, n, a.head, 0), function (e) { var n = [], t = e.head.next; for (; t !== e.tail;)n.push(t.value), t = t.next; return n }(a) }, hooks: { all: {}, add: function (e, n) { var t = M.hooks.all; t[e] = t[e] || [], t[e].push(n) }, run: function (e, n) { var t = M.hooks.all[e]; if (t && t.length) for (var r, a = 0; r = t[a++];)r(n) } }, Token: W }; function W(e, n, t, r) { this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length } function z(e, n, t, r) { e.lastIndex = n; var a = e.exec(t); if (a && r && a[1]) { var i = a[1].length; a.index += i, a[0] = a[0].slice(i) } return a } function i() { var e = { value: null, prev: null, next: null }, n = { value: null, prev: e, next: null }; e.next = n, this.head = e, this.tail = n, this.length = 0 } function I(e, n, t) { var r = n.next, a = { value: t, prev: n, next: r }; return n.next = a, r.prev = a, e.length++, a } function q(e, n, t) { for (var r = n.next, a = 0; a < t && r !== e.tail; a++)r = r.next; (n.next = r).prev = n, e.length -= a } if (u.Prism = M, W.stringify = function n(e, t) { if ("string" == typeof e) return e; if (Array.isArray(e)) { var r = ""; return e.forEach(function (e) { r += n(e, t) }), r } var a = { type: e.type, content: n(e.content, t), tag: "span", classes: ["token", e.type], attributes: {}, language: t }, i = e.alias; i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run("wrap", a); var l = ""; for (var o in a.attributes) l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"'; return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">" }, !u.document) return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function (e) { var n = JSON.parse(e.data), t = n.language, r = n.code, a = n.immediateClose; u.postMessage(M.highlight(r, M.languages[t], t)), a && u.close() }, !1)), M; var t = M.util.currentScript(); function r() { M.manual || M.highlightAll() } if (t && (M.filename = t.src, t.hasAttribute("data-manual") && (M.manual = !0)), !M.manual) { var a = document.readyState; "loading" === a || "interactive" === a && t && t.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ? window.requestAnimationFrame(r) : window.setTimeout(r, 16) } return M }(_self); "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/, name: /[^\s<>'"]+/ } }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) { "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&")) }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function (a, e) { var s = {}; s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i; var t = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } }; t["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }; var n = {}; n[a] = { pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () { return a }), "i"), lookbehind: !0, greedy: !0, inside: t }, Prism.languages.insertBefore("markup", "cdata", n) } }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function (a, e) { Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [e, "language-" + e], inside: Prism.languages[e] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } }) } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
!function (s) { var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/; s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + e.source + "$"), alias: "url" } } }, selector: RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"), string: { pattern: e, greedy: !0 }, property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css; var t = s.languages.markup; t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css")) }(Prism);
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: Prism.languages.regex }, "regex-flags": /[a-z]+$/, "regex-delimiter": /^\/|\/$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
!function (e) { var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", a = { pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"), lookbehind: !0, inside: { namespace: { pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: { punctuation: /\./ } }, punctuation: /\./ } }; e.languages.java = e.languages.extend("clike", { "class-name": [a, { pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=())])"), lookbehind: !0, inside: a.inside }], keyword: t, function: [e.languages.clike.function, { pattern: /(\:\:\s*)[a-z_]\w*/, lookbehind: !0 }], number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i, operator: { pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: !0 } }), e.languages.insertBefore("java", "string", { "triple-quoted-string": { pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/, greedy: !0, alias: "string" } }), e.languages.insertBefore("java", "class-name", { annotation: { pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/, lookbehind: !0, alias: "punctuation" }, generics: { pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/, inside: { "class-name": a, keyword: t, punctuation: /[<>(),.:]/, operator: /[?&|]/ } }, namespace: { pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function () { return t.source })), lookbehind: !0, inside: { punctuation: /\./ } } }) }(Prism);
!function (p) { var a = p.languages.javadoclike = { parameter: { pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m, lookbehind: !0 }, keyword: { pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 }, punctuation: /[{}]/ }; Object.defineProperty(a, "addSupport", { value: function (a, e) { "string" == typeof a && (a = [a]), a.forEach(function (a) { !function (a, e) { var n = "doc-comment", t = p.languages[a]; if (t) { var r = t[n]; if (!r) { var o = { "doc-comment": { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" } }; r = (t = p.languages.insertBefore(a, "comment", o))[n] } if (r instanceof RegExp && (r = t[n] = { pattern: r }), Array.isArray(r)) for (var i = 0, s = r.length; i < s; i++)r[i] instanceof RegExp && (r[i] = { pattern: r[i] }), e(r[i]); else e(r) } }(a, function (a) { a.inside || (a.inside = {}), a.inside.rest = e }) }) } }), a.addSupport(["java", "javascript", "php"], a) }(Prism);
!function (a) { var e = /(^(?:\s*(?:\*\s*)*))[^*\s].*$/m, n = "(?:[a-zA-Z]\\w+\\s*\\.\\s*)*[A-Z]\\w*(?:\\s*<mem>)?|<mem>".replace(/<mem>/g, function () { return "#\\s*\\w+(?:\\s*\\([^()]*\\))?" }); a.languages.javadoc = a.languages.extend("javadoclike", {}), a.languages.insertBefore("javadoc", "keyword", { reference: { pattern: RegExp("(@(?:exception|throws|see|link|linkplain|value)\\s+(?:\\*\\s*)?)(?:" + n + ")"), lookbehind: !0, inside: { function: { pattern: /(#\s*)\w+(?=\s*\()/, lookbehind: !0 }, field: { pattern: /(#\s*)\w+/, lookbehind: !0 }, namespace: { pattern: /\b(?:[a-z]\w*\s*\.\s*)+/, inside: { punctuation: /\./ } }, "class-name": /\b[A-Z]\w*/, keyword: a.languages.java.keyword, punctuation: /[#()[\],.]/ } }, "class-name": { pattern: /(@param\s+)<[A-Z]\w*>/, lookbehind: !0, inside: { punctuation: /[.<>]/ } }, "code-section": [{ pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/, lookbehind: !0, inside: { code: { pattern: e, lookbehind: !0, inside: a.languages.java, alias: "language-java" } } }, { pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/, lookbehind: !0, inside: { line: { pattern: e, lookbehind: !0, inside: { tag: a.languages.markup.tag, entity: a.languages.markup.entity, code: { pattern: /.+/, inside: a.languages.java, alias: "language-java" } } } } }], tag: a.languages.markup.tag, entity: a.languages.markup.entity }), a.languages.javadoclike.addSupport("java", a.languages.javadoc) }(Prism);
!function (e) { e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)(?!\s*[^\s_${}*a-zA-Z\xA0-\uFFFF])/), delete e.languages.typescript.parameter; var s = e.languages.extend("typescript", {}); delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: s } } } }), e.languages.ts = e.languages.typescript }(Prism);
!function (e) { var a = e.languages.javascript, n = "{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}", s = "(@(?:param|arg|argument|property)\\s+(?:" + n + "\\s+)?)"; e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(s + "(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)"), lookbehind: !0, inside: { punctuation: /\./ } } }), e.languages.insertBefore("jsdoc", "keyword", { "optional-parameter": { pattern: RegExp(s + "\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)"), lookbehind: !0, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: a, alias: "language-javascript" }, punctuation: /[=[\]]/ } }, "class-name": [{ pattern: RegExp("(@(?:augments|extends|class|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*".replace(/<TYPE>/g, function () { return n })), lookbehind: !0, inside: { punctuation: /\./ } }, { pattern: RegExp("(@[a-z]+\\s+)" + n), lookbehind: !0, inside: { string: a.string, number: a.number, boolean: a.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } }], example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: !0, inside: { code: { pattern: /^(\s*(?:\*\s*)?)\S.*$/m, lookbehind: !0, inside: a, alias: "language-javascript" } } } }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc) }(Prism);
!function (a) { function e(a, e) { return RegExp(a.replace(/<ID>/g, function () { return "(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*" }), e) } a.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), a.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), a.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] }), a.languages.insertBefore("javascript", "keyword", { imports: { pattern: e("(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)"), lookbehind: !0, inside: a.languages.javascript }, exports: { pattern: e("(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})"), lookbehind: !0, inside: a.languages.javascript } }), a.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), a.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), a.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: e("(\\.\\s*)#?<ID>"), lookbehind: !0 }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } }); for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < t.length; r++) { var n = t[r], s = a.languages.javascript[n]; "RegExp" === a.util.type(s) && (s = a.languages.javascript[n] = { pattern: s }); var o = s.inside || {}; (s.inside = o)["maybe-class-name"] = /^[A-Z][\s\S]*/ } }(Prism);
Prism.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, Prism.languages.webmanifest = Prism.languages.json;
!function (n) { var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/; n.languages.json5 = n.languages.extend("json", { property: [{ pattern: RegExp(e.source + "(?=\\s*:)"), greedy: !0 }, { pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/, alias: "unquoted" }], string: { pattern: e, greedy: !0 }, number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/ }) }(Prism);
Prism.languages.jsonp = Prism.languages.extend("json", { punctuation: /[{}[\]();,.]/ }), Prism.languages.insertBefore("jsonp", "punctuation", { function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/ });
Prism.languages.jsstacktrace = { "error-message": { pattern: /^\S.*/m, alias: "string" }, "stack-frame": { pattern: /^[ \t]+at[ \t].*/m, inside: { "not-my-code": { pattern: /[ \t]+at[ \t]+(?!\s)(?:node\.js|\<unknown\>|.*(?:node_modules|\(\<anonymous\>\)|\(\<unknown\>|\<anonymous\>$|\(internal\/|\(node\.js)).*/m, alias: "comment" }, filename: { pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/, lookbehind: !0, alias: "url" }, function: { pattern: /(at\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/, lookbehind: !0, inside: { punctuation: /\./ } }, punctuation: /[()]/, keyword: /\b(?:at|new)\b/, alias: { pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/, alias: "variable" }, "line-number": { pattern: /:[0-9]+(?::[0-9]+)?\b/, alias: "number", inside: { punctuation: /:/ } } } } };
!function (u) { var e = u.languages.javascript["template-string"], n = e.pattern.source, a = e.inside.interpolation, i = a.inside["interpolation-punctuation"], r = a.pattern.source; function t(e, t) { if (u.languages[e]) return { pattern: RegExp("((?:" + t + ")\\s*)" + n), lookbehind: !0, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, "embedded-code": { pattern: /[\s\S]+/, alias: e } } } } function o(e, t, n) { var r = { code: e, grammar: t, language: n }; return u.hooks.run("before-tokenize", r), r.tokens = u.tokenize(r.code, r.grammar), u.hooks.run("after-tokenize", r), r.tokens } function d(e) { var t = {}; t["interpolation-punctuation"] = i; var n = u.tokenize(e, t); if (3 === n.length) { var r = [1, 1]; r.push.apply(r, o(n[1], u.languages.javascript, "javascript")), n.splice.apply(n, r) } return new u.Token("interpolation", n, a.alias, e) } function c(a, e, i) { var t = u.tokenize(a, { interpolation: { pattern: RegExp(r), lookbehind: !0 } }), f = 0, y = {}, n = o(t.map(function (e) { if ("string" == typeof e) return e; for (var t, n = e.content; -1 !== a.indexOf((r = f++, t = "___" + i.toUpperCase() + "_" + r + "___"));); return y[t] = n, t; var r }).join(""), e, i), v = Object.keys(y); return f = 0, function e(t) { for (var n = 0; n < t.length; n++) { if (f >= v.length) return; var r = t[n]; if ("string" == typeof r || "string" == typeof r.content) { var a = v[f], i = "string" == typeof r ? r : r.content, o = i.indexOf(a); if (-1 !== o) { ++f; var s = i.substring(0, o), p = d(y[a]), l = i.substring(o + a.length), g = []; if (s && g.push(s), g.push(p), l) { var u = [l]; e(u), g.push.apply(g, u) } "string" == typeof r ? (t.splice.apply(t, [n, 1].concat(g)), n += g.length - 1) : r.content = g } } else { var c = r.content; Array.isArray(c) ? e(c) : e([c]) } } }(n), new u.Token(i, n, "language-" + i, a) } u.languages.javascript["template-string"] = [t("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"), t("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="), t("svg", "\\bsvg"), t("markdown", "\\b(?:md|markdown)"), t("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"), e].filter(Boolean); var s = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 }; function f(e) { return "string" == typeof e ? e : Array.isArray(e) ? e.map(f).join("") : f(e.content) } u.hooks.add("after-tokenize", function (e) { e.language in s && !function e(t) { for (var n = 0, r = t.length; n < r; n++) { var a = t[n]; if ("string" != typeof a) { var i = a.content; if (Array.isArray(i)) if ("template-string" === a.type) { var o = i[1]; if (3 === i.length && "string" != typeof o && "embedded-code" === o.type) { var s = f(o), p = o.alias, l = Array.isArray(p) ? p[0] : p, g = u.languages[l]; if (!g) continue; i[1] = c(s, g, l) } } else e(i); else "string" != typeof i && e([i]) } } }(e.tokens) }) }(Prism);
!function () { if ("undefined" != typeof Prism && "undefined" != typeof document) { var i = [], l = {}, d = function () { }; Prism.plugins.toolbar = {}; var e = Prism.plugins.toolbar.registerButton = function (e, n) { var t; t = "function" == typeof n ? n : function (e) { var t; return "function" == typeof n.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function () { n.onClick.call(this, e) })) : "string" == typeof n.url ? (t = document.createElement("a")).href = n.url : t = document.createElement("span"), n.className && t.classList.add(n.className), t.textContent = n.text, t }, e in l ? console.warn('There is a button with the key "' + e + '" registered already.') : i.push(l[e] = t) }, t = Prism.plugins.toolbar.hook = function (a) { var e = a.element.parentNode; if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains("code-toolbar")) { var t = document.createElement("div"); t.classList.add("code-toolbar"), e.parentNode.insertBefore(t, e), t.appendChild(e); var r = document.createElement("div"); r.classList.add("toolbar"); var n = i, o = function (e) { for (; e;) { var t = e.getAttribute("data-toolbar-order"); if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : []; e = e.parentElement } }(a.element); o && (n = o.map(function (e) { return l[e] || d })), n.forEach(function (e) { var t = e(a); if (t) { var n = document.createElement("div"); n.classList.add("toolbar-item"), n.appendChild(t), r.appendChild(n) } }), t.appendChild(r) } }; e("label", function (e) { var t = e.element.parentNode; if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) { var n, a, r = t.getAttribute("data-label"); try { a = document.querySelector("template#" + r) } catch (e) { } return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n } }), Prism.hooks.add("complete", t) } }();
!function () { function u(t, e) { t.addEventListener("click", function () { !function (t) { navigator.clipboard ? navigator.clipboard.writeText(t.getText()).then(t.success, function () { o(t) }) : o(t) }(e) }) } function o(e) { var t = document.createElement("textarea"); t.value = e.getText(), t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select(); try { var o = document.execCommand("copy"); setTimeout(function () { o ? e.success() : e.error() }, 1) } catch (t) { setTimeout(function () { e.error(t) }, 1) } document.body.removeChild(t) } "undefined" != typeof Prism && "undefined" != typeof document && (Prism.plugins.toolbar ? Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (t) { var e = t.element, o = function (t) { var e = { copy: "Copy", "copy-error": "Press Ctrl+C to copy", "copy-success": "Copied!", "copy-timeout": 5e3 }; for (var o in e) { for (var n = "data-prismjs-" + o, c = t; c && !c.hasAttribute(n);)c = c.parentElement; c && (e[o] = c.getAttribute(n)) } return e }(e), n = document.createElement("button"); n.className = "copy-to-clipboard-button", n.setAttribute("type", "button"); var c = document.createElement("span"); return n.appendChild(c), i("copy"), u(n, { getText: function () { return e.textContent }, success: function () { i("copy-success"), r() }, error: function () { i("copy-error"), setTimeout(function () { !function (t) { window.getSelection().selectAllChildren(t) }(e) }, 1), r() } }), n; function r() { setTimeout(function () { i("copy") }, o["copy-timeout"]) } function i(t) { c.textContent = o[t], n.setAttribute("data-copy-state", t) } }) : console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")) }();
"undefined" != typeof Prism && "undefined" != typeof document && document.querySelector && Prism.plugins.toolbar.registerButton("download-file", function (t) { var e = t.element.parentNode; if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-src") && e.hasAttribute("data-download-link")) { var n = e.getAttribute("data-src"), a = document.createElement("a"); return a.textContent = e.getAttribute("data-download-link-label") || "Download", a.setAttribute("download", ""), a.href = n, a } });
