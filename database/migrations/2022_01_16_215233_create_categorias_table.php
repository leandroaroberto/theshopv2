<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categorias', function (Blueprint $table) {
          $table->increments('id');
          $table->string('nomeBr',255);
          $table->string('nomeUs',255);
          $table->string('slug',255)->unique();
          $table->string('foto',255)->nullable()->default('nopic.jpg');
          $table->text('descricaoBr')->nullable();
          $table->text('descricaoUs')->nullable();
          $table->char('status', 1)->default(1);
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
        Schema::dropIfExists('categorias');
    }
}
