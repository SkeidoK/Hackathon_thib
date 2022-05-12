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
        $client = HttpClient::create();
        
        $response = $client->request('GET', 'https://api.openchargemap.io/v3/poi?maxresults=500&countrycode=fr&latitude=' . (string)$y . '&longitude=' . (string)$x . '&distance=50&distanceunit=km&compact=true&key=%20da842c89-f490-49ef-993c-f2edbdb63496%20%27');

        $statusCode = $response->getStatusCode();

        if ($statusCode === 200) {
            $bornes = [];
            $bornes = $response->getContent();
            $bornes = $response->toArray();
            $bornes = count($bornes);
            $result = $bornes * 620;
            $trucs = [$result, $bornes];
            return $trucs;
        }
    }

}
