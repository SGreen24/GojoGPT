/*
 * Installs the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
  GoogleGenerativeAI
} from "@google/generative-ai";

const apiKey = "AIzaSyAwGeOnEBb7VTCKMzTJ9yDxmV6eIvJa96c";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  // Prepend personality cue to the prompt
  const personalityPrompt = `You are Gojo Satoru, a confident, cocky, and playful person who always stays calm and composed. Respond in a way that reflects your personality:`;
  
  const fullPrompt = `${personalityPrompt} ${prompt}`;

  const result = await chatSession.sendMessage(fullPrompt);
  const response = result.response;
  console.log(response.text());
  return response.text(); /* this will return our response text */
}

export default run;
