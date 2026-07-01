// ══════════════════════════════════════════════════════════════
// ██  CONFIGURACIÓN CENTRAL DE EQUIPOS                       ██
// ██  Cada equipo del Campa se registra acá                  ██
// ══════════════════════════════════════════════════════════════

const SUPABASE_URL = 'https://ytkblrtutrpfxkjtgvsc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0a2JscnR1dHJwZnhranRndnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MTU5NzcsImV4cCI6MjA5ODQ5MTk3N30.dhXXo3Me30QBg-XPUeDmp4XO0gLZ7LXQJkw6KrKPCzc';
const STORAGE_BUCKET = 'archivos-equipos';

const EQUIPOS_MAP = {
  'lapausa': {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    nombre: 'LA PAUSA FC',
    emoji: '☕'
  }
  // Agregar más equipos:
  // 'loshalcones': {
  //   id: 'uuid-del-equipo-en-supabase',
  //   nombre: 'LOS HALCONES',
  //   emoji: '🦅'
  // }
};
