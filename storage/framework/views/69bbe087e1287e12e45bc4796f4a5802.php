
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
    
        <div class="form-container" style="width: 100%; max-width: 450px;">
            <h2 class="form-title">Iniciar Sesión</h2>
           <form action="<?php echo e(route('login')); ?>" method="POST">
    <?php echo csrf_field(); ?>

    <input type="email" name="email" class="form-control" placeholder="Correo electrónico" value="<?php echo e(old('email')); ?>" required>
    <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
        <div style="color:red;">* <?php echo e($message); ?></div>
    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>

    <input type="password" name="password" class="form-control" placeholder="Contraseña" required>
    <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
        <div style="color:red;">* <?php echo e($message); ?></div>
    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>

    
    <?php $__errorArgs = ['login'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
        <div style="color:red;" class="mt-2">* <?php echo e($message); ?></div>
    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>

    <button type="submit" class="btn btn-dark w-100 mt-3">ENTRAR</button>
</form>

            <p class="text-link mt-3">¿No tienes cuenta? <a href="<?php echo e(route('register.form')); ?>">Regístrate</a></p>
        </div>
    
</div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.plantilla', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\tfg\modaclick\resources\views/acceso.blade.php ENDPATH**/ ?>