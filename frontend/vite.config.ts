import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      'process.env.VITE_FIREBASE_API_KEY': JSON.stringify(
        process.env.VITE_FIREBASE_API_KEY,
      ),
      'process.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(
        process.env.VITE_FIREBASE_AUTH_DOMAIN,
      ),
      'process.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(
        process.env.VITE_FIREBASE_PROJECT_ID,
      ),
      'process.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(
        process.env.VITE_FIREBASE_STORAGE_BUCKET,
      ),
      'process.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
        process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      ),
      'process.env.VITE_FIREBASE_APP_ID': JSON.stringify(
        process.env.VITE_FIREBASE_APP_ID,
      ),
      'process.env.VITE_FIREBASE_MEASUREMENT_ID': JSON.stringify(
        process.env.VITE_FIREBASE_MEASUREMENT_ID,
      ),
    }),
  ],
});
