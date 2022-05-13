<?php

namespace App\Controller;

use App\Model\CitationManager;
use App\Model\CitationManager1;

class HomeController extends AbstractController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        $citationManager = new CitationManager();
        $citationManager = new CitationManager1();
        $citation = $citationManager->selectRandCitation();
        $citation1 = $citationManager->selectRandCitation();


        return $this->twig->render('Home/index.html.twig', ['citation' => $citation , 'citation1' => $citation1]);
    }
}
