import { searchTool } from "../tools/search.js";
import { llmReasoningTool } from "../tools/llmReasoning.js";

export const tools = [
  llmReasoningTool,
  searchTool,
].filter((tool) => tool !== null);
