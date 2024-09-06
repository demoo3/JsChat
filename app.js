"use strict";
$(document).ready(function () {

    $('#me').click(function (e) {
        e.preventDefault();
        if (!$.trim($('#inputme').val()) == '') {
            $('.end').append($('#inputme').val());
        }
        else {
            return
        }
        $('#inputme').val('')
       //let a = b => {
       //    if (!$.trim($('#inputme').val()) == '') {
       //        let vall = $('#inputme').val()
       //            , newH3 = $('<h3> </h3>')
       //            , newDiv = $('<div class="line"> </div>')
       //            , bigDiv = $(`<div class="end">${b}</div>`)
       //        $('newH3').append(vall);
       //        $('newDiv').append(newH3);
       //        $('bigDiv').append(newDiv);
       //        return bigDiv
       //    }
       //    else {
       //        return
       //    }
       //}
       ////$('#messageyou').append(a());
       //$('#messageme').append(a($('#inputme').val()));
       //$('#inputme').val("");
    });
});