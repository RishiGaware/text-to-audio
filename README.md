# VoxFlow: Multi-Engine AI Text-To-Speech Studio

VoxFlow is a premium, single-column widescreen Text-to-Speech (TTS) workspace integrating three industry-leading synthesis engines: **ElevenLabs**, **OpenAI TTS**, and **Microsoft Azure AI Speech**. 

Designed with modern aesthetics (glassmorphism, soft gradients, responsive cards), it offers complete slider parameters, native cloud audio generation, and client-side playback controls.

---

## 🚀 Features

### 1. ElevenLabs Studio (Free-Tier Aligned)
* **Safe-List Premade Selector**: Standardized to pre-made voices (*Sarah, Roger, Laura, Charlie, George, Callum, River*) to bypass billing validation errors.
* **Auto-Sync Options**: Dynamic syncing buttons for voices and models in the background.
* **Advanced Settings Block**: Compact sliders for *Stability* and *Clarity / Similarity Boost*.
* **Codecs**: Internally locked to the standard free-tier compliant format (`mp3_44100_128`).

### 2. OpenAI TTS Studio
* **Native API Speed Control**: Speed settings (0.25x - 4.00x) are passed directly to the OpenAI API for realistic, natural speech tempo adjustments instead of electronic pitch shifts.
* **Granular Format Support**: Synthesize audio into six different output codecs: **MP3, Opus, AAC, FLAC, WAV, or PCM**.
* **Dynamic Input Bounds**: Enforces OpenAI's strict `4096` character limit in the UI text box.
* **Visual Sync Action buttons**: Direct matching buttons for preset synchronization.

### 3. Microsoft Azure TTS Studio
* **Neural Voices**: Out-of-the-box support for Azure's high-fidelity characters (*Jenny, Guy, Aria, Sonia, Ryan*).
* **Region Configurator**: Set your regional datacenter endpoint directly (e.g. `eastus`, `westus2`).

### 4. Interactive Utilities
* **Direct Downloads**: Download synthesized files with matching file extensions (`.mp3`, `.wav`, `.aac`, `.flac`, etc.).
* **Custom Audio Visualizer**: Animation wave indicator during active speech playbacks.
* **Local Storage Cache**: Your custom API keys are saved securely in your browser's local cache.

---

## 🛠️ Project Architecture

```
text-to-audio/
├── frontend/               # React + Vite Frontend App
│   ├── src/                # Viewports, logic, styling
│   ├── .env                # Private credentials (Gitignored)
│   └── package.json        # Build scripts
├── backend/                # Express API Proxy Server
│   ├── index.js            # Health check routes
│   └── package.json        # Node scripts
├── package.json            # Root workspace script launcher
└── README.md               # User guide documentation
```

---

## ⚙️ Setup & Installation

### 1. Configure Credentials
Create a `.env` file inside the `frontend` folder to keep your API keys private:

```bash
# Path: frontend/.env
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
```

*Note: Environment files (`.env*`) are automatically ignored in the project's [frontend/.gitignore](frontend/.gitignore) to protect credentials.*

### 2. Run the Studio
From the root workspace directory, install dependencies and start both the frontend and backend simultaneously:

```bash
# Install root, frontend, and backend packages
npm install

# Start both services concurrently
npm run dev
```

* **Frontend Studio**: Running on [http://localhost:5173](http://localhost:5173)
* **Backend Gateway**: Running on [http://localhost:5000](http://localhost:5000)

---

## ⚡ Pay-As-You-Go Pricing Side-by-Side

| Provider | Pricing (Per 1 Million Characters) | Billing Style |
| :--- | :--- | :--- |
| **OpenAI TTS** | **$15.00** (Standard) / **$30.00** (HD) | Usage-based pay-as-you-go |
| **Azure AI Speech** | **$16.00** (Standard Neural) | Usage-based after 500,000 free chars/month |
| **ElevenLabs** | **$110.00 - $300.00** (Starts at $0.11/1k) | Credit tier top-ups |
