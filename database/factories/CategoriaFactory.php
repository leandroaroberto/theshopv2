<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;

class CategoriaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {        
        return [
            'nomeBr'=> $this->faker->name,
            'nomeUs'=> $this->faker->name,
            'slug'=> $this->faker->slug,
            'descricaoBr'=> $this->faker->paragraph(2),
            'descricaoUs'=> $this->faker->paragraph(1),
            'created_at' => now(),
        ];
    }
}
