import { NextApiResponse, NextApiRequest } from 'next'
import { User } from '../../../interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  return res.status(200)
}
