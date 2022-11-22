<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    
    public function index()
    {
        $brands = Brand::all();
        return $brands;
    }

   
    public function create()
    {
        //
    }

   
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $semester = Semester::create([
            'name' => $request->name,

        ]);
        echo $request->name;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $brand = Brand::find($id);
        return $brand;
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $brand = Brand::find($request->id);
        $brand->name = $request->name;

        $brand->save();
        return $brand;
    }


    public function destroy($id)
    {
        $brand = Brand::find($id);
        $brand->delete();
        //$subject = Subject::all();
        echo "Eliminado con exito";
    }
}
