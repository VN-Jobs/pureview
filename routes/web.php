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

Route::group([
    'as' => 'frontend.',
    'namespace' => 'Frontend'
], function () {
    Route::get('/', 'HomeController@index')->name('home.index');
    Route::get('/blog', 'PostController@index')->name('blog.index');
    Route::get('/blog/{slug}', 'PostController@show')->name('blog.show');
    Route::get('/category', 'CategoryController@index')->name('category.index');
    Route::get('/category/{slug}', 'CategoryController@show')->name('category.show');

    Route::get('/pricing', function () {
        $compact['__pricings'] = app(\App\Contracts\Repositories\PricingRepository::class)->getData(
            config('common.pricing.limit')
        );
        return view('frontend.page.pricing', $compact);
    })->name('page.pricing');

    Route::get('/about', function () {
        return view('frontend.page.about');
    })->name('page.about');

    Route::get('/contact', function () {
        return view('frontend.page.contact');
    })->name('page.contact');

    Route::post('home/contact', 'HomeController@storeContact')->name('home.contact');
});

// Route::get('category/{slug}', 'CategoryController@show')->name('category.show');

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
