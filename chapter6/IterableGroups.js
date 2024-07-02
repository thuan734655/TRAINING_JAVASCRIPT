class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(member => member !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(iterable) {
      let group = new Group();
      for (let value of iterable) {
        group.add(value);
      }
      return group;
    }
  
    [Symbol.iterator]() {
      let index = 0;
      let members = this.members;
  
      return {
        next() {
          if (index >= members.length) {
            return { done: true };
          } else {
            return { value: members[index++], done: false };
          }
        }
      };
    }
  }
  
  let group = Group.from([10, 20, 30]);
  for (let value of group) {
    console.log(value);
  }
  