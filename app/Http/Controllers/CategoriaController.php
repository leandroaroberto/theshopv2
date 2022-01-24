<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;


class CategoriaController extends Controller
{    

    public function getCategories(Request $request)
    {
        $orderByField = $request->input('lang') == 'Us' ? 'nomeUs' : 'nomeBr';        
        $categorias = Categoria::where('status', 1)
               ->orderBy($orderByField, 'desc')
               ->get();
        return response()->json($categorias, 200);      
    }

    // public function showCategoria($categoria)
    // {
    //   $produtos = DB::table('produtos')
    //         ->join('produtosxcategorias', 'produtosxcategorias.produtos_id', '=', 'produtos.id')
    //         ->join('categorias', 'categorias.id', '=', 'produtosxcategorias.categorias_id')
    //         ->select('produtos.id','produtos.nome', 'produtos.caracteristicas', 'produtos.qtde', 'produtos.preco', 'produtos.fotoDestacada','categorias.nome as categoria','categorias.slug')
    //         ->where('categorias.slug', '=', $categoria)
    //         ->get();

    //   $categorias = self::getCategorias();
    //   return view('categoriaprod')->with(['categorias'=>$categorias, 'cat'=> ucfirst($categoria), 'produtos'=> $produtos]);
    // }
}
