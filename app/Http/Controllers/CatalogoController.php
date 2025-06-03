<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Catalogo;
use App\Models\Enlace;

class CatalogoController extends Controller
{
    public function getEnlaces(Request $request)
{
    $url = $request->input('urlprenda');
    $enlaces = Catalogo::where('urlprenda', $url)->paginate(4);

    return response()->json($enlaces);
}

public function deleteEnlace($id)
{
    // 1. Buscar el registro en la tabla Catalogo
    $catalogo = Catalogo::findOrFail($id);

    // 2. Guardar los valores antes de eliminar
    $urlprenda = $catalogo->urlprenda;
    $enlace = $catalogo->enlace;

    // 3. Eliminar el registro de Catalogo
    $catalogo->delete();

    // 4. Eliminar el enlace relacionado en la tabla Enlace
    Enlace::where('urlprenda', $urlprenda)
          ->where('enlace', $enlace)
          ->delete();

    return response()->json(['success' => true]);
}


    public function store(Request $request)
    {
        $validated = $request->validate([
            'urlprenda' => 'required|string',
            'enlace' => 'required|string'
        ]);

        $catalogo = Catalogo::create($validated);

        return response()->json(['success' => true, 'catalogo' => $catalogo], 201);
    }

    

}
