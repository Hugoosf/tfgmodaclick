<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prenda;
use Illuminate\Support\Facades\Auth;

class PrendaController extends Controller
{
    public function guardar(Request $request)
    {
        // Obtenemos el valor del botón que se presionó (guardar o modificar)
        $action = $request->input('action');

        // Procesamos las imágenes de los elementos
        $sombreros = strstr($request->input('sombreros'), 'public/');
        $camisetas = strstr($request->input('camisetas'), 'public/');
        $pantalones = strstr($request->input('pantalones'), 'public/');

        
$idprendaguardar = $request->input('idprendaguardar');

if (is_null($idprendaguardar)) {
    return redirect()->back()->with('error', 'Por favor, dale un nombre a la combinación.');
}

        if ($action == 'guardar') {


            $existePrenda = Prenda::where('idusuario', Auth::id())
            ->where('idprenda', $request->input('idprendaguardar'))
            ->exists();

        if ($existePrenda) {
            // Si ya existe, redirigimos con mensaje de error
            return redirect()->back()->with('error', 'El nombre de prenda ya existe, por favor elige otro.');
        }

                
            // Si el botón es "Guardar", guardamos una nueva prenda
            Prenda::create([
                'idusuario' => Auth::id(),
                'idprenda' => $idprendaguardar,
                'sombreros' => $sombreros,
                'camisetas' => $camisetas,
                'pantalones' => $pantalones,
            ]);

            return redirect()->back()->with('success', 'Prenda guardada correctamente.');
        }

        if ($action == 'modificar') {
            // Si el botón es "Modificar", buscamos la prenda para actualizarla
            $prenda = Prenda::where('idprenda', $request->input('modilook'))
                            ->where('idusuario', Auth::id())
                            ->first();

            if ($prenda) {
                // Actualizamos los valores de la prenda
                $prenda->update([
                    'sombreros' => $sombreros,
                    'camisetas' => $camisetas,
                    'pantalones' => $pantalones,
                ]);

                return redirect()->back()->with('success', 'Prenda modificada correctamente.');
            } else {
                return redirect()->back()->with('error', 'La prenda no existe.');
            }
        }
    }


  public function eliminar(Request $request)
    {
        $idprenda = $request->input('idprenda');
        $idusuario = Auth::id();

        // Elimina todos los registros que coincidan con ambos campos
        Prenda::where('idprenda', $idprenda)
              ->where('idusuario', $idusuario)
              ->delete();

        return response()->json(['success' => true]);
    }


}

