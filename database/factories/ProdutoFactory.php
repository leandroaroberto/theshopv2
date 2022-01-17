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
            'nome' => $faker->name,
            'caracteristicas' => $faker->text,
            'qtde' => $faker->optional()->randomDigit,
            'preco' => $faker->randomNumber(2)
        ];
    }
}
