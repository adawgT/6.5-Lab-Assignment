function nameGenerator() {
    return {
      names: ["aaron", "jason", "jayden", "ethan", "kayla", "kite", "thomas", "sam", "julie", "frank", ],
      randomName: '',
      generateRandomName() {
        const index = Math.floor(Math.random() * this.names.length);
        this.randomName = this.names[index];
      },
      showAlert() {
        alert(this.randomName);
      }
    }
  }
  