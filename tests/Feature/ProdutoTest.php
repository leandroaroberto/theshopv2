<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use App\Models\Produto;

class ProdutoTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Assert showing all products.
     *
     * @return void
     */
    //public function testShouldShowAllProducts(){        
        // $this->get('/api/products', [])
        //     ->assertStatus(200)
        //     ->assertJson([
        //         0 => [                    
        //             'id' => 1,
        //             'name' => 'Francês',
        //             'category' => 1,
        //             'status' => 1

        //         ],
        //         2 => [
        //             'id' => 3, 
        //             "description" => "Pão Caseirinho",                                        
        //         ],
        //         7 => [
        //             'id' => 8, 
        //             'name' => 'Broa Tradicional',                    
        //             'category' => 3
        //         ],
        //         8 => [
        //             'id' => 9,                                        
        //             'prices' => [
        //                 0 => [
        //                     'price' => '3.00'
        //                 ]
        //             ]
        //         ]
        //     ]); 
            
        //     Product::where('status',1)->update(['status' => 0]);
        //     $this->get('/api/products', [])
        //         ->assertStatus(400);
    //}

     /**
     * Assert showing a specific product.
     *
     * @return void
     */
    public function testShouldShowAProduct(){
        // $this->get('/api/products/1', [])
        //     ->assertStatus(200)
        //     ->assertJson([                                   
        //         'id' => 1,
        //         'name' => 'Francês',
        //         'category' => 1,
        //         'status' => 1,
        //         'prices' => [
        //             0 => [
        //                 'price' => '1.00'
        //             ]
        //         ]
        //     ]);

        $this->get('/api/products/abc999', [])
            ->assertStatus(404);            
    }
}
