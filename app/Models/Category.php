<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'description',
        'idStore',
    ];

    public function product()
    {
        return $this->hasMany('App\Models\Product','idCategory');
    }

    public function store()
    {
        return $this->belongsTo('App\Models\Store','id');
    }
}
