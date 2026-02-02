import { useEffect } from 'react'
import Home from '../pages/Home'
import { useTelegram } from '../shared/hooks/useTelegram'
import { supabase } from '../shared/api/supabase'

function App() {
  const { user } = useTelegram()

  useEffect(() => {
    if (!user) return

    const saveUser = async () => {
      const { error } = await supabase
        .from('telegram_users')
        .upsert({
          id: user.id,
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name
        })

      if (error) {
        console.error('Supabase error:', error)
      }
    }

    saveUser()
  }, [user])

  return <Home />
}


export default App