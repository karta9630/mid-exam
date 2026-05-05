import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mid-exam/', // 👉 這裡改成 "/你的儲存庫名稱/" (注意前後都要有斜線)
})