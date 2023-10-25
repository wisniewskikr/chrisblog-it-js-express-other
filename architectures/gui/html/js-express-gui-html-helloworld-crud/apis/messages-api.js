const Info = require('../models/info')
const messagesService = require('../services/messages-service');

module.exports = {
    handleReadAll: function (res) {
      
        let messages = messagesService.getAll();
        displayMessage(messages, res, 200);

    },
    handleRead: function (req, res) {

        const messageId = parseInt(req.url.substring(req.url.lastIndexOf('/') + 1));
        if (isNaN(messageId)) {
            displayMessage(null, res, 404);
            return;
        }

        const message = messagesService.getById(messageId);
        if (message == null) {
            displayMessage(null, res, 404);
            return;
        }

        displayMessage(message, res, 200);

    },
    handleCreate: function (req, res) {

        messagesService.add(req.body);
        displayMessage(null, res, 200);

    },
    handleUpdate: function (req, res) {

        messagesService.update(req.body);
        displayMessage(null, res, 200);

    },
    handleDelete: function (req, res) {

        const messageId = parseInt(req.url.substring(req.url.lastIndexOf('/') + 1));
        if (isNaN(messageId)) {
            displayMessage(null, res, 404);
            return;
        }

        const messageCurrent = messagesService.getById(messageId);
        if (!messageCurrent) {
            displayMessage(null, res, 404);
            return; 
        }

        messagesService.delete(messageId);
        displayMessage(null, res, 200);

    }

}

function displayMessage(json, res, statusCode) {

    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json));
  
  }