@extends('layouts.plantilla')
@section('title', 'ModaClick')
@section('css')
<link rel="stylesheet" href="{{ asset('css/acceso.css') }}">
@endsection

@section('content')
   <div class="container-fluid">
        <div class="row">
    <nav class="navbar navbar-expand-md navbar-dark bg-orange px-4">
        <a class="navbar-brand d-flex align-items-center" href="{{ route('inicio') }}">
          <img src="ropita/camiseta.png" alt="Logo" style="height: 70px;">
        </a>
      
        <!-- Botón hamburguesa -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <!-- Enlaces colapsables -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarMenu">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="{{ route('register.form') }}">INSCRIBIRSE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="{{ route('login') }}">ACCESO</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="row jeje" style="margin-top: 127px;">
    
        <div class="form-container" style="width: 100%; max-width: 450px;">
            <h2 class="form-title">Iniciar Sesión</h2>
           <form action="{{ route('login') }}" method="POST">
    @csrf

    <input type="email" name="email" class="form-control" placeholder="Correo electrónico" value="{{ old('email') }}" required>
    @error('email')
        <div style="color:red;">* {{ $message }}</div>
    @enderror

    <input type="password" name="password" class="form-control" placeholder="Contraseña" required>
    @error('password')
        <div style="color:red;">* {{ $message }}</div>
    @enderror

    {{-- Mensaje de error general si las credenciales fallan --}}
    @error('login')
        <div style="color:red;" class="mt-2">* {{ $message }}</div>
    @enderror

    <button type="submit" class="btn btn-dark w-100 mt-3">ENTRAR</button>
</form>

            <p class="text-link mt-3">¿No tienes cuenta? <a href="{{ route('register.form') }}">Regístrate</a></p>
        </div>
    
</div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
@endsection