
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
<?php $__currentLoopData = $prendas; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $prenda): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="listin">
        <div class="nombre"><?php echo e($prenda->idprenda); ?></div>
        <div class="mod" style="background-image: url('ropita/editar.png'); background-size: 40px 40px; background-position: center; background-repeat: no-repeat;"></div>
        <div class="el" data-idusuario="<?php echo e(Auth::guard('web')->id()); ?>" style="background-image: url('ropita/papelera.png'); background-size: 40px 40px; background-position: center; background-repeat: no-repeat;"></div>
        <div class="imagenes" style='background-image: url("../<?php echo e($prenda->sombreros); ?>"), url("../<?php echo e($prenda->camisetas); ?>"), url("../<?php echo e($prenda->pantalones); ?>"), url("../public/ropita/avatar.png");'></div>
    </div>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<div class="pagination justify-content-center mt-4">
    <?php echo e($prendas->links('pagination::bootstrap-4')); ?>

</div>
  
</body>
</html><?php /**PATH C:\xampp\htdocs\tfg\modaclick\resources\views/partials/lista_prendas.blade.php ENDPATH**/ ?>