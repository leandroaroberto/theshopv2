<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProdutosxPedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produtosxpedidos', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('produtos_id')->unsigned();
          $table->foreign('produtos_id')
                        ->references('id')
                        ->on('produtos')
                        ->onDelete('cascade');
          $table->integer('pedidos_id')->unsigned();
          $table->foreign('pedidos_id')
                        ->references('id')
                        ->on('pedidos')
                        ->onDelete('cascade');
          $table->integer('qtde')->default(0);
          $table->float('valorUnitario', 8, 2);
          $table->timestamps();
          $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produtosx_pedidos');
    }
}
