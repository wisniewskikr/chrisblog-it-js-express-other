$( document ).ready(function() {
    
    $.get( "api/v1/messages", function( data ) {

        if (data.length == 0) {
            displayEmptyMessage();
        } else {
            displayMessagesList(data);
        }
        
    });

});

function displayEmptyMessage() {

    $("#empty").show();
    $("#messages").hide();

    $("#empty").text("There is no messages yet");

}

function displayMessagesList(data) {

    $("#empty").hide();
    $("#messages").show();

    var list = "";
    for(i=0; i<data.length; i++){
        list += `<input type='radio' name='messages' value='${data[i].id}' onclick='handleRadioClick()'>${data[i].text}</input></br>`;
    }
    $("#messages").append(list);

}

function handleRadioClick() {

    $("#menu-texts").hide();
    $("#menu-links").show(); 
    
    let id = $('input[type="radio"]:checked').val();
    $("#view-link").attr("href", "/view?id=" + id);
    $("#create-link").attr("href", "/create");
    $("#update-link").attr("href", "/update?id=" + id);
    $("#delete-link").attr("href", "/delete?id=" + id);
    
}