'use strict';

const copyTitleAndURL = function(info,tab){
  const title = tab.title;
  const url = tab.url;
  const markdown_syntax = '[' + title + '](' + url + ')';
  const copyArea = document.createElement('textarea');
  copyArea.value = markdown_syntax;
  document.body.appendChild(copyArea);
  copyArea.select();
  document.execCommand('copy');
  copyArea.remove();
}

chrome.contextMenus.create({'title':'Copy title and url for Markdown Syntax','contexts':['all'],'type':'normal','onclick':copyTitleAndURL});
