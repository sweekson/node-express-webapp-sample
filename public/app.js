/* global $ */
var $item = $('<li class="list-group-item">');
var $todos, $task, $app = $('#app');
$app.on('click', '.btn-add', function () {
  $todos.append($item.clone().append($task.val()));
});
$.when(
  $.get('list.html'), $.get('create.html')
)
.then(function (list, create) {
  $app.append(list[0], create[0]);
  $todos = $('#todos'), $task = $('#task');
});