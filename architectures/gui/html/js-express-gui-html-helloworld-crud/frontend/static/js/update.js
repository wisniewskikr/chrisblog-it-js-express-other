$( document ).ready(function() {
    
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    
    $.get( "api/v1/messages/" + id, function( data ) {

        $('#id').val(data.id);
        $('#text').val(data.text);
        
    });
    
    $('#update-link').click(function(){
        
        let id = $('#id').val();
        let text = $('#text').val();
        let json = JSON.parse(`{"id": ${id}, "text": "${text}"}`);

        $.ajax({
            url: 'api/v1/messages',
            type: 'PUT',
            data: JSON.stringify(json),
            contentType: "application/json",
            success: function(result) {
                window.location.replace("/");
            }
        });
        
    });
    
});