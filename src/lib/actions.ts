'use server'
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyB82lQvPOgPWNmwUrcB688zYviartfiVSc";
  
  export async function getArrayFromApi(arr: string[]) {

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
      {text: `Given the following object : 
        ${arr}
      
      
      parse it into an array of the following type : 
          const dummyData = [
              { user: "u/unapologeticNerd", text: "I wish there was an app which connects me with personalised.. ", subreddit: "r/ideasfortheidea" },
              { user: "u/Chaitanya", text: "I'm working on an app which will cater to individual exercise asjdf askdf how are you", subreddit: "r/startup_ideas" },
      
              { user: "u/bakshi_dhruv", text: "Not a gym in my area, need an online trainer.", subreddit: "r/fitness" }
          ]
      
      just return the final array as output. nothing else. do not include any variable names here. Just give me a string starting with [ and ending with ]. Ensure this is a valid array. and only one array in the output. GIVE A VALID JSON ONLY.`},
    ];
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });
  
    const response = result.response;
    // console.log(response.text());
    return response.text();
  }


  export async function getTLDR(redditData: string[]) {

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
      {text: `Given the following object : 
        ${redditData}
      
      
      Inside the document key, we have an array of strings, which contain post detail & post comment, along with posted by and what subreddit it has been posted in, parse it into an array of the following type : 
          const dummyData = [
              { summary: (a proper detailed summary of the who;e discussion which has been going on in the reddit post and in the comment we have given) },
              { postedBy: (from the first string inside the document key find the username and add it) },
              { subreddit: (from the first string inside the document key find the subreddit and add it) },
      
              { pointers: string[], it is a array of strings where for each of the discussion we are adding in depth summary of each disccusion and adding it in array of strings}
          ]
      
      just return the final array as output. nothing else. do not include any variable names here. Just give me a string starting with [ and ending with ]. Ensure this is a valid array. and only one array in the output. GIVE A VALID JSON ONLY.`},
    ];
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });
  
    const response = result.response;
    console.log(response.text());
    return response.text();
  }