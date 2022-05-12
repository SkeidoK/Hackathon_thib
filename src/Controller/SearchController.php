<?php

namespace App\Controller;

use App\Model\SearchManager;


class SearchController extends AbstractController
{
    public function search()
    {
        $chercheur = new SearchManager();
        $ville = $_GET['ville'];
        $recherche = $chercheur->search($ville);
        $ville = $recherche['features']['0']['properties']['city'];

        $x = (string)$recherche['features']['0']['geometry']['coordinates']['0'];
        $y = (string)$recherche['features']['0']['geometry']['coordinates']['1'];

        $bornes = $chercheur->bornes($x, $y);


        return $this->twig->render('Home/index.html.twig', ['x' => $x, 'y' =>$y, 'bornes' => $bornes, 'ville' => $ville]);

    }
}