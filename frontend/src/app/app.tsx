import viteLogo from '/vite.svg'
import './app.css'
import { FC } from 'react';

export type AppProps = {}

export const App: FC<AppProps> = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

