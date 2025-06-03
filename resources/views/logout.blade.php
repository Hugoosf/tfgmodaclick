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
    
        <div class="form-container" style="width: 100%; max-width: 450px; height:300px">
            <h2 class="form-title">Se ha cerrado la sesión</h2>
           
        </div>
    
</div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
@endsection