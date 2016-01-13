<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class BookRegistrationRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'author' => 'required',
            'language' => 'required',
            'publication_date' => 'required|date_format:Y-m-d'
        ];
    }
    public function response(array $errors)
    {
        return new \Illuminate\Http\JsonResponse([
            'msg' => 'Invalid data',
            'details' => $errors
        ], 422);
    }
}
