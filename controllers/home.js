module.exports = function (params) {
    return function (req, res) {
        const queryObject = params.url.parse(req.url, true).query;

        let name;

        if (queryObject.name) {
            name = queryObject.name;
        }
        else {
            name = 'Afreen Amoodi';
        }

        res.send(name);
    };
};