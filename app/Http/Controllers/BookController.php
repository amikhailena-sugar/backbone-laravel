<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\BookRegistrationRequest;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new JsonResponse(Book::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BookRegistrationRequest $request)
    {
        $book = new Book;
        $book->title = $request->title;
        $book->author = $request->author;
        $book->language = $request->language;
        $book->publication_date = $request->publication_date;
        $book->save();
        return new JsonResponse(['msg' => 'OK', 'id' => $book->id], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new JsonResponse(Book::find($id), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BookRegistrationRequest $request, $id)
    {
        $book = Book::find($id);
        $book->title = $request->title;
        $book->author = $request->author;
        $book->language = $request->language;
        $book->publication_date = $request->publication_date;
        $book->save();
        return new JsonResponse(['msg' => 'OK'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Book::destroy($id);
        return new JsonResponse(['msg' => 'OK'], 200);
    }
}
