//     Underscore.js 1.8.2
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

/**
 * underscore.js源码分析
 * @namespace 
 * @description 全部分析使用jsDoc格式注释，方便之后生成文档.
 */

/**
 * underscore.js源码分析
 * 
 * @name 
 * @description 匿名函数传入全局对象this，并执行（闭包）
 * @example
 * ```
 * (function(){
 *    
 * }.call(this));
 * ```
 */

(function() {
  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  // 建立根对象，浏览器中是window，服务器上是exports
  var root = this;

  // Save the previous value of the `_` variable.
  // 保存_变量之前的值
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  // 
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  // 创建速度接入到核心的原型快速参考变量。
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  // 所有的ECMAScript 5的原生函数的实现，我们希望用在这里声明。
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  

}.call(this));
