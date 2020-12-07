##  学习jQuery的设计模式，封装DOM库



>  学习jQuery的设计模式，实现jQuery中的部分操作，封装为一个简单的DOM库

jQuery.js——DOM库

index.html、main.js——测试

* appendTo()  *将匹配的元素插入到目标元素的最后面*

  ```javascript
  $('<ol>创建一个ol</ol>').appendTo($div) 
  ```

* append() *在每个匹配元素里面的末尾处插入参数内容*

  ```javascript
  $('p').append($('<ol>xxxx</ol>'))
  ```

* each() *遍历jQuery对象，为每个匹配元素执行一个函数*

  ```javascript
  $('#test2').find('.child').each((item) => {
      console.log(item);
  });
  ```

* addClass()  *为每个匹配的元素添加指定的样式类名*

  ```javascript
  $('.test').addClass('red').addClass('blue')
  ```

* find() *通过一个选择器，jQuery对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代* 

  ```javascript
  $('#test2').find('.child')
  ```

* parent() *取得匹配元素集合中，每个元素的父元素*

  ```javascript
  $('.child').parent()
  ```

* children() *使用选择器获得匹配元素集合中每个元素的子元素*

  ```javascript
  $('#test2').children()
  ```

* end() *终止在当前对象的操作，并返回匹配的元素的以前状态*

  ```javascript
  $('#test2').find('.child').addClass('green').end().addClass('old');
  ```

  



