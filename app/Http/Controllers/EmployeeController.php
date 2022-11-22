<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::all();
        return $employees;
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
            
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'address' => 'required',
            'phone' => 'required|max:10|',
            'position' => 'required',
            'gender' => 'required',

        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $employee = Employee::create([
            
            'firstName' => $request->firstName,
            'lastName' => $request->lastName,
            'email' => $request->email,
            'address' => $request->address,
            'phone' => $request->phone,
            'position' => $request->position,
            'gender' => $request->gender,
        ]);
        echo "Employee: ",$request->firstName," ",$request->lastName;
    }

  
    public function show($id)
    {
        $employee = Employee::find($id);
        return $employee;
    }

    
    public function edit(Employee $employee)
    {
        //
    }

    
    public function update(Request $request)
    {
        $employee = Employee::find($id);
        $employee->firstName = $request->firstName;
        $employee->lastName = $request->lastName;
        $employee->email= $request->email;
        $employee->address = $request->address;
        $employee->phone = $request->phone;
        $employee->position = $request->position;
        $employee->gender = $request->gender;

        $employee->save();
        return $employee;
    }

    
    public function destroy(Request $request)
    {
        Employee::where('id', $request->id)->delete();
       // $employee = Employee::find($id);
        //$employee->delete();
        echo "Registro de empelado eliminado";
    }
}
