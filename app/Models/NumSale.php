<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NumSale extends Model
{
    use HasFactory;

    protected $fillable = [
        'idEmployee',
        'idProduct',
        'total',
    ];

    public function product()
    {
        return $this->hasMany('App\Models\Product','id');
    }

    public function employee()
    {
        return $this->belongsTo('App\Models\Employee'.'id');
    }
}
