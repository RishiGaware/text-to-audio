/**
 * Service to handle Text-to-Speech API calls for OpenAI, ElevenLabs, Azure, and Sarvam AI.
 */

// 1. OpenAI Service Calls
export const synthesizeOpenAISpeech = async ({ key, model, text, voice, format, speed }) => {
  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: model,
      input: text,
      voice: voice,
      response_format: format,
      speed: speed
    })
  });
  
  if (!response.ok) {
    const errText = await response.text();
    let errMsg = errText;
    try {
      const errJson = JSON.parse(errText);
      if (errJson.error && errJson.error.message) errMsg = errJson.error.message;
    } catch (e) {}
    throw new Error(errMsg);
  }
  return await response.blob();
};

export const fetchOpenAIModels = async (key) => {
  const response = await fetch('https://api.openai.com/v1/models', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${key}`
    }
  });
  if (!response.ok) throw new Error(`OpenAI Models API error: status ${response.status}`);
  const data = await response.json();
  return data.data || [];
};

// 2. ElevenLabs Service Calls
export const synthesizeElevenLabsSpeech = async ({ key, voiceId, model, text, stability, similarity }) => {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: {
      'xi-api-key': key,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text,
      model_id: model,
      voice_settings: {
        stability: stability / 100,
        similarity_boost: similarity / 100
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    let errMsg = errText;
    try {
      const errJson = JSON.parse(errText);
      if (errJson.detail && errJson.detail.message) errMsg = errJson.detail.message;
      else if (errJson.message) errMsg = errJson.message;
    } catch (e) {}
    throw new Error(errMsg);
  }
  return await response.blob();
};

export const fetchElevenLabsVoices = async (key) => {
  const response = await fetch('https://api.elevenlabs.io/v1/voices', {
    method: 'GET',
    headers: {
      'xi-api-key': key
    }
  });
  if (!response.ok) throw new Error(`ElevenLabs Voices API error: status ${response.status}`);
  const data = await response.json();
  return data.voices || [];
};

export const fetchElevenLabsModels = async (key) => {
  const response = await fetch('https://api.elevenlabs.io/v1/models', {
    method: 'GET',
    headers: {
      'xi-api-key': key
    }
  });
  if (!response.ok) throw new Error(`ElevenLabs Models API error: status ${response.status}`);
  return await response.json();
};

// 3. Microsoft Azure Service Calls
export const synthesizeAzureSpeech = async ({ key, region, voice, text }) => {
  const response = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3'
    },
    body: `<speak version='1.0' xml:lang='en-US'><voice xml:lang='en-US' name='${voice}'>${text}</voice></speak>`
  });

  if (!response.ok) throw new Error('Azure TTS Service returned an error.');
  return await response.blob();
};

// 4. Sarvam AI Service Calls (Proxied through backend)
export const synthesizeSarvamSpeech = async ({ model, text, languageCode, speaker, pace }) => {
  const response = await fetch('http://localhost:5000/api/tts/sarvam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text,
      model: model,
      target_language_code: languageCode,
      speaker: speaker,
      pace: pace
    })
  });

  if (!response.ok) {
    const errJson = await response.json().catch(() => ({}));
    throw new Error(errJson.error || 'Sarvam AI TTS returned an error.');
  }
  return await response.blob();
};
