async function translateText() {
    const inputTextElement = document.getElementById("inputText");
    const outputTextElement = document.getElementById("outputText");
    const sourceLangElement = document.getElementById("sourceLang");
    const targetLangElement = document.getElementById("targetLang");
  
    const textToTranslate = inputTextElement.value.trim(); 
    const sourceLang = sourceLangElement.value;
    const targetLang = targetLangElement.value;
  
    if (textToTranslate === "") {
      alert("Please enter some text to translate.");
      return;
    }
  
    outputTextElement.value = "Translating... Please wait!";
  
    try {
      
      const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=${sourceLang}|${targetLang}`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        
        outputTextElement.value = data.responseData.translatedText;
      } else {
        outputTextElement.value = "Translation failed.";
      }
  
    } catch (error) {
      console.error("Error:", error);
      outputTextElement.value = "An error occurred. Please try again.";
    }
  }
  
  