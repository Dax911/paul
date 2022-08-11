import Link from 'next/link'
import { User } from '../interfaces'

type UserProps = {
  user: User
}

export default function UserComponent({ user }: UserProps) {
  return (
    <li>
      <Link href="/user/[id]" as={`/user/${user.user_id}`}>
        <a>{user.username}</a>
      </Link>
    </li>
  )
}
