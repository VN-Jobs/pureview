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

Route::get('/blog', function () {})->name('blog');
Route::get('/about', function () {})->name('about');
Route::get('/contact', function () {})->name('contact');
Route::get('category/{slug}', 'CategoryController@show')->name('category.show');
Route::get('pricing', function () {})->name('pricing');

Route::group(['namespace' => 'Backend'], function () {
    Auth::routes();
    Route::group(['prefix' => 'backend', 'as' => 'backend.', 'middleware' => ['auth']], function () {
        Route::get('/', 'HomeController@index')->name('home.index');
        Route::get('/home/{contact}/edit', 'HomeController@edit')->name('home.edit');
        Route::patch('/home/{contact}', 'HomeController@update')->name('home.update');
        Route::delete('home/{contact}', 'HomeController@destroy')->name('home.destroy');
        Route::get('contact/create', 'HomeController@create')->name('home.create');
        Route::post('contact', 'HomeController@store')->name('home.store');
        Route::post('summernote/image', 'HomeController@summernoteImage')->name('summernote.image');
        Route::resource('user', 'UserController');
        Route::resource('category', 'CategoryController', [
            'except' => ['index', 'create', 'show']
        ]);
        Route::get('category/type/{type}', 'CategoryController@type')->name('category.type');
        Route::resource('post', 'PostController');
        Route::resource('product', 'ProductController');
        Route::resource('slide', 'SlideController');
        Route::resource('menu', 'MenuController', [
            'except' => ['show', 'create']
        ]);
        Route::resource('pricing', 'PricingController', [
            'only' => ['index', 'store']
        ]);
        Route::post('menu/serialize', 'MenuController@serialize')->name('menu.serialize');
        Route::resource('config', 'ConfigController', [
            'only' => ['index', 'store']
        ]);
    });
});
