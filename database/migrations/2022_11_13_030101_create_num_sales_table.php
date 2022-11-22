<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('num_sales', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idEmployee')->references('id')->on('employees')->onDelete('cascade');
            $table->foreignId('idProduct')->references('id')->on('products')->onDelete('cascade');
            $table->string('total');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('num_sales');
    }
};
