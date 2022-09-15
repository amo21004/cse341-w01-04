module.exports = {
    '/': {
        method: 'get',
        execute: require('../controllers/home')
    },
    '/contacts': {
        method: 'get',
        execute: require('../controllers/contacts')
    }
}