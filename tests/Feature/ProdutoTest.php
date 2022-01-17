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
    public function testShouldShowAllProducts(){                
        Produto::factory()->count(3)->create();
        
        $this->get('/api/products/', [])
            ->assertStatus(200)
            ->assertJsonCount(3, $key = null);
    }

     /**
     * Assert showing a specific product.
     *
     * @return void
     */
    public function testShouldShowAProduct(){                               
        $this->get('/api/products/abc999', [])
            ->assertStatus(404);    
            
            
        // $response->assertJsonStructure([
        //     'user' => [
        //         '*' => [
        //             'name',
        //             'age',
        //             'location'
        //         ]
        //     ]
        // ]);

    }
}
