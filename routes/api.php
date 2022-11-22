<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\NumBuyController;
use App\Http\Controllers\NumSaleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\PassportAuthController;
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

/*passport*/
//Route::post('register', [PassportAuthController::class, 'register']);
//Route::post('login', [PassportAuthController::class, 'login']);
//Route::get('/user_index', [PassportAuthController::class, 'index']);
//Route::post('/user_delete/{id}', [PassportAuthController::class, 'destroy']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/*store*/
Route::get('/store_index', [StoreController::class, 'index']);
Route::post('/store_insert', [StoreController::class, 'store']);
Route::get('/store_show/{id}', [StoreController::class, 'show']);
Route::put('/store_update/{id}', [StoreController::class, 'update']);
Route::post('/store_delete/{id}', [StoreController::class, 'destroy']);

/*category*/
Route::get('/category_index', [CategoryController::class, 'index']);
Route::post('/category_insert', [CategoryController::class, 'store']);
Route::get('/category_show/{id}', [CategoryController::class, 'show']);
Route::put('/category_update/{id}', [CategoryController::class, 'update']);
Route::post('/category_delete/{id}', [CategoryController::class, 'destroy']);

/*product*/
Route::get('/product_index', [ProductController::class, 'index']);
Route::post('/product_insert', [ProductController::class, 'store']);
Route::get('/product_show/{id}', [ProductController::class, 'show']);
Route::put('/product_update/{id}', [ProductController::class, 'update']);
Route::post('/product_delete/{id}', [ProductController::class, 'destroy']);

/*employee*/
Route::get('/employee_index', [EmployeeController::class, 'index']);
Route::post('/employee_insert', [EmployeeController::class, 'store']);
Route::get('/employee_show/{id}', [EmployeeController::class, 'show']);
Route::put('/employee_update/{id}', [EmployeeController::class, 'update']);
Route::post('/employee_delete', [EmployeeController::class, 'destroy']);

/*customer*/
Route::get('/customer_index', [CustomerController::class, 'index']);
Route::post('/customer_insert', [CustomerController::class, 'store']);
Route::get('/customer_show/{id}', [CustomerController::class, 'show']);
Route::put('/customer_update/{id}', [CustomerController::class, 'update']);
Route::post('/customer_delete/{id}', [CustomerController::class, 'destroy']);

/*brand*/
Route::get('/brand_index', [BrandController::class, 'index']);
Route::post('/brand_insert', [BrandController::class, 'store']);
Route::get('/brand_show/{id}', [BrandController::class, 'show']);
Route::put('/brand_update/{id}', [BrandController::class, 'update']);
Route::post('/brand_delete/{id}', [BrandController::class, 'destroy']);

/*num_buy*/
Route::get('/numbuy_index', [NumBuyController::class, 'index']);
Route::post('/numbuy_insert', [NumBuyController::class, 'store']);
Route::get('/numbuy_show/{id}', [NumBuyController::class, 'show']);
Route::put('/numbuy_update/{id}', [NumBuyController::class, 'update']);
Route::post('/numbuy_delete/{id}', [NumBuyController::class, 'destroy']);

/*num_sale*/
Route::get('/numsale_index', [NumSaleController::class, 'index']);
Route::post('/numsale_insert', [NumSaleController::class, 'store']);
Route::get('/numsale_show/{id}', [NumSaleController::class, 'show']);
Route::put('/numsale_update/{id}', [NumSaleController::class, 'update']);
Route::post('/numsale_delete/{id}', [NumSaleController::class, 'destroy']);

/*passport  */
Route::post('/register', [PassportAuthController::class, 'register']);
Route::post('/login', [PassportAuthController::class, 'login']);
Route::get('/user_index', [PassportAuthController::class, 'index']);
Route::post('/user_delete/{id}', [PassportAuthController::class, 'destroy']);