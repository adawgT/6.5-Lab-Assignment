// Define the Alpine.js component function for generating random names
function nameGenerator() {
    return {
      // Array of 10 names
      names: ["aaron", "jason", "jayden", "ethan", "kayla", "kite", "thomas", "sam", "julie", "frank", ],
      // Variable to store the current random name
      randomName: '',
      // Function to generate a random index and update the randomName property
      generateRandomName() {
        const index = Math.floor(Math.random() * this.names.length);
        this.randomName = this.names[index];
      },
      // Function to display an alert with the current random name when the name is clicked
      showAlert() {
        alert(this.randomName);
      }
    }
  }
  