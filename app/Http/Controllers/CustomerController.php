<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    
    public function index()
    {
        $customers = Customer::all();
        return $customers;
    }

   
    public function create()
    {
        //
    }

    
 
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'firstName' => 'required',
            'lastName' => 'required',
            'address' => 'required',
            'phone' => 'required|max:10',
            'gender' => 'required',

        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $customer = Customer::create([
            'email' => $request->email,
            'firstName' => $request->firstName,
            'lastName' => $request->lastName,
            'address' => $request->address,
            'phone' => $request->phone,
            'gender' => $request->gender,
        ]);
        echo $request->name;
    }

    
    public function show($id)
    {
        
        $customer = Customer::find($id);
        return $customer;
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);
        $customer->email = $request->email;
        $customer->firstName = $request->firstName;
        $customer->lastName = $request->lastName;
        $customer->address = $request->address;
        $customer->phone = $request->phone;
        $customer->gender = $request->gender;
        

        /**Actualizar la informacion */
        $customer->save();
        return $customer;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\r  $r
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::find($id);
        $customer->delete();
        $customer = Customer::all();
        return $customer;
    }
}
