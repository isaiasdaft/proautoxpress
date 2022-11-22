<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    
    public function index()
    {
        $products = Product::all();
        return $products;
    }

   
    public function create()
    {
        //
    }

   
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'nameProd' => 'required|max:50',
            'description' => 'required',
            'price' => 'required',
            'idCategory' => 'required',
            'idBrand' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $product = Product::create([
            'nameProd' => $request->nameProd,
            'description' => $request->description,
            'price' =>$request->price,
            'idCategory' =>$request->idCategory,
            'idBrand' =>$request->idBrand,
        ]);
        echo $request->nameProd;
    }

    
    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }

   
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request)
    {
        $product = Product::find($request->id);
        $product->nameProd = $request->nameProd;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->idCategory = $request->idCategory;
        $product->idBrand = $request->idBrand;

        /**Actualizar la informacion */
        $product->save();
        return $product;
    }

    
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        //$subject = Subject::all();
        echo "Eliminados con exito";
    }
}
