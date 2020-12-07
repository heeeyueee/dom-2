// let api = jQuery('.test') //window.xx window 可以省略
// api.addClass('red').addClass('blue') //链式操作
//最终简写
let $p = $('p')

$('.test').addClass('red').addClass('blue')
$('#test2').find('.child').addClass('green').end().addClass('old');
$('#test2').find('.child').each((item) => {
    console.log(item);
});
$('.child').parent().print()
$('#test2').children().print()
console.log($p);
$('<ol>创建一个ol</ol>').appendTo($p)
$('p').append($('<ol>xxxx</ol>'))