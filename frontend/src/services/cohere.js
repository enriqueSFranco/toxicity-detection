import { API } from '../share/constants.d'

const examples = [
  {
    text: 'Me encanta este canal, siempre hay buen ambiente',
    label: 'good'
  },
  {
    text: '¿Alguien me puede ayudar con una duda sobre el juego?',
    label: 'good'
  },
  {
    text: 'Vaya streamer más aburrido, me duermo',
    label: 'toxic'
  },
  {
    text: '¿Alguien tiene algún código de descuento para este juego?',
    label: 'good'
  },
  {
    text: 'Este streamer es un maestro jugando',
    label: 'good'
  },
  {
    text: '¿Alguien más está teniendo problemas con la calidad del video?',
    label: 'good'
  },
  {
    text: 'No soporto a los jugadores que se quejan todo el tiempo',
    label: 'toxic'
  },
  {
    text: 'Este streamer tiene un carisma increíble',
    label: 'good'
  },
  {
    text: 'Me parece que este juego es una pérdida de tiempo',
    label: 'toxic'
  },
  {
    text: 'Estoy enganchado a este canal, no puedo parar de verlo',
    label: 'good'
  },
  {
    text: 'hola, ¿cómo estás?',
    label: 'bueno'
  },
  {
    text: 'No me gusta mucho este juego',
    label: 'toxico'
  },
  {
    text: '¡Qué buena partida! Gracias por jugar conmigo',
    label: 'bueno'
  },
  {
    text: 'Este chat está muy tranquilo hoy',
    label: 'bueno'
  },
  {
    text: '¡Deberían banear a ese jugador! Es un tramposo',
    label: 'toxico'
  },
  {
    text: '¡Ganamos! ¡Somos los mejores!',
    label: 'bueno'
  },
  {
    text: 'No me gusta jugar en este servidor. El lag es horrible',
    label: 'toxico'
  },
  {
    text: 'Vaya, me perdí lo que acaba de pasar. ¿Alguien me puede contar?',
    label: 'bueno'
  },
  {
    text: '¿Alguien tiene consejos para mejorar en este juego?',
    label: 'bueno'
  },
  {
    text: 'Deberíamos ser más respetuosos con los demás jugadores',
    label: 'bueno'
  },
  {
    text: 'Qué mal juego que estás haciendo',
    label: 'toxico'
  },
  {
    text: '¡Felicidades al ganador! La próxima vez será para mí',
    label: 'bueno'
  },
  {
    text: 'El nivel de toxicidad en este chat está demasiado alto',
    label: 'toxico'
  },
  {
    text: '¡Vamos equipo! ¡Podemos ganar!',
    label: 'bueno'
  },
  {
    text: 'Este juego es mi favorito. Siempre me divierto mucho',
    label: 'bueno'
  },
  {
    text: '¡Ese tiro fue increíble! ¡Qué buena jugada!',
    label: 'bueno'
  },
  {
    text: 'Deberíamos reportar a ese jugador. Está haciendo trampas',
    label: 'toxico'
  },
  {
    text: 'No me gusta cuando hay demasiados jugadores en la partida',
    label: 'toxico'
  },
  {
    text: '¡Vamos equipo! ¡No nos rendiremos!',
    label: 'bueno'
  },
  {
    text: 'Creo que deberíamos cambiar de estrategia. Esta no está funcionando',
    label: 'bueno'
  },
  {
    text: 'Deberíamos tratar de jugar más limpio y sin trampas',
    label: 'bueno'
  },
  {
    text: '¿Cómo se juega a este juego? Soy nuevo aquí',
    label: 'bueno'
  },
  {
    text: '¡Genial! ¡Acabo de desbloquear un nuevo logro!',
    label: 'bueno'
  }
]

export async function toxicityDetection ({ messages }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API.COHERE_API_KEY}`
    },
    body: JSON.stringify({
      model: 'large',
      inputs: messages,
      examples
    })
  }
  try {
    const response = await fetch('https://api.cohere.ai/v1/classify', options)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
