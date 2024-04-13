// node --version # Should be >= 18
// npm install @google/generative-ai
import {GoogleGenerativeAI, HarmCategory, HarmBlockThreshold,} from '@google/generative-ai'
// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyCt-CXe1inmCebo-57mewMU9sBjLdgtnQw";
  
  async function run() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const parts = [
      {text: "\n\nHere’s a detailed prompt designed to instruct an AI to process the data entries and produce a structured JSON output including a summary of all data, the user who posted the first entry, the subreddit of the first entry, and pointers extracted from across all entries.Refined AI Prompt for Data SummarizationObjective:\nProcess structured text entries to extract and summarize key information about social media posts, specifically focusing on content summaries, the subreddit of the initial post, the user who posted the first entry, and key discussion points from all entries.Data Format:\nEach data entry contains:A sequential identifier and a numerical relevance score.The subreddit name.A direct URL to the post.A description of the post.Additional details such as vote counts and comments.Instructions for AI Processing:Generate an Overall Summary: Create a cohesive summary that encapsulates the main themes and topics discussed across all the entries.Extract Subreddit of the First Entry: Identify the subreddit from the first data entry and include this in the output.Determine 'Posted By' from the First Entry: Extract the user information (if available) or handle as \"Unknown\" from the first entry.Compile Key Points (Pointers): From the discussions and comments in all entries, extract critical insights or pointers that reflect the core discussions or advice shared.Required Output Format:\n\njson\n{\n    \"summary\": \"string, summarizing the main themes and topics from all entries\",\n    \"posted_by\": \"string, user who posted the first entry or 'Unknown'\",\n    \"subredditPostedIn\": \"string, subreddit of the first entry\",\n    \"pointers\": [\"list of strings, key insights or discussion points from all entries\"]\n}\nExample Application:Feed AI this Prompt: Provide the AI with this prompt and the raw data from the API.AI Processes Data: Based on the prompt instructions, the AI reads through the data, extracts relevant information, and constructs a summary and pointers.Output: The AI outputs a JSON formatted response that aligns with the defined structure, encapsulating the synthesized knowledge and insights from the data.\n\n"},
    ];
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });
  
    const response = result.response;
    console.log(response.text());
  }
  
  run();