import { UserButton, useUser, SignInButton } from '@clerk/clerk-react'

function App() {
  const { isSignedIn } = useUser()

  return (
    <div className="min-h-screen bg-base-100">
      <nav className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TransferLink</a>
        </div>
        <div className="flex-none gap-2">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="btn btn-primary">Aanmelden</button>
            </SignInButton>
          )}
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-emerald-600">Welkom bij TransferLink</h2>
            <p>Klik op de knop hierboven om in te loggen</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
