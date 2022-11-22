<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstName',
        'lastName',
        'email',
        'address',
        'phone',
        'position',
        'gender',

    ];

    public function NumSale()
    {
        return $this->hasMany('App\Models\NumSale','idEmployee');
    }
}
