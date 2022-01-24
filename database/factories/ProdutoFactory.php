<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;

class ProdutoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nomeBr' => $this->faker->name,
            'nomeUs' => $this->faker->name,
            'caracteristicasBr' => $this->faker->paragraph(2),
            'caracteristicasUs' => $this->faker->paragraph(1),
            'qtde' => $this->faker->randomDigit,
            'preco' => $this->faker->randomFloat(2, 1, 200),            
            'created_at' => now()
        ];

    }
}