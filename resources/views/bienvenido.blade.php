@extends('layouts.plantilla')
@section('title', 'ModaClick')
@section('css')
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
@endsection


@section('content')

<div class="container-fluid">
        <div class="row nav">
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
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-inline">
                    @csrf
                    <button type="submit" class="nav-link btn btn-link text-white" style="text-decoration: none;">
                    CERRAR SESIÓN
                    </button>
                        </form>
                        </li>
                  </ul>
                </div>
              </nav>
        </div>
    
    <header>
        <h1 style="margin-top:15px; ">Bienvenido, {{ $user->nombre }}!</h1>
        <div class="row objetin">
        <div class="col-12 col-md-6 avatar">
            <form action="{{ route('guardar.prenda') }}" method="POST">
                @csrf
            <div class="personaje">
                <img src="ropita/avatar.png" alt="">
                <div id="som"><img src="" alt=""></div>
                <input type="hidden" name="sombreros" value="">
                <div id="cam"><img src="" alt=""></div>
                <input type="hidden" name="camisetas" value="">
                <div id="pan"><img src="" alt=""></div>
                <input type="hidden" name="pantalones" value="">
            </div>
            
                
            <div class="guardarrr d-flex" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 10px;">
        <input type="text" id="formguardar" class="form-control me-2" name="idprendaguardar" style="width: 300px" placeholder="Nuevo nombre de prenda" value="">
        <button class="btn btn-success" type="submit" name="action" value="guardar">
            Guardar
        </button>
        <span class="salto"></span>
        @if(session('error'))
    <div class="text-danger mt-1" style="font-size: 0.9em;">
        {{ session('error') }}
    </div>
@endif
    </div>

    <!-- Cuadro para modificar una prenda existente -->
    <div class="modificarrr d-none" style="margin-top: 20px; display: flex; flex-wrap: wrap; gap: 10px;">
    <h3 id="formodificar" name="idprendamodificar" style="margin-left:20px; margin-right: 20px; "></h3>
    <input type="hidden" id="formodlook" name="modilook" value="12345">
    <button class="btn btn-primary" type="submit" name="action" value="modificar">
        Modificar
    </button>
    <button class="btn btn-danger cancelar">
        Cancelar
    </button>
</div>

        </form>
        </div>
        <div class="col-12 col-md-6 catalogo">
            
            <div class="contenedor">
                <h3 id="titulotipo" style="text-align: center;">Sombreros</h3>
                <div class="envoltorio">
                <div class="tipos">
                    <table>
                        <tr>
                            <td id="tip1"></td>
                        </tr>
                        <tr>
                            <td id="tip2"></td>
                        </tr>
                        <tr>
                            <td id="tip3"></td>
                        </tr>
                    </table>
                </div>
            
                <div class="prendas">
                    <div id="img1">
                        
                    </div>
                    
                    <div id="img2">
                        
                    </div>
                    <div id="img3">
                        
                    </div>
                    <div id="img4">
                        
                    </div>
                    <div id="img5">
                        
                    </div>
                    <div id="img6">
                        
                    </div>
                </div>
            </div>
                <div class="paginas">
                    <table class="numeros">
                        <tr>
                            <td id="btn1">1</td>
                        
                            <td id="btn2">2</td>
                        </tr>
                    </table> 
                    <table class="flechas">
                        <tr>
                            <td id="izquierda"><</td>
                        
                            <td id="derecha">></td>
                        
                            
                        </tr>
                    </table> 
                </div>

            </div>
        </div>
   </div>
    </header>

        <div class="row combinaciones">
            <h1>¡Elije un look!</h1>
            <div id="combi0" class="col-12 col-md-6 col-lg-3">
                
            </div>
            <div id="combi1" class="col-12 col-md-6 col-lg-3">
                
            </div>
            <div id="combi2" class="col-12 col-md-6 col-lg-3">
                
            </div>
            <div id="combi3" class="col-12 col-md-6 col-lg-3">
                
            </div>
        </div>

        <div class="row tresprendas" style="display: none;">
            <h1>Prendas</h1>
            <div id="prend0" style="" class="col-12 col-md-6 col-lg-3">
                
            </div>
            <div id="prend1" class="col-12 col-md-6 col-lg-3">
                
            </div>
            <div id="prend2" class="col-12 col-md-6 col-lg-3">
                
            </div>
            <span class="salto"></span>
            <table class="elenlaces" style="width: 200px;">
                <tr>
                    <td id="btnTodos" style="cursor:pointer;">Todos</td>
    <td id="btnFavoritos" style="cursor:pointer;">Favoritos</td>
                </tr>
            </table>
            <span class="salto"></span>
            <table id="enlaces" style="margin-top:20px; margin-bottom:20px; margin-top:20px; margin-bottom:20px; width: 60%;
  max-width: 60%;
  table-layout: fixed; 
  height:auto;         
  word-wrap: break-word;        
  overflow-wrap: break-word;">
                
        
    </table>
<span class="salto"></span>

    <nav id="paginacion1" style="display: block; margin: 0 auto; width: fit-content;">
    
        
    </nav>
    <span class="salto"></span>
    <table id="favsenlaces" style="margin-top:20px; margin-bottom:20px; width: auto;">

    </table>
    <span class="salto"></span>
    <nav id="paginacion2" style="display: block; margin: 0 auto; width: fit-content;"></nav>
        </div>
    
        <div class="row lista" id="contenido-prendas">
            @include('partials.lista_prendas')
        </div>
    
    <div class="row objeto" style="display: none;">
            <h1>¡Accesorio recomendado!</h1>
            <div id ="item" class="col-12 col-md-6">
                <img src="" alt="">
            </div>
        
        
            <table id="enrecomen" class="col-12 col-md-6">
                
            </table>
            <span class="salto"></span>
            <nav id="pagination3" style="display: block; margin: 0 auto; width: fit-content;"></nav>
    </div>
        
    
    <footer class="row">
        <div class="col-12 text-center">
            Copyright©2025-HugoSu. Todos los derechos reservados.
          </div>
        </footer>
    </div>
    <script src="js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
@endsection
