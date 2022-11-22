<?php

namespace App\Http\Controllers;

use App\Models\NumBuy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class NumBuyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $numbuys = NumBuy::all();
        return $numbuys;
    }

    
    public function create()
    {
        //
    }

   
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idProduct' => 'required',
            'idCustomer' => 'required',
            'total' => 'required',
            'description' => 'required',

        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $numbuy = NumBuy::create([
            'idProduct' => $request->idProduct,
            'idCustomer' => $request->idCustomer,
            'total' => $request->total,
            'description' => $request->description,
        ]);
        //echo $request->name;
        echo "Agregado Correctamente";
    }

   
    public function show($id)
    {
        $numbuy = NumBuy::find($id);
        return $numbuy;
    }

   
    public function edit($id)
    {
        //
    }

   
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'idProduct' => 'required',
            'idCustomer' => 'required',
            'total' => 'required',
            'description' => 'required',

        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $numbuy = NumBuy::find($id);
        $numbuy->idProduct = $request->idProduct;
        $numbuy->idCustomer = $request->idCustomer;
        $numbuy->total = $request->total;
        $numbuy->description = $request->description;

        $numbuy->save();
        return $numbuy;
    }

   
    public function destroy($id)
    {
        $numbuy = NumBuy::find($id);
        $numbuy->delete();
        echo "Registros Eliminados";
    }
}
