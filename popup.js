$(document).ready(function(){
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        $("#input").val(tabs[0].url);
        $("#text").text(tabs[0].title);
        $("#qrcode").qrcode({height:256, width:256,
            text	: $("input").val()
        });	
    })

    $("#input").keyup(function(){
        $("#text").empty();
        $("#qrcode").empty();
        $("#qrcode").qrcode({height:256, width:256,
            text	: $("input").val()
        });	
    })

});
