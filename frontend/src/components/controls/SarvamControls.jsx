import React from 'react'

const SARVAM_VOICES = [
  { voice_id: 'shubh', name: 'Shubh (Male - Recommended for Hindi/Conversational)' },
  { voice_id: 'ratan', name: 'Ratan (Male - Recommended for English)' },
  { voice_id: 'ishita', name: 'Ishita (Female - Recommended for English)' },
  { voice_id: 'shreya', name: 'Shreya (Female - Recommended for Hindi/Authoritative)' },
  { voice_id: 'arjun', name: 'Arjun (Male - Formal)' },
  { voice_id: 'arvind', name: 'Arvind (Male - Conversational)' },
  { voice_id: 'manan', name: 'Manan (Male - Consistent)' },
  { voice_id: 'maitreyee', name: 'Maitreyee (Female - Informative)' },
  { voice_id: 'pavitra', name: 'Pavitra (Female - Dramatic)' },
  { voice_id: 'aditya', name: 'Aditya (Male)' },
  { voice_id: 'ritu', name: 'Ritu (Female)' },
  { voice_id: 'priya', name: 'Priya (Female)' },
  { voice_id: 'neha', name: 'Neha (Female)' },
  { voice_id: 'rahul', name: 'Rahul (Male)' },
  { voice_id: 'pooja', name: 'Pooja (Female)' },
  { voice_id: 'rohan', name: 'Rohan (Male)' },
  { voice_id: 'simran', name: 'Simran (Female)' },
  { voice_id: 'kavya', name: 'Kavya (Female)' }
];

const SARVAM_LANGUAGES = [
  { code: 'hi-IN', name: 'Hindi (hi-IN)' },
  { code: 'en-IN', name: 'Indian English (en-IN)' },
  { code: 'bn-IN', name: 'Bengali (bn-IN)' },
  { code: 'ta-IN', name: 'Tamil (ta-IN)' },
  { code: 'te-IN', name: 'Telugu (te-IN)' },
  { code: 'kn-IN', name: 'Kannada (kn-IN)' },
  { code: 'ml-IN', name: 'Malayalam (ml-IN)' },
  { code: 'mr-IN', name: 'Marathi (mr-IN)' },
  { code: 'gu-IN', name: 'Gujarati (gu-IN)' },
  { code: 'pa-IN', name: 'Punjabi (pa-IN)' },
  { code: 'or-IN', name: 'Odia (or-IN)' }
];

export default function SarvamControls({
  sarvamModel,
  setSarvamModel,
  sarvamLanguage,
  setSarvamLanguage,
  sarvamSpeaker,
  setSarvamSpeaker,
  sarvamPace,
  setSarvamPace
}) {
  return (
    <div className="engine-controls animate-fade">
      <div className="control-group">
        <label className="control-label">Sarvam AI Model</label>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={sarvamModel}
            onChange={(e) => setSarvamModel(e.target.value)}
          >
            <option value="bulbul:v3">Bulbul v3 (Expressive TTS)</option>
          </select>
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">Target Language</label>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={sarvamLanguage}
            onChange={(e) => setSarvamLanguage(e.target.value)}
          >
            {SARVAM_LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">Speaker / Voice</label>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={sarvamSpeaker}
            onChange={(e) => setSarvamSpeaker(e.target.value)}
          >
            {SARVAM_VOICES.map((v) => (
              <option key={v.voice_id} value={v.voice_id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="control-group slider-row-compact">
        <div className="slider-header">
          <span className="control-label-compact">Voice Pace</span>
          <span className="slider-value-badge badge-speed">{sarvamPace}x</span>
        </div>
        <input 
          type="range" 
          min="0.5" 
          max="2.0" 
          step="0.1" 
          value={sarvamPace} 
          onChange={(e) => setSarvamPace(parseFloat(e.target.value))}
          className="custom-slider slider-speed"
        />
        <span className="slider-hint">Controls the speed of the output voice (0.5x to 2.0x)</span>
      </div>
    </div>
  )
}
