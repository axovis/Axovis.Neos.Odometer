/**
 * Created by kapale on 20.07.15.
 */

$( document ).ready(function(){

    var odometerInit = function(){
        $('.axovis-odometer').each(function(){

            var el = document.querySelector('#' + $(this).attr('id') + ' .odometer');
/*
            console.log(
                ' start-value: ' + $(this).data('start-value') +
                ' // stop-value: ' + $(this).data('stop-value') +
                ' // duration: ' + $(this).data('duration') +
                ' // format: ' + $(this).data('format') +
                ' // theme: ' + $(this).data('theme') +
                ' animation: ' + $(this).data('animation')
            );
*/
            new Odometer({
                el: el,
                value: $(this).data('start-value'),

                // Any option (other than auto and selector) can be passed in here
                duration: $(this).data('duration'),
                format:  $(this).data('format'),
                theme: $(this).data('theme'),
                animation: $(this).data('animation')
            })
                .update($(this).data('stop-value'));
        });
    };

    odometerInit();



    if (typeof document.addEventListener === 'function') {
        document.addEventListener('Neos.PageLoaded', function() {
            odometerInit();
        }, false);
    }
});