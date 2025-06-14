<?php

namespace App\Controller;

use App\Dto\PostDto;
use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\Routing\Attribute\Route;

final class PostController extends AbstractController
{
     #[Route('/post/{id<\d+>}', name: 'post_get_one', methods: 'get', format: 'json')]
    public function getOne(Post $post): JsonResponse
    {
        return $this->json($post);
    }

    #[Route('/post', name: 'post_get', methods: 'get', format: 'json')]
    public function get(
        #[MapEntity(class: Post::class, expr: 'repository.findBy({}, {"createdAt": "DESC"})')]
        iterable $post
    ): JsonResponse
    {
        return $this->json($post);
    }

    #[Route('/post', name: 'post_post', methods: 'post', format: 'json')]
    public function post(
        #[MapRequestPayload] 
        PostDto $postDto,
        EntityManagerInterface $entityManager
    ): JsonResponse
    {
        $post = new Post();
        $post->setTitle($postDto->title);
        $post->setText($postDto->text);

        $entityManager->persist($post);
        $entityManager->flush();

        return $this->json($post);
    }

    #[Route('/post/{id<\d+>}', name: 'post_delete', methods: 'delete', format: 'json')]
    public function delete(
        Post $post,
        EntityManagerInterface $entityManager
    ): JsonResponse
    {
        $entityManager->remove($post);
        $entityManager->flush();

        return $this->json($post);
    }
}
