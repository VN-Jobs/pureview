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

Route::get('/services/1', function () {
    return view('frontend.service.show');
})->name('frontend.service.show');

Route::get('/post', function () {
    return view('frontend.post.index');
})->name('frontend.post.index');

Route::get('/post/1', function () {
    return view('frontend.post.show');
})->name('frontend.post.show');

Route::get('/pricing', function () {
    return view('frontend.pages.pricing');
})->name('frontend.pages.pricing');

Route::get('/about', function () {
    return view('frontend.pages.about');
})->name('frontend.pages.about');

Route::get('/contact', function () {
    return view('frontend.pages.contact');
})->name('frontend.pages.contact');
