console.log('Hello Webpack Project');

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') module.hot.accept();
