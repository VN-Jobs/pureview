<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/', function () {
//     return view('welcome');
// })->name('frontend.home.index');

Route::get('/', function () {
    return view('frontend.home.index');
})->name('frontend.home.index');

Route::get('/services', function () {
    return view('frontend.service.index');
})->name('frontend.service.index');

Route::get('/services/1', function () {
    return view('frontend.service.show');
})->name('frontend.service.show');

Route::get('/contact', function () {
    return view('frontend.pages.contact');
})->name('frontend.pages.contact');

Route::get('/home3', function () {
    return view('frontend.home3.index');
})->name('frontend.home3.index');

Route::get('/services3', function () {
    return view('frontend.service3.index');
})->name('frontend.service3.index');

Route::get('/services3/1', function () {
    return view('frontend.service3.show');
})->name('frontend.service3.show');
