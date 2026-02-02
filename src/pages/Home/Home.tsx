export default function Home() {
  const w = window as any

  if (!w.Telegram) {
    return <div>NO TELEGRAM OBJECT</div>
  }

  if (!w.Telegram.WebApp) {
    return <div>NO WEBAPP</div>
  }

  return (
    <div>
      <div>WEBAPP OK</div>
      <pre>{JSON.stringify(w.Telegram.WebApp.initDataUnsafe, null, 2)}</pre>
    </div>
  )
}