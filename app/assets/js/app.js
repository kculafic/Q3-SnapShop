$(document).ready(function() {
  'use strict';

  $(".slide-collapse").sideNav({
      menuWidth: 375, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

  $('.modal-trigger').leanModal();

});
