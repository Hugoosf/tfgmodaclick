<?php

namespace App\Http\Controllers;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showRegisterForm(){
        return view('registro');
    }

    public function register(Request $request)
{
   $request->validate([
    'email' => 'required|email|unique:clientes,email',
    'nombre' => ['required', 'regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', 'max:255'],
    'apellidos' => ['required', 'regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/u', 'max:255'],
    'password' => [
        'required',
        'string',
        'min:6',
        'regex:/[A-Z]/',
        'regex:/[0-9]/',
        'confirmed'
    ],
], [
    'nombre.regex' => 'El nombre solo debe contener letras.',
    'apellidos.regex' => 'Los apellidos solo deben contener letras.',
    'password.regex' => 'La contraseña debe tener al menos 6 caracteres, una mayúscula y un número.',
    'password.min' => 'La contraseña debe tener al menos 6 caracteres.',
    'password.confirmed' => 'La confirmación de la contraseña no coincide.',
]);

    Cliente::create([
        'email' => $request->email,
        'nombre' => $request->nombre,
        'apellidos' => $request->apellidos,
        'password' => $request->password, 
        'is_admin' => false
    ]);

    return redirect()->route('login')->with('success', 'Cuenta creada correctamente.');
}


    public function showloginForm(){
        return view('acceso');
    }


     public function login(Request $request)
{
    // Validación básica de campos
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ], [
        'email.required' => 'El correo electrónico es obligatorio.',
        'email.email' => 'Debe ser un correo válido.',
        'password.required' => 'La contraseña es obligatoria.',
    ]);

    $credentials = $request->only('email', 'password');

    if (Auth::guard('web')->attempt($credentials)) {
        $request->session()->regenerate();

        $cliente = Auth::guard('web')->user();

        // Si es administrador
        if ($cliente->is_admin) {
            return redirect()->route('administrador');
        }

        return redirect()->route('bienvenido');
    }

    // Si falla, volver atrás con error
    return back()->withErrors([
        'login' => 'El correo electrónico o la contraseña no son correctos.',
    ])->withInput();
}

public function web()
    {
       

        return view('logout'); // Redirige al login
    }


}
