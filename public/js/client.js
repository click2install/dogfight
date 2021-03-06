/**
 * @fileoverview This is the client side script for game.html.
 * @author alvin.lin.dev@gmail.com (Alvin Lin)
 */

var socket = io();
var game = Game.create(socket,
                       $('#container')[0],
                       $('#uiCanvas')[0]);

$(document).ready(function() {
  $.each([$('#gameCanvas'), $('#uiCanvas')], function(i, value) {
      value.prop({
        width: $(window).width(),
        height: $(window).height()
      });
  });

  $('#name-input').focus();
  $('#container').hide();

  $('#name-form').submit(function(e) {
    socket.emit('new-player', {
      name: 'blarg'
    }, function(data) {
      if (data['success']) {
        $('#name-prompt').hide();
        $('#uiCanvas').focus();
      } else {
        window.alert(data['message']);
      }
    });

    e.preventDefault();
    $('#container').show();
    init();
  });

});

function init() {
  game.init();
  game.animate();
}
