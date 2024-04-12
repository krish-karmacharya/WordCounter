// Function to count words in the input sentence
function countWords() {
    // Get the input sentence and remove leading/trailing whitespace
    const sentence = document.getElementById("sentence").value.trim();
  
    // Check if the input sentence is empty
    if (sentence === "") {
      // If empty, alert the user to enter a sentence
      alert("Please enter a sentence");
      return; // Exit the function
    }
  
    // Helper function to filter out empty words
    function check(word) {
      if (word !== "") {
        // Check if the word is not empty
        return word; // Return the word
      }
    }
  
    // Split the sentence into words using regular expression and filter out empty words
    const words = sentence.split(/\s+/).filter(check);
  
    // Count the number of words
    const wordcount = words.length;
    const charCount = sentence.length;
  
    // Display the word count on the webpage
    document.getElementById(
      "wordcount"
    ).innerText = `Number of words: ${wordcount}\n Number od Characters: ${charCount}`;
  
    const textarea = document.getElementById("sentence");
    textarea.style.height = "auto"; // Reset the height to auto to calculate the new height
    textarea.style.height = textarea.scrollHeight + "px"; // Set the height to match the content
  }
  const textarea = document.getElementById("sentence");
  textarea.addEventListener("input", countWords);
  textarea.addEventListener("keyup", countWords);
  