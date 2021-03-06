/**
 * Created by alejandrojnm on 11/15/14.
 */
$('.removejob').click(function (e) {

    var btn = $(this);
    var idjob = btn.data('job');

    var dataString = "job=" + idjob;

    $.ajax({
        url: "/job/remove/",
        type: "POST",
        data: dataString,
        dataType: "json",
        success: function (result) {
            var jobName = result.job.split(':');
            if (result.status == 'OK') {
                $('.top-right').notify({
                    message: {html: 'Removing job <strong>' + jobName[0]+':'+jobName[1] + '</strong> success'},
                    closable: false,
                    type: 'heliosmanager'
                }).show();
                btn[0].parentNode.parentNode.remove()
            }
            if(result.status == 'FAIL'){
                $('.top-right').notify({
                    message: {html:'Error removing job <strong>' + jobName[0]+':'+jobName[1] + '</strong> is still deploy'},
                    closable: false,
                    type: 'heliosmanager'
                }).show();
            }
            if(result.status == 'JOB_NOT_FOUND'){
                $('.top-right').notify({
                    message: {html: 'The job <strong>' + jobName[0]+':'+jobName[1] + '</strong> not exist'},
                    closable: false,
                    type: 'heliosmanager'
                }).show();
            }
            //else {
            //    console.log('Undepoy jobs Fails')
            //}
        },
        error: function (jqXHR, status, error) {
            console.log("status:", status);
        }
    });
});

$('.undeploy').click(function (e) {

    var btn = $(this);
    var idhost = btn.data('host');
    var idjob = btn.data('job');

    var dataString = "host=" + idhost + "&job=" + idjob;

    $.ajax({
        url: "/job/undeploy/",
        type: "POST",
        data: dataString,
        dataType: "json",
        success: function (result) {
            var jobName = result.job.split(':');
            if (result.status == 'OK') {
                $('.top-right').notify({
                    message: {html: 'Undepoy job <strong>' + jobName[0]+':'+jobName[1] + '</strong> success'},
                    closable: false,
                    type: 'heliosmanager'
                }).show();
            }
            else {
                console.log('Undepoy jobs Fails')
            }
        },
        error: function (jqXHR, status, error) {
            console.log("status:", status);
        }
    });
});

$('.start-stop').click(function (e) {

    var btn = $(this);
    var idhost = btn.data('host');
    var idjob = btn.data('job');
    var statusjob = btn.data('status');

    var dataString = "host=" + idhost + "&job=" + idjob + "&status=" + statusjob;

    $.ajax({
        url: "/job/start-stop/",
        type: "POST",
        data: dataString,
        dataType: "json",
        success: function (result) {
            var jobName = result.job.split(':');
            if (result.status == 'OK') {
                $('.top-right').notify({
                    message: {html: 'The job <strong>' + jobName[0]+':'+jobName[1] + '</strong> in ' + result.host + ' was ' + statusjob + ' success'},
                    closable: false,
                    type: 'heliosmanager'
                }).show();
            }
            else {
                console.log('Stop job Fails')
            }
        },
        error: function (jqXHR, status, error) {
            console.log("status:", status);
        }
    });
});