require('babel-register');

const router = require('./App').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('https://dgmexpress.com')
        .save('./sitemap.xml')
);
