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
        Schema::create('numbuys', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idProduct')->references('id')->on('products')->onDelete('cascade');
            $table->foreignId('idCustomer')->references('id')->on('customers')->onDelete('cascade');
            $table->string('total');
            $table->string('description');
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
        Schema::dropIfExists('numbuys');
    }
};
