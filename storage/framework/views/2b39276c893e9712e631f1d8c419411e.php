
<?php $__env->startSection('title', 'ModaClick'); ?>
<?php $__env->startSection('css'); ?>
<link rel="stylesheet" href="<?php echo e(asset('css/style.css')); ?>">
<?php $__env->stopSection(); ?>


<?php $__env->startSection('content'); ?>
<div class="container-fluid">
  <!-- NAVBAR -->
  <div class="row nav">
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
                    <a class="nav-link text-white" href="<?php echo e(route('logout')); ?>" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        CERRAR SESIÓN
                    </a>

                        <form id="logout-form" action="<?php echo e(route('logout')); ?>" method="POST" style="display: none;">
                        <?php echo csrf_field(); ?>
                        </form>
                        </li>
                  </ul>
                </div>
              </nav>
        </div>

  <!-- CONTENIDO CENTRADO -->
  <div class="container my-4 text-center">
    <header>
      <h1 class="mt-3">Bienvenido, <?php echo e($user->nombre); ?>!</h1>
    </header>

    <h2 class="mb-4" style="margin-top: 50px;">Administración de Usuarios</h2>

    <div class="table-responsive">
      <table id="usuarios" class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>Email</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Administrador</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody id="tabla-usuarios">
          <!-- Se cargan con JS -->
        </tbody>
      </table>
    </div>

    <div id="paginacion" class="my-3" style="display: block; margin: 0 auto; width: fit-content;"></div>

    <!-- Menú de Categorías -->
    <div class="menu d-flex justify-content-center gap-4 my-4 flex-wrap">
      <div data-category="sombreros" class="btn btn-outline-primary">Sombreros</div>
      <div data-category="camis" class="btn btn-outline-primary">Camisetas</div>
      <div data-category="pantalones" class="btn btn-outline-primary">Pantalones</div>
    </div>

    <!-- Galería -->
    <div id="gallery"></div>
  </div>
</div>

<script src="<?php echo e(asset('js/admin.js')); ?>"></script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.plantilla', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\tfg\modaclick\resources\views/administrador.blade.php ENDPATH**/ ?>