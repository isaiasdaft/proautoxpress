<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NumBuy extends Model
{
    use HasFactory;

    protected $fillable = [
        'idProduct',
        'idCustomer',
        'total',
        'description',
    ];

    public function customer(){
        return $this->belongsTo('App\Models\Customer','idCustomer');
    }

    public function product()
    {
        return $this->hasOne('App\Models\Product','idProduct');
    }
}
