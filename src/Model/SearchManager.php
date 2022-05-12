<?php

namespace App\Model;

use Symfony\Component\HttpClient\HttpClient;

class SearchManager extends AbstractManager
{
    public function search($ville)
    {
        $client = HttpClient::create();

        $response = $client->request('GET', 'https://api-adresse.data.gouv.fr/search/?q=' . $ville .  '&type=municipality&autocomplete=1');

        $statusCode = $response->getStatusCode();

        if ($statusCode === 200) {
            $content = [];
            $content = $response->getContent();
            $content = $response->toArray();
            return $content;
        }
    }
    public function bornes($x, $y)
    {
        $x;
        $y;
    }

}
