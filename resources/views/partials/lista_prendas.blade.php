
 <html>
    
<head>
    <style>
        .pagination {
        background-color: none !important;
    }
    .page-item.active .page-link {
        background-color: #fdbd0d !important;
        border-color: #0d6efd !important;
        color: #fff !important;
    }
    .nombre{
        font-size: 20px;
    font-family:Arial, Helvetica, sans-serif;
    }
</style>
</head>
<body>
    

<h1>Tus combinaciones</h1>
@foreach ($prendas as $prenda)
    <div class="listin">
        <div class="nombre">{{ $prenda->idprenda }}</div>
        <div class="mod" style="background-image: url('ropita/editar.png'); background-size: 40px 40px; background-position: center; background-repeat: no-repeat;"></div>
        <div class="el" data-idusuario="{{ Auth::guard('web')->id() }}" style="background-image: url('ropita/papelera.png'); background-size: 40px 40px; background-position: center; background-repeat: no-repeat;"></div>
        <div class="imagenes" style='background-image: url("../{{ $prenda->sombreros }}"), url("../{{ $prenda->camisetas }}"), url("../{{ $prenda->pantalones }}"), url("../public/ropita/avatar.png");'></div>
    </div>
@endforeach
<div class="pagination justify-content-center mt-4">
    {{ $prendas->links('pagination::bootstrap-4') }}
</div>
  
</body>
</html>