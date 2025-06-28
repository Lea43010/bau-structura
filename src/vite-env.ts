/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
  // Weitere env variables hier hinzufügen...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}