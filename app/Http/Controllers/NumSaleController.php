<?php

namespace App\Http\Controllers;

use App\Models\NumSale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class NumSaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $numSales = NumSale::all();
        return $numSales;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idEmployee' => 'required',
            'idProduct' => 'required',
            'total' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $numSale = NumSale::create([ 
            'idEmployee' => $request->idEmployee,
            'idProduct' => $request->idProduct,
            'total' => $request->total,
        ]);
        //echo $request->name;
        echo "venta registrada correctamente";
    }

   
    public function show($id)
    {
        $numSale = NumSale::find($id);
        return $numSale;
    }

   
    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $numSale = NumSale::find($id);
        $numSale->idEmployee = $request->idEmployee;
        $numSale->idProduct = $request->idProduct;
        $numSale->total = $request->total;

        $numSale->save();
        return $numSale;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $numSale = NumSale::find($id);
        $numSale->delete();
        echo "Venta Eliminada";
    }
}
