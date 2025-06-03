
<?php $__env->startSection('title', 'ModaClick'); ?>
<?php $__env->startSection('css'); ?>
<link rel="stylesheet" href="<?php echo e(asset('css/acceso.css')); ?>">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
   <div class="container-fluid">
        <div class="row">
    <nav class="navbar navbar-expand-md navbar-dark bg-orange px-4">
        <a class="navbar-brand d-flex align-items-center" href="<?php echo e(route('inicio')); ?>">
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
              <a class="nav-link text-white" href="<?php echo e(route('register.form')); ?>">INSCRIBIRSE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="<?php echo e(route('login')); ?>">ACCESO</a>
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
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.plantilla', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\tfg\modaclick\resources\views/logout.blade.php ENDPATH**/ ?>