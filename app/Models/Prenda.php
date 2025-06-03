<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prenda extends Model
{
    use HasFactory;

    protected $table = 'prendas'; 
    protected $primaryKey = 'idprenda'; 

    public $incrementing = false; 
    protected $keyType = 'string'; 

    protected $fillable = ['idusuario', 'idprenda', 'sombreros', 'camisetas', 'pantalones'];
}

