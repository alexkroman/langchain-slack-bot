# langchain-slack-bot

Starter template to build a basic Slack bot powered by Langchain.

## 🧠 Supported LLM's

- OpenAI
- Anthropic
- [Ollama (tool supporting)](https://ollama.com/search?c=tools)

## Getting Started With Docker

You can use Docker to deploy both the Slack app and CLI app

### Set Your Docker Environment Variables

```bash
cp env-example.sh .env
# Edit .env with your settings
```

### Build the Container

```bash
# Build the docker container
npm run docker:build
```

### Run the Slack App

```bash
# Run the Slack container
npm run docker:run:slack
```

## 🚀 Getting Started Without Docker

### Prerequisites

- node.js
- npm

### Install

```bash
# Clone the repository
git clone https://github.com/alexkroman/langchain-slack-bot.git

cd langchain-slack-bot

# Install dependencies
npm install
```

### Set Your Environment Variables

```bash
cp env-example.sh .env
Edit `.env` with your settings
```

### Installing Slack Integration

1. Create a Slack App:

   - Visit [Slack API](https://api.slack.com/apps)
   - Click "Create New App" → "From an app manifest"
   - Select your workspace
   - Copy JSON in `deploy/slack/slack-manifest.json`

2. Install the app to your workspace:

   - Navigate to "Install App" in your Slack App settings
   - Click "Install to Workspace"
   - Grant requested permissions

3. Start the Slack bot:

```bash
# Start the Slack backend
npm run slack:start
```

## 📜 License

langchain-slack-bot is MIT licensed. See [LICENSE](LICENSE.txt) for details.
