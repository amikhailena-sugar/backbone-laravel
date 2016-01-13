<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('author');
            $table->string('language');
            $table->date('publication_date');
        });
        DB::table('books')->insert([
            'title' => 'All Quiet on the Western Front',
            'author' => 'Erich Maria Remarque',
            'language' => 'German',
            'publication_date' => '1929-01-29'
        ]);
        DB::table('books')->insert([
            'title' => 'Three Men in a Boat (To Say Nothing of the Dog)',
            'author' => 'Jerome Klapka Jerome',
            'language' => 'English',
            'publication_date' => '1889-01-01'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('books');
    }
}
