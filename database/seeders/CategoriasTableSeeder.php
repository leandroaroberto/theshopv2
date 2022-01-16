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
           'nome'=>"Decoração",
           'slug'=>"decoracao",
           'descricao'=> " Temos todos os móveis que você precisa para decorar sua casa, do jeito que você sempre sonhou.",
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('categorias')->insert([
          'id' => 2,
          'nome'=>"Móveis",
          'slug'=>"moveis",
          'descricao'=> "Oferecer móveis lindos para deixar seu cantinho cheio de bons momentos!",
          'created_at' => date("Y-m-d h:i:s"),
        ]);
    }
}
