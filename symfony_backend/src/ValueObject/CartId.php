<?php

namespace App\ValueObject;

use DigitalCraftsman\Ids\ValueObject\Id;

final class CartId extends Id
{
    public static function fromMixed($id): self
    {
        return parent::fromString((string) $id);
    }
}
