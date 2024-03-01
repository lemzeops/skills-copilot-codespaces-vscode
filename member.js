function skillsMember() {
  return {
    name: 'John Doe',
    age: 34,
    skills: ['HTML', 'CSS', 'JS'],
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}