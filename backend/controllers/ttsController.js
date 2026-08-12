import { SarvamAIClient } from 'sarvamai';

let sarvamClient;

const getSarvamClient = () => {
  if (!sarvamClient && process.env.SARVAM_API_KEY) {
    sarvamClient = new SarvamAIClient({
      apiSubscriptionKey: process.env.SARVAM_API_KEY
    });
  }
  return sarvamClient;
};

/**
 * Controller to handle Sarvam AI Text to Speech conversion
 */
export const generateSarvamSpeech = async (req, res) => {
  const { text, model, target_language_code, speaker, pace } = req.body;

  if (!process.env.SARVAM_API_KEY) {
    return res.status(500).json({ error: 'Sarvam AI API key is not configured on the backend.' });
  }

  try {
    const client = getSarvamClient();
    if (!client) {
      throw new Error('Failed to initialize Sarvam AI client. Key might be invalid or missing.');
    }

    const response = await client.textToSpeech.convert({
      model: model || 'bulbul:v3',
      text: text,
      target_language_code: target_language_code || 'hi-IN',
      speaker: speaker || 'shubh',
      pace: pace || 1.0
    });

    if (response && response.audios && response.audios.length > 0) {
      const base64Audio = response.audios[0];
      const audioBuffer = Buffer.from(base64Audio, 'base64');
      
      res.set({
        'Content-Type': 'audio/wav',
        'Content-Length': audioBuffer.length
      });
      return res.send(audioBuffer);
    } else {
      throw new Error('No audio data returned from Sarvam AI.');
    }
  } catch (error) {
    console.error('Sarvam AI synthesis error:', error);
    const statusCode = error.statusCode || 500;
    const errorMessage = error.body?.error?.message || error.message || 'Error occurred while calling Sarvam AI service.';
    res.status(statusCode).json({ error: errorMessage });
  }
};
