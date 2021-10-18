// hexo.extend.filter.register('after_post_render', function (data) {
	
// var attributes = [
// 	'autocomplete="off"',
// 	'autocorrect="off"',
// 	'autocapitalize="off"',
// 	'spellcheck="false"',
// 	'contenteditable="false"'
// ];

// var attributesStr = attributes.join(' ');
//   while (/<figure class="highlight ([a-zA-Z]+)">.*?<\/figure>/.test(data.content)) {
//     data.content = data.content.replace(/<figure class="highlight ([a-zA-Z]+)">.*?<\/figure>/, function () {
//       var language = RegExp.$1 || 'plain'
//       var lastMatch = RegExp.lastMatch
//       lastMatch = lastMatch.replace(/<figure class="highlight /, '<figure class="iseeu highlight /')
//       return '<div class="highlight-wrap"' + attributesStr + 'data-rel="' + language.toUpperCase() + '">' + lastMatch + '</div>'
//     })
//   }
//   return data;
// });

//给a标签添加target属性，点击打开新的标签页
var aTagArr = [].slice.apply(document.getElementsByTagName("a"));
aTagArr.forEach(function (e, i) {
  e.href.indexOf("_blank") > -1 ? e.target = "_blank" : null;
});