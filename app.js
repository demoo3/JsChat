"use strict";
$(document).ready(function () {

    $('#me').click(function (e) {
        e.preventDefault()
        let a = b => {
            if (!$.trim($('#inputme').val()) == '') {
                $('.end').append(`<h3>${b}</h3>`);
            }
            else {
                return
            }
        }
        //$('#messageyou').append(a());
        $('#messageme').append(a($('#inputme').val()));
        $('#inputme').val("")
        document.querySelector("#messageme").scrollTo(0, document.querySelector("#messageme").scrollHeight)
    });
    $('#you').click(function (e) {
        e.preventDefault()
        let a = b => {
            if (!$.trim($('#inputyou').val()) == '') {
                $('.end').append(`<h3>${b}</h3>`);
            }
            else {
                return
            }
        }
        //$('#messageyou').append(a());
        $('#messageyou').append(a($('#inputyou').val()))
        $('#inputyou').val("")
        document.querySelector("#messageyou").scrollTo(0, document.querySelector("#messageyou").scrollHeight)
    });
    //
    //$('#me').click(function (e) {
    //    e.preventDefault()
    //    function a(b){
    //        if (!$.trim($('#inputme').val()) == '') {
    //            let vall = $('#inputme').val()
    //                , newH3 = $('<h3> </h3>')
    //                , newDiv = $('<div class="line"> </div>')
    //                , bigDiv = $(`<div class="end" ${b}> </div>`)
    //            $('newH3').append(vall)
    //            $('newDiv').append(newH3)
    //            $('bigDiv').append(newDiv)
    //            return bigDiv
    //        }
    //        else {
    //            return
    //        }
    //    }
    //    //$('#messageyou').append(a());
    //    $('#messageme').append(a('class="end"'))
    //    $('#inputme').val("")
    //
    //});
});

//let vall = $('#inputme').val()
//    , newH3 = $('<h3> </h3>')
//    , newDiv = $('<div class="line"> </div>')
//    , bigDiv = $(`<div class="end" ${b}> </div>`)
//$('newH3').append(vall)
//$('newDiv').append(newH3)
//$('bigDiv').append(newDiv)
//return bigDiv

