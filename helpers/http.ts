import { NextApiRequest } from 'next';

export type ParseRequestResult = {
  heading: string;
  description: string;
};

export const parseRequest = (req: NextApiRequest): ParseRequestResult => {
  if (Object.keys(req.query).length === 0) {
    throw new Error('Missing query parameters.');
  }

  if (!req.query.heading || typeof req.query.heading !== 'string') {
    throw new Error('Query parameter "text" is required.');
  }

  if (!req.query.description || typeof req.query.description !== 'string') {
    throw new Error('Query parameter "description" is required.');
  }

  return {
    heading: req.query.heading,
    description: req.query.description,
  };
};
