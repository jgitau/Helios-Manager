/**
 * Created by home on 1/1/2016.
 */
$('.jobs').click(function (e) {
    /*
     $.ajax().always(function () {
     btn.button('reset')
     btn.html('Pending Request');
     });
     */
    var btn = $(this)
    var id = btn.data('id');
    $('.modal-body').html('');
    $('.modal-body').load('/job/show/', {id: id});
    $('#job').modal('toggle')

});