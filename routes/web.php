<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PrendaController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CatalogoController;
use App\Http\Controllers\Auth\LogoutController;


Route::get('/', function () {
    return view('main');
})->name('inicio');


Route::get('register', [AuthController::class, 'showRegisterForm'])->name('register.form');
Route::post('register', [AuthController::class, 'register'])->name('cliente.register');
Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('login', [AuthController::class, 'login']);

Route::get('bienvenido', [HomeController::class, 'bienvenido'])->name('bienvenido')->middleware('auth');
Route::middleware('auth')->group(function () {
    Route::get('administrador', [AdminController::class, 'administrar'])->name('administrador');
    Route::get('api/usuarios', [AdminController::class, 'obtenerUsuarios']);
    Route::post('api/usuario/{id}/rol', [AdminController::class, 'cambiarRol']);
    Route::delete('api/usuario/{id}', [AdminController::class, 'eliminarUsuario']);
});


Route::get('logout-web', [AuthController::class, 'web'])->name('logout-web');
Route::post('logout', [LogoutController::class, 'logout'])->name('logout');
Route::post('api/catalogo/enlaces', [CatalogoController::class, 'getEnlaces']);
Route::delete('api/catalogo/enlaces/{id}', [CatalogoController::class, 'deleteEnlace']);
Route::post('catalogo/crear', [CatalogoController::class, 'store']);
Route::post('catalogo/enlaces', [CatalogoController::class, 'getEnlaces']);
Route::post('obtener-enlaces', [EnlaceController::class, 'obtenerEnlaces']);
Route::post('guardar-enlaces', [EnlaceController::class, 'guardar'])->middleware('auth'); 
Route::post('obtener-favoritos', [EnlaceController::class, 'obtenerFavoritos'])->name('obtener.favoritos');
Route::delete('eliminar-enlaces', [EnlaceController::class, 'eliminar'])->name('enlaces.eliminar');


Route::post('guardar-prenda', [PrendaController::class, 'guardar'])->name('guardar.prenda');

Route::delete('eliminarrr', [PrendaController::class, 'eliminar'])->name('prenda.eliminar');



