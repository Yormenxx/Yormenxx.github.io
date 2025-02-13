import { showNotification } from './notify.js';

export async function copyToClipboard(alertElement, text) { 
  try {
    await navigator.clipboard.writeText(text);
    showNotification(alertElement, "Se ha copiado al portapapeles"); 
  } catch (error) {
    console.error('Error al copiar: ', error);
    showNotification(alertElement, "Error al copiar");
  }
}