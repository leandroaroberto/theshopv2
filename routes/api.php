<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\CategoriaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


//Products
Route::get('/products/{id}', [ProdutoController::class, 'produtoInfo']);
Route::get('/products', [ProdutoController::class, 'index']);
Route::post('/products/search', [ProdutoController::class, 'buscarProdutos']);

//Categories
Route::post('/categories', [CategoriaController::class, 'getCategories']);