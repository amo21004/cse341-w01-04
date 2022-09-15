module.exports = {
    '/': {
        method: 'get',
        execute: require('../controllers/home')
    },
    '/contacts': {
        method: 'get',
        execute: require('../controllers/contacts')
    },
    '/contacts/*': {
        method: 'get',
        execute: require('../controllers/contacts_single')
    }
}