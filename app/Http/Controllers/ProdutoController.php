<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;

class ProdutoController extends Controller
{
    public function index()
    {
        return response()->json(Produto::all(), 200);        
    }

    public function produtoInfo($produto_id)
    {
        $produto = Produto::where('id','=',$produto_id)->first();
        if ($produto)            
            return response()->json($produto, 200);
        else
            return response()->json($produto, 404);
    }

    public function buscarProdutos(Request $request)
    {
        $prod = $request->input('buscarpor');
        $produtos = Produto::where("nome","like","%$prod%")->get();
        if (count($produtos) > 0 )            
            return response()->json($produtos, 200);
        else
            return response()->json($produtos, 404);
    }
}
