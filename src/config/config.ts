import { requireEnv } from "../utils/config.js";

import { v4 as uuidv4 } from "uuid";
import * as dotenv from "dotenv";

dotenv.config();

const langsmithTracing = requireEnv("LANGSMITH_TRACING") === "true";
const graphRecursionLimit = requireEnv("GRAPH_RECURSION_LIMIT");
const modelProvider = requireEnv("MODEL_PROVIDER");
const modelApiKey =
  modelProvider != "ollama" ? requireEnv("MODEL_API_KEY") : "";
const tavilyApiKey = process.env.TAVILY_API_KEY || null;
const modelBaseUrl = process.env.MODEL_BASE_URL || "http://localhost:11434";

const tavilyEnabled = !!tavilyApiKey;

export const config = {
  slackBotToken: requireEnv("SLACK_BOT_TOKEN"),
  slackSigningSecret: requireEnv("SLACK_SIGNING_SECRET"),
  slackAppToken: requireEnv("SLACK_APP_TOKEN"),
  port: Number(requireEnv("PORT")),
  modelProvider,
  modelApiKey,
  model: requireEnv("MODEL"),
  prometheusUrl: requireEnv("PROMETHEUS_URL"),
  tavilyApiKey,
  tavilyEnabled,
  modelBaseUrl,
  langsmithTracing,
  langSmithEndpoint: langsmithTracing
    ? requireEnv("LANGSMITH_ENDPOINT")
    : "https://api.smith.langchain.com",
  langSmithApiKey: langsmithTracing ? requireEnv("LANGSMITH_API_KEY") : "",
  langSmithProject: langsmithTracing
    ? requireEnv("LANGSMITH_PROJECT")
    : "langchain-slack-bot",
  logging: !process.execArgv.includes("--no-warnings"),
  configurable: { thread_id: uuidv4(), recursionLimit: graphRecursionLimit },
};
