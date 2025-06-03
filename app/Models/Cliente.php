<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;

class Cliente extends Authenticatable
{
    protected $table = 'clientes';

    protected $fillable = [
        'email',
        'nombre',
        'apellidos',
        'password',
        'is_admin',
    ];

    protected $hidden = [
        'password',
    ];

public function setPasswordAttribute($value)
    {
        // Solo hashear si el valor no está ya hasheado
        if (strlen($value) !== 60 || !preg_match('/^\$2y\$/', $value)) {
            $this->attributes['password'] = Hash::make($value);
        } else {
            $this->attributes['password'] = $value;
        }
    }

}
