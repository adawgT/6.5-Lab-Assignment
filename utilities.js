// Define the Alpine.js component function for generating random names
function nameGenerator() {
    return {
      // Array of 10 names
      names: ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Helen", "Irene", "Jack"],
      // Variable to store the current random name
      randomName: '',
      // Function to generate a random index and update the randomName property
      generateRandomName() {
        const index = Math.floor(Math.random() * this.names.length);
        this.randomName = this.names[index];
      }
    }
  }
  