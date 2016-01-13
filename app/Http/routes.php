<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tests', function (){
    return view('test-backbone');
});

// Simple REST API
Route::group(['prefix' => 'api/v1'], function () {
    Route::get('/books', ['uses' => 'BookController@index']);
    Route::post('/books', ['uses' => 'BookController@store']);
    Route::get('/books/{id}', ['uses' => 'BookController@show']);
    Route::put('/books/{id}', ['uses' => 'BookController@update']);
    Route::delete('/books/{id}', ['uses' => 'BookController@destroy']);
});