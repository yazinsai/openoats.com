export const FAQ: { q: string; a: string }[] = [
  {
    q: "Does a bot join my call?",
    a: "No. OpenOats records on your Mac: your microphone and the audio your Mac plays. Nobody else in the call sees anything.",
  },
  {
    q: "Which meeting apps does it work with?",
    a: "All of them. Zoom, Google Meet, Microsoft Teams, Slack, FaceTime, Discord or a browser tab: if your Mac plays it, OpenOats records it.",
  },
  {
    q: "Do I need an account or an API key?",
    a: "No. The Transcript is made on your Mac with no account and no key. For Notes, pick a model in Settings: a local one like Ollama or LM Studio needs no key, or add a key for OpenAI, OpenRouter, Anthropic, Gemini and others.",
  },
  {
    q: "What happens if my Mac crashes mid-meeting?",
    a: "Audio is written to disk every couple of seconds. The next time OpenOats opens, it recovers the Meeting, marks it as interrupted and processes it as usual. In testing, a killed recording lost 1.1 seconds of audio.",
  },
  {
    q: "Where are my meetings stored?",
    a: "Each Meeting file is a markdown file in the notes folder you choose (~/Documents/OpenOats by default). The audio stays in OpenOats' own folder on your Mac, and you can have it deleted once the file is written.",
  },
  {
    q: "Where did the live transcript and suggestions go?",
    a: "OpenOats 2.0 is a recorder and nothing else, so live features are gone. If you rely on them, OpenOats 1.x stays available on GitHub.",
  },
  {
    q: "What does it cost?",
    a: "Nothing. OpenOats is free and open source under the MIT license.",
  },
];
