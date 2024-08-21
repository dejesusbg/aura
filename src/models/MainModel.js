class MainModel {
  constructor() {
    this.data = {
      balance: 750,
      notes: "Hello, world!",
    };
  }

  getData() {
    return this.data;
  }
}

export default MainModel;
