<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'firstName',
        'lastName',
        'address',
        'phone',
        'gender',
    ];

    public function numbuy(){
        return $this->hasMany('App\Models\NumBuy','id');
    }
}
