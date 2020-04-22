const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal Error'
}

exports.success = function (req, res, message, status) {
    let statusCode = status;
    let statusMessage = message;
    if(!status){
        statusCode = 200;
    }
    if(!message) {
        statusMessage = statusMessage[status];
    }
    res.status(statusCode).send({
        'error': '',
        'body': statusMessage
    });
}

exports.error = function (req, res, error, status, details) {
    console.error(`${new Date()} [New error responde] ${details}`);
    res.status(status || 500).send({
        'error': error,
        'body': ''
    });
}