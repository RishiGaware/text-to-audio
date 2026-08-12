import React from 'react'

export default function AzureControls({
  azureKey,
  setAzureKey,
  azureRegion,
  setAzureRegion,
  azureVoice,
  setAzureVoice
}) {
  return (
    <div className="engine-controls">
      <div className="control-group">
        <label className="control-label">Azure Service Key</label>
        <input 
          type="password"
          className="text-input-field"
          placeholder="Ocp-Apim-Subscription-Key"
          value={azureKey}
          onChange={(e) => setAzureKey(e.target.value)}
        />
      </div>
      <div className="control-group">
        <label className="control-label">Service Region</label>
        <input 
          type="text"
          className="text-input-field"
          placeholder="e.g. eastus"
          value={azureRegion}
          onChange={(e) => setAzureRegion(e.target.value)}
        />
      </div>
      <div className="control-group">
        <label className="control-label">Voice Character</label>
        <div className="select-wrapper">
          <select 
            className="custom-select"
            value={azureVoice}
            onChange={(e) => setAzureVoice(e.target.value)}
          >
            <option value="en-US-JennyNeural">Jenny (Neural - Female)</option>
            <option value="en-US-GuyNeural">Guy (Neural - Male)</option>
            <option value="en-US-AriaNeural">Aria (Neural - Female)</option>
            <option value="en-GB-SoniaNeural">Sonia (Neural UK - Female)</option>
            <option value="en-GB-RyanNeural">Ryan (Neural UK - Male)</option>
          </select>
        </div>
      </div>
    </div>
  )
}
