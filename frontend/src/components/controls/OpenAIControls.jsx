import React from 'react'

export default function OpenAIControls({
  openaiKey,
  setOpenaiKey,
  openaiVoice,
  setOpenaiVoice,
  openaiVoices,
  isSyncingOpenaiVoices,
  syncOpenaiVoices,
  openaiModel,
  setOpenaiModel,
  openaiModels,
  isFetchingOpenaiModels,
  syncOpenaiModels,
  openaiFormat,
  setOpenaiFormat
}) {
  return (
    <div className="engine-controls">
      <div className="control-group">
        <label className="control-label">OpenAI API Key</label>
        <input 
          type="password"
          className="text-input-field"
          placeholder="Paste sk-... API Key"
          value={openaiKey}
          onChange={(e) => setOpenaiKey(e.target.value)}
        />
      </div>
      
      <div className="control-group">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <label className="control-label" style={{ marginBottom: 0 }}>Voice Tone</label>
          {isSyncingOpenaiVoices ? (
            <span style={{ fontSize: '11px', color: 'var(--accent)' }}>🔄 Syncing...</span>
          ) : (
            <button 
              onClick={syncOpenaiVoices} 
              style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '11px', cursor: 'pointer', padding: 0 }}
            >
              Sync Voices
            </button>
          )}
        </div>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={openaiVoice}
            onChange={(e) => setOpenaiVoice(e.target.value)}
          >
            {openaiVoices.map((v) => (
              <option key={v.voice_id} value={v.voice_id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="control-group">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <label className="control-label" style={{ marginBottom: 0 }}>Quality Mode</label>
          {isFetchingOpenaiModels ? (
            <span style={{ fontSize: '11px', color: 'var(--accent)' }}>🔄 Syncing...</span>
          ) : (
            <button 
              onClick={syncOpenaiModels} 
              style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '11px', cursor: 'pointer', padding: 0 }}
            >
              Sync Models
            </button>
          )}
        </div>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={openaiModel}
            onChange={(e) => setOpenaiModel(e.target.value)}
          >
            {openaiModels.map((m) => (
              <option key={m.model_id} value={m.model_id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">Output Audio Format</label>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={openaiFormat}
            onChange={(e) => setOpenaiFormat(e.target.value)}
          >
            <option value="mp3">MP3</option>
            <option value="opus">Opus (Streaming/Low Latency)</option>
            <option value="aac">AAC (Optimized Compression)</option>
            <option value="flac">FLAC (Lossless)</option>
            <option value="wav">WAV (Uncompressed)</option>
            <option value="pcm">PCM (Raw Audio)</option>
          </select>
        </div>
      </div>
    </div>
  )
}
