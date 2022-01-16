<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProdutosxPedido extends Model
{
    use HasFactory;
    protected $fillable = [
      'produtos_id','email','qtde', 'valorUnitario',
  ];
}
