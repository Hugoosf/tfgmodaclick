<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function administrar(Request $request)
    {
        $user = Auth::user();


        return view('administrador', compact('user'));
    }


    public function obtenerUsuarios()
    {
        $authId = Auth::id(); // ID del usuario autenticado
        $usuarios = Cliente::where('id', '!=', $authId)->paginate(4); // Excluye al usuario actual
        return response()->json([
        'data' => $usuarios->items(), // Solo los datos
        'links' => (string) $usuarios->links('pagination::bootstrap-4'), // HTML renderizado
        'current_page' => $usuarios->currentPage(),
        'last_page' => $usuarios->lastPage()
    ]);
    }

public function cambiarRol($id)
{
    $cliente = Cliente::findOrFail($id);
    $cliente->is_admin = !$cliente->is_admin;
    $cliente->save();

    return response()->json(['success' => true, 'nuevo_estado' => $cliente->is_admin]);
}

public function eliminarUsuario($id)
{
    $cliente = Cliente::findOrFail($id);
    $cliente->delete();

    return response()->json(['success' => true]);
}




}
