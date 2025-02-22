import { Client } from "langsmith";
import { config } from "../config/config.js";

const examples = [
  // Existing examples
  ["prompt", "expected response"],
];

const client = new Client({
  apiKey: config.langSmithApiKey,
  apiUrl: config.langSmithEndpoint,
});

const datasetName = "Ollychat";

const existingDatasets = [];
for await (const dataset of client.listDatasets()) {
  existingDatasets.push(dataset);
}
const datasetToDelete = existingDatasets.find(
  (dataset) => dataset.name === datasetName,
);

if (datasetToDelete) {
  await client.deleteDataset({ datasetId: datasetToDelete.id });
  console.log(`Deleted existing dataset: ${datasetName}`);
}

const dataset = await client.createDataset(datasetName, {
  description: "A sample dataset in LangSmith.",
});

console.log(`Created new dataset: ${datasetName}`);

const inputs = examples.map(([inputPrompt]) => ({
  question: inputPrompt,
}));
const outputs = examples.map(([, outputAnswer]) => ({
  answer: outputAnswer,
}));

await client.createExamples({
  inputs,
  outputs,
  datasetId: dataset.id,
});

console.log("Added examples to dataset.");
