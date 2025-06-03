<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('prendas', function (Blueprint $table) {
    $table->unsignedBigInteger('idusuario');
    $table->string('idprenda');
    $table->string('sombreros');
    $table->string('camisetas');
    $table->string('pantalones');
    $table->timestamps();

    $table->primary(['idusuario', 'idprenda']); // clave primaria compuesta

    $table->foreign('idusuario')->references('id')->on('clientes')->onDelete('cascade');
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prendas');
    }
};
