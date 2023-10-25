function displayMessage() {
    
    const name = $('#name').val();
    const message = `Hello World ${name}!`;
    $('#message-text').html(message);
    $('#message').show();
    $('#create-link').hide();
    $('#back-link').show();

}

function hideMessage() {

    $('#name').val("");
    $('#message').hide();
    $('#create-link').show();
    $('#back-link').hide();

}