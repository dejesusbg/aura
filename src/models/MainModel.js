class MainModel {
  constructor() {
    this.data = {
      balance: 750,
      notes: [
        {
          title: "title",
          body: "hello owo",
        },
      ],
    };
  }

  getData() {
    return this.data;
  }
}

export default MainModel;
