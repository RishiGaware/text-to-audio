import express from 'express';
import { generateSarvamSpeech } from '../controllers/ttsController.js';

const router = express.Router();

// Define route for Sarvam AI Text to Speech
router.post('/tts/sarvam', generateSarvamSpeech);

export default router;
