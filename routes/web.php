<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectsController;

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

Route::get('/', function () {
    return view('index');
});

Route::get('/landing', function () {
    return view('index-component');
});

Route::get('/skills', function(){
    return ['PHP','javascript','ruby','phyton'];
});

// Route::get('projects/create', [ProjectsController::class,'create']);
Route::get('project', [ProjectsController::class,'index']);
Route::get('project-v2', [ProjectsController::class,'index2']);
Route::get('project-v3', [ProjectsController::class,'index3']);


Route::post('project', [ProjectsController::class,'store']);
Route::delete('project/{projectId}', [ProjectsController::class,'destroy']);
Route::put('project/{projectId}', [ProjectsController::class,'update']);
