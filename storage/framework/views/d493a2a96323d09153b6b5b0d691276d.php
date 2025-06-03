<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $__env->yieldContent('title'); ?></title>
    <?php echo $__env->yieldContent('css'); ?>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link rel="shortcut icon" href="<?php echo e("ropita/sombreros/untitled0.png"); ?>" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">


</head>
<body style="background-color: aqua;">
    <?php echo $__env->yieldContent('content'); ?>
   
</body>
</html><?php /**PATH C:\xampp\htdocs\tfg\modaclick\resources\views/layouts/plantilla.blade.php ENDPATH**/ ?>