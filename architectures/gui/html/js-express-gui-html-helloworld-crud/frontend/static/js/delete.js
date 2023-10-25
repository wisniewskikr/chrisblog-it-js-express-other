$( document ).ready(function() {
    
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    
    $.get( "api/v1/messages/" + id, function( data ) {

        $('#id').val(data.id);
        $('#text').val(data.text);
        
    });

    $('#delete-link').click(function(){

        if(confirm("Are you sure you want to delete this message?")){
            
            let id = $('#id').val();

            $.ajax({
                url: 'api/v1/messages/' + id,
                type: 'DELETE',
                success: function(result) {
                    window.location.replace("/");
                }
            });

        }        
        
    });

});