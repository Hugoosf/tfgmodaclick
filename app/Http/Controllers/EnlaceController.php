<?php

namespace App\Http\Controllers;
use App\Models\Catalogo;
use App\Models\Enlace;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class EnlaceController extends Controller
{
     public function obtenerEnlaces(Request $request)
    {
        $url = $request->input('urlprenda');

        $enlaces = Catalogo::where('urlprenda', $url)->paginate(4);

        return response()->json([
            'links' => $enlaces->items(),
            'pagination' => [
                'current_page' => $enlaces->currentPage(),
                'last_page' => $enlaces->lastPage(),
            ]
        ]);
    }


    public function guardar(Request $request)
{
    

    $validated = $request->validate([
        'idprenda' => 'required|string',
        'enlace' => 'required|string',
        'urlprenda' => 'required|url',
    ]);

    $pos = strpos($validated['urlprenda'], 'ropita');
    if ($pos !== false) {
        $validated['urlprenda'] = substr($validated['urlprenda'], $pos);
    }

    Enlace::create([
        'idusuario' => Auth::id(),
        'idprenda' => $validated['idprenda'],
        'enlace' => $validated['enlace'],
        'urlprenda' => $validated['urlprenda'],
    ]);

    return response()->json(['success' => true]);
}



public function obtenerFavoritos(Request $request)
{
    $idusuario = Auth::id();
    $idprenda = $request->input('idprenda');
    $urlprenda = $request->input('urlprenda');

    $enlaces = Enlace::where('idusuario', $idusuario)
        ->where('idprenda', $idprenda)
        ->where('urlprenda', $urlprenda)
        ->paginate(4); // Laravel pagination, 4 por página

    return response()->json($enlaces);
}


public function eliminar(Request $request)
    {
        $request->validate([
            'idprenda' => 'required|string',
            'enlace' => 'required|string',
        ]);

        $userId = Auth::id();

        Enlace::where('idusuario', $userId)
            ->where('idprenda', $request->idprenda)
            ->where('enlace', $request->enlace)
            ->delete();

        

        return response()->json(['message' => 'Enlaces eliminados correctamente.']);
    }



}
