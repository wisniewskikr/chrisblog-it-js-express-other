$( document ).ready(function() {
    
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    
    $.get( "api/v1/messages/" + id, function( data ) {

        $('#id').val(data.id);
        $('#text').val(data.text);
        
    });

});