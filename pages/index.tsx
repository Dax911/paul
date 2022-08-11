import useSWR from 'swr'
import UserComponent from '../components/User'
import { User } from '../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('https://api.getmoonbounce.com/api/v3/user/1', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      
        <UserComponent key={1} user={data} />
      
    </ul>
  )
}
