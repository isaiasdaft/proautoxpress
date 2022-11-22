<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $fillable = [
        'clave', 
        'name', 
        'address', 
        'phone', 
        'email',
        'manager', 
    ];

    public function category()
    {
        return $this->hasMany('App\Models\category','idStore');
    }
}
