<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class CategoriasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categorias')->delete();

        DB::table('categorias')->insert([
          'id' => 1,
          'nomeBr'=>"Decoração",
          'nomeUs'=>"Decoration",
          'slug'=>"decoracao",
          'descricaoBr'=> " Temos todos os móveis que você precisa para decorar sua casa, do jeito que você sempre sonhou.",
          'descricaoUs'=> "We have everthing to decorate your space!",
          'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('categorias')->insert([
          'id' => 2,
          'nomeBr'=>"Móveis",
          'nomeUs'=>"Forniture",
          'slug'=>"moveis",
          'descricaoBr'=> "Oferecer móveis lindos para deixar seu cantinho cheio de bons momentos!",
          'descricaoUs'=> "We have that furniture you always dreamed about!",
          'created_at' => date("Y-m-d h:i:s"),
        ]);
    }
}
