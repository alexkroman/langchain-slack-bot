# Get an OpenAI API key here: https://platform.openai.com
# Provider options: openai, anthropic, ollama (only tool calling models supported like llama 3.1)
# Some model options I've tested: gpt-4o, gpt-4o-mini, claude-3-5-sonnet-20241022, llama3.1
MODEL_PROVIDER=openai
MODEL_API_KEY=
MODEL=gpt-4o
# If using Ollama not on localhost
#MODEL_BASE_URL=localhost

# Get a Tavily API key here: https://app.tavily.com/ or leave it empty to disable the Tavily tool
TAVILY_API_KEY=

# Recommend leaving as is
GRAPH_RECURSION_LIMIT=5

# You can set LANGSMITH_TRACING to true to help me (alex) diagnose issues you are having with the app
LANGSMITH_TRACING=false
LANGCHAIN_VERBOSE=false

# This is the API key for OllyChat so users can send up LLM traces when they run into issues
LANGSMITH_API_KEY=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
LANGSMITH_ENDPOINT="https://api.smith.langchain.com"
LANGSMITH_PROJECT="ollychat"

# Only needed for deploying Ollychat as a Slack bot
SLACK_BOT_TOKEN=
SLACK_SIGNING_SECRET=
SLACK_APP_TOKEN=
PORT=3000