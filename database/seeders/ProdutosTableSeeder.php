<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class ProdutosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('produtos')->delete();

        //Produto 01
        DB::table('produtos')->insert([
        'id'=> 1,
            'nomeBr'=>"Conjunto com 2 Cadeiras Eames Premium Branca Base Madeira",
            'nomeUs'=>"Set of 2 chairs Eames premium white with a wood base",
            'caracteristicasBr'=>"Altura 81 cm Largura 46 cm Profundidade 51 cm; Altura do assento ao chão 44 cm",
            'caracteristicasUs'=>"Height 81 cm width 46 cm Deep 51 cm; Height from base 44 cm",
            'qtde'=> 20,
            'preco'=> 289.99,
            'fotoDestacada' => 'cadeira.jpg',
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosximagem')->insert([
            'produtos_id'=> 1,
            'foto'=>"cadeira.jpg",
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosximagem')->insert([
            'produtos_id'=> 1,
            'foto'=>"cadeira2.jpg",
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosxcategorias')->insert([
            'produtos_id'=> 1,
            'categorias_id'=> 1,
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosxcategorias')->insert([
            'produtos_id'=> 1,
            'categorias_id'=> 2,
            'created_at' => date("Y-m-d h:i:s"),
        ]);


        //Produto 02
        DB::table('produtos')->insert([
        'id'=> 2,
            'nomeBr'=>"Porta retrato 35,5X27cm Imbuia",
            'nomeUs'=>"Picture frame 35,5X27cm Imbuia",
            'caracteristicasBr'=>"Painel 35,5X27cm Quattro Ritratto Imbuia Com Natural",
            'caracteristicasUs'=>"Panel 35,5X27cm Quattro Ritratto Imbuia Natural",
            'qtde'=> 6,
            'preco'=> 47.99,
            'fotoDestacada' => 'portaRetrato.jpg',
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosximagem')->insert([
            'produtos_id'=> 2,
            'foto'=>"portaRetrato.jpg",
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosxcategorias')->insert([
            'produtos_id'=> 2,
            'categorias_id'=> 1,
            'created_at' => date("Y-m-d h:i:s"),
        ]);


        //Produto 03
        DB::table('produtos')->insert([
        'id'=> 3,
            'nomeBr'=>"Poltrona de Massagem Reclinável Louisiana Couro Sintético Preto Rivatti",
            'nomeUs'=>"Reclining Massage Chair Louisiana Synthetic Leather Black Rivatti",
            'caracteristicasBr'=>"A Poltrona de Massagem Louisiana é exatamente aquilo que você precisa após um cansativo dia de trabalho.",
            'caracteristicasUs'=>"The Louisiana Massage Chair is just what you need after a tiring day at work.",
            'qtde'=> 2,
            'preco'=> 1349.99,
            'fotoDestacada' => 'poltrona3.jpg',
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosximagem')->insert([
            'produtos_id'=> 3,
            'foto'=>"poltrona.jpg",
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosximagem')->insert([
            'produtos_id'=> 3,
            'foto'=>"poltrona2.jpg",
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosximagem')->insert([
            'produtos_id'=> 3,
            'foto'=>"poltrona3.jpg",
            'created_at' => date("Y-m-d h:i:s"),
        ]);

        DB::table('produtosxcategorias')->insert([
            'produtos_id'=> 3,
            'categorias_id'=> 1,
            'created_at' => date("Y-m-d h:i:s"),
        ]);
        DB::table('produtosxcategorias')->insert([
            'produtos_id'=> 3,
            'categorias_id'=> 2,
            'created_at' => date("Y-m-d h:i:s"),
        ]);

    }
}
