<?php

namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class StoreController extends Controller
{
   
    public function index()
    {
        $stores = Store::all();
        return $stores;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'clave' => 'required',
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'manager' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $store = Store::create([
            'clave' => $request->clave,
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
            'manager' => $request->manager,
        ]);
        echo $request->name;
    }

    
    public function show($id)
    {
        $store = Store::find($id);
        return $store;
    }

 
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        $store = Store::find($request->id);
        $store->clave = $request->clave;
        $store->name = $request->name;
        $store->address = $request->address;
        $store->phone = $request->phone;
        $store->email = $request->email;
        $store->manager = $request->manager;

        $store->save();
        return $store;
    }

  
    public function destroy($id)
    {
        $store = Store::find($id);
        $store->delete();
        $store = Store::all();
        return $store;
    }
}
