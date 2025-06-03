<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prenda;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function bienvenido(Request $request)
    {
        $user = Auth::user();
        $prendas = Prenda::where('idusuario', $user->id)->paginate(4);

        if ($request->ajax()) {
        return view('partials.lista_prendas', compact('prendas'))->render();
    }

        return view('bienvenido', compact('user', 'prendas'));
    }





   


}
