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
       Schema::create('enlaces', function (Blueprint $table) {
    $table->unsignedBigInteger('idusuario');
    $table->string('idprenda');  // cambiar "prenda" a "idprenda" para coincidir con prendas
    $table->string('enlace');
    $table->string('urlprenda');
    $table->timestamps();

    // Clave primaria compuesta
    $table->primary(['idusuario', 'idprenda', 'enlace']);

    // Foreign keys
    $table->foreign('idusuario')->references('id')->on('clientes')->onDelete('cascade');

    // Foreign key compuesta hacia prendas
    $table->foreign(['idusuario', 'idprenda'])->references(['idusuario', 'idprenda'])->on('prendas')->onDelete('cascade');
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enlaces');
    }
};
