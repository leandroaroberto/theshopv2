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
        $this->get('/api/products/', [])
            ->assertStatus(200)
            ->assertJsonCount(0, $key = null);

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
           
        Produto::factory()->create([
            'id' => 25,
            'nome' => 'Tv 50 polegadas',
        ]);

        $this->get('/api/products/25', [])
            ->assertStatus(200)
            ->assertJson([
                'nome' => 'Tv 50 polegadas',
            ]);
    }

    /**
     * Assert search a product by its name.
     *
     * @return void
     */
    public function testShouldSearchByProductName(){
       $this->post('/api/products/search', ['buscarpor' => 'tv 50'])
            ->assertStatus(404)
            ->assertJsonCount(0, $key = null);
        
        Produto::factory()->create([            
            'nome' => 'Tv 50 polegadas',
        ]);
        Produto::factory()->create([            
            'nome' => 'Tv 32 polegadas LED',
        ]);
        Produto::factory()->count(10)->create(); 

        $this->post('/api/products/search', ['buscarpor' => 'tv'])
            ->assertStatus(200)
            ->assertJsonCount(2, $key = null);

        $this->post('/api/products/search', ['buscarpor' => 'tv 50'])
            ->assertStatus(200)
            ->assertJsonCount(1, $key = null);
    }
}
