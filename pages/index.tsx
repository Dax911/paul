import useSWR from 'swr'
import UserComponent from '../components/User'
import { User } from '../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p: User) => (
        <UserComponent key={p.user_id} user={p} />
      ))}
    </ul>
  )
}
