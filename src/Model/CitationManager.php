<?php

namespace App\Model;

class CitationManager extends AbstractManager
{
    public const TABLE = 'citation';

    public function selectRandCitation(): array|false
    {
        $query = "SELECT * FROM " . self::TABLE . " ORDER BY RAND() LIMIT 1";
        $statement = $this->pdo->prepare($query);
        $statement->execute();

        return $statement->fetch();
    }
}
