// pages/api/text.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const response = await fetch("back-end-service.default.svc.cluster.local:80/api/random", { cache: 'force-cache' });

    if (!response.ok) {
      res.status(500).send('La requête à l\'API externe a échoué');
      return ;
    }

    const data = await response.json();
    res.status(200).json({'content': "L'api fonctionne, chiffre " + data.randomValue});
  } catch (error) {
    res.status(500).send('Erreur');
  }
}
