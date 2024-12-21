<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;


Route::get('/', function () {
    return view('index');
});

Route::get('/about', [PageController::class, 'about']);
