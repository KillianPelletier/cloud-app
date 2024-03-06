import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany({
        include: {
          author: true, // Inclut les informations de l'auteur pour chaque post
        },
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération des posts" });
    }
  } else {
    // Gère les méthodes non supportées
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
