import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🏗️ Bau-Structura Frontend</h1>
      <p>Frontend/Backend Trennung erfolgreich!</p>
      <div style={{ 
        background: '#10b981', 
        color: 'white', 
        padding: '1rem', 
        borderRadius: '8px',
        margin: '1rem 0'
      }}>
        ✅ Frontend läuft auf Vercel<br/>
        ✅ Backend läuft auf bau-structura.de<br/>
        ✅ React funktioniert!
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
