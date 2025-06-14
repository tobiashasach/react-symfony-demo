<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

final class PostDto {
    #[Assert\NotBlank]
    public string $title;
    
    #[Assert\NotBlank]
    public string $text;
}