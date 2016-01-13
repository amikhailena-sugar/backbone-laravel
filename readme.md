This is a simple application which has been written on Laravel 5.1 as a backend platform and has got a simple REST API for implementing home Library.
Backbone 1.2.3 has been used as a frontend framework.

For testing basic conceptions of Backbone it was created some simple tests:
* /resources/assets/js/collection.js - for implementing of work with Collections,
* /resources/assets/js/model.js - for implementing of work with Models,
* /resources/assets/js/events.js - for implementing of work with Events,
* /resources/assets/js/router.js - for implementing of work with Router,
* /resources/assets/js/view.js - for implementing of work with Views
First you have to configure .env file specifying the database parameters. Help - https://laravel.com/docs/5.1/installation#basic-configuration

Then please run next commands:
```shell
$ composer install
$ npm install
$ php artisan migrate
```

All test you can see on this address - /tests.

Open console in your browser and run the tests:
```javascript
runApp.test_events();
runApp.test_model();
runApp.test_collection();
runApp.test_view();
```

Router is running automatically, you just have to change the address adding #test or #test/param