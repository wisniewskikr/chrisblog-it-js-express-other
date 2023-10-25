$( document ).ready(function() {
    
    $('#create-link').click(function(){
        
        let id = $('#id').val();
        let text = $('#text').val();
        let json = JSON.parse(`{"id": ${id}, "text": "${text}"}`);

        $.ajax({
            url: 'api/v1/messages',
            type: 'POST',
            data: JSON.stringify(json),
            contentType: "application/json",
            success: function(result) {
                window.location.replace("/");
            }
        });
        
    });
    
});