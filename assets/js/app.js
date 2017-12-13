
var idcontact = 0;

$(document).ready(function(){    
  $('#modal').hide();
  $('#add').click(function(){
    $('#modal').show();
  });
  $('#close').click(function(){
    $('#modal').hide();
  });

  $('#save').click(function(){
      //Rescatando valores del titulo, comentario y url
      var name = $('#name').val();
      var phone = $('#phone').val();
      var email = $('#email').val();

      $('#contacts').append("<div id='contact_" + idcontact + "' class='contact col s8 offset-s2'>" +
        "<div class = 'card white'>" + 
          "<div class = 'card-content red-text lighten-2'>" +
            "<span class = 'card-title'>" + name + "</span>" +
            "<p>" + phone + "</p>" +
            "<p>" + email + "</p>" +
          "</div>" +
          "<div class = 'card-action'>" + 
            "<a class='waves-effect waves-light btn red lighten-2' id='delete'>Delete</a>"
          + "</div>" +
        "</div>" +
        "</div>");
      $('#modal').hide();
      $('#name').val("");
      $('#phone').val("");
      $('#email').val("");

      $('#delete').click(function(){
        $('#contact_0').remove();
      });
  });
});  



