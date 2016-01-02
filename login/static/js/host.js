/**
 * Created by alejandrojnm on 12/29/14.
 */
//$('.helios-thumbnail').click(function(){
//    var btn = $(this);
//    //$('#'+btn.data('helios-host')+'-info').toggleClass('hide').slideDown()
//    console.log(btn.data('helios-host'))
//
//})

$('#deployJob').click(function(e){
    var idjob = $('#jobList').val();
    var idhost = $('#jobList').data('host');

    var dataString = "host=" + idhost + "&job=" + idjob;

    $.ajax({
        url: "/job/deploy/",
        type: "POST",
        data: dataString,
        dataType: "json",
        success: function (result) {
            var jobName = result.job.split(':');
            if (result.status == 'OK') {
                $('#addjob').modal('toggle');
                $('.top-right').notify({
                    message: {text: 'Job '+ jobName[0]+':'+jobName[1] +' was deploy success'},
                    closable: false,
                    type: 'bangTidy'
                }).show();
            }
            else {
                console.log('Deploy jobs Fails')
            }
        },
        error: function (jqXHR, status, error) {
            console.log("status:", status);
        }
    });

});

