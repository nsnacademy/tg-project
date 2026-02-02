import { useTelegram } from '../../shared/hooks/useTelegram'

export default function Home() {
  const { user, tg } = useTelegram()

  console.log('TG:', tg)
  console.log('USER:', user)

  if (!user) {
    return <div>Not in Telegram</div>
  }

  return (
    <div>
      <div>ID: {user.id}</div>
      <div>Username: {user.username}</div>
      <div>Name: {user.first_name}</div>
    </div>
  )
}