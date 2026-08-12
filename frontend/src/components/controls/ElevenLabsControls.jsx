import React from 'react'

export default function ElevenLabsControls({
  elevenKey,
  setElevenKey,
  elevenVoiceId,
  setElevenVoiceId,
  elevenVoices,
  isFetchingVoices,
  fetchElevenVoices,
  elevenModel,
  setElevenModel,
  elevenModels,
  isFetchingModels,
  fetchElevenModels,
  elevenLanguage,
  setElevenLanguage,
  elevenStability,
  setElevenStability,
  elevenSimilarity,
  setElevenSimilarity
}) {
  return (
    <div className="engine-controls">
      <div className="control-group">
        <label className="control-label">ElevenLabs API Key</label>
        <input 
          type="password"
          className="text-input-field"
          placeholder="ElevenLabs API Key"
          value={elevenKey}
          onChange={(e) => setElevenKey(e.target.value)}
        />
      </div>
      
      <div className="control-group">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <label className="control-label" style={{ marginBottom: 0 }}>Voice Profile</label>
          {isFetchingVoices ? (
            <span style={{ fontSize: '11px', color: 'var(--accent)' }}>🔄 Syncing...</span>
          ) : (
            <button 
              onClick={fetchElevenVoices} 
              style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '11px', cursor: 'pointer', padding: 0 }}
            >
              Sync Voices
            </button>
          )}
        </div>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={elevenVoiceId}
            onChange={(e) => setElevenVoiceId(e.target.value)}
          >
            {elevenVoices.map((v) => (
              <option key={v.voice_id} value={v.voice_id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="control-group">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <label className="control-label" style={{ marginBottom: 0 }}>Synthesis Model</label>
          {isFetchingModels ? (
            <span style={{ fontSize: '11px', color: 'var(--accent)' }}>🔄 Syncing...</span>
          ) : (
            <button 
              onClick={fetchElevenModels} 
              style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '11px', cursor: 'pointer', padding: 0 }}
            >
              Sync Models
            </button>
          )}
        </div>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={elevenModel}
            onChange={(e) => setElevenModel(e.target.value)}
          >
            {elevenModels.map((m) => (
              <option key={m.model_id} value={m.model_id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">Target Language</label>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={elevenLanguage}
            onChange={(e) => setElevenLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>

      {/* Advanced parameters sliders in a single compact area */}
      <div className="advanced-settings-block">
        <h4 className="settings-section-subtitle">Advanced Voice Settings</h4>
        
        <div className="control-group slider-row-compact">
          <div className="slider-header">
            <span className="control-label-compact">Stability</span>
            <span className="slider-value-badge badge-stability">{elevenStability}%</span>
          </div>
          <input 
            type="range" min="0" max="100" 
            value={elevenStability} 
            onChange={(e) => setElevenStability(parseInt(e.target.value))}
            className="custom-slider slider-stability"
          />
          <span className="slider-hint">Consistent voice vs Expressive</span>
        </div>

        <div className="control-group slider-row-compact">
          <div className="slider-header">
            <span className="control-label-compact">Clarity / Similarity</span>
            <span className="slider-value-badge badge-similarity">{elevenSimilarity}%</span>
          </div>
          <input 
            type="range" min="0" max="100" 
            value={elevenSimilarity} 
            onChange={(e) => setElevenSimilarity(parseInt(e.target.value))}
            className="custom-slider slider-similarity"
          />
          <span className="slider-hint">Closer to original profile</span>
        </div>
      </div>
    </div>
  )
}
