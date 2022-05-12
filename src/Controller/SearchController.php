<?php

namespace App\Controller;

use App\Model\SearchManager;


class SearchController extends AbstractController
{
    public function search()
    {
        $chercheur = new SearchManager();
        $recherche = $chercheur->search($_GET['ville']);

        $x = (string)$recherche['features']['0']['geometry']['coordinates']['0'];
        $y = (string)$recherche['features']['0']['geometry']['coordinates']['1'];

        return $this->twig->render('Home/index.html.twig', ['x' => $x, 'y' =>$y]);

    }
}