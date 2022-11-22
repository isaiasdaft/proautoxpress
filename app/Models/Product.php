<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'nameProd',
        'description',
        'price',
        'idCategory',
        'idBrand',
    ];

    //one to one (StudentSubject-subject)
    public function numbuy()
    {
        return $this->belongsTo('App\Models\NumBuy','idProduct');
    }

    //one to many(Professor-subject)
    public function numsale()
    {
        return $this->belongsTo('App\Models\NumSale','idEmployee');
    }

    //one to many (semester-subject)
    public function brand()
    {
        return $this->belongsTo('App\Models\Brand','id');
    }

    public function category()
    {
        return $this->belongsTo('App\Models\Category','id');
    }
}
