import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../interfaces'

type ResponseError = {
  message: string
}

export default async function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<User | ResponseError>
) {
  const { query } = req
  const { id } = query
  //const filtered = people.filter((p) => p.id === id)

  const filtered = await fetch(`https://api.getmoonbounce.com/api/v3/user/${id}`)
    .then((response) => response.json())
    .then((data) => 
      JSON.stringify(data)
    )
    .catch((error) => {
      console.error(error)
      res.status(500).json({ message: 'Internal server error' })
    })

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}
