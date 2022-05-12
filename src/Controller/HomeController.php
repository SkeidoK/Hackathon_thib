<?php

namespace App\Controller;

use App\Model\CitationManager;

class HomeController extends AbstractController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        $citationManager = new CitationManager();
        $citation = $citationManager->selectRandCitation();


        return $this->twig->render('Home/index.html.twig', ['citation' => $citation]);
    }
}
