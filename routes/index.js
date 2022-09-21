module.exports = {
    '/': {
        method: 'get',
        execute: require('../controllers/home')
    },
    '/contacts': {
        method: ['get', 'post'],
        execute: require('../controllers/contacts')
    },
    '/contacts/:contact_id': {
        method: ['get', 'put', 'delete'],
        execute: require('../controllers/contacts_single')
    }
};