class MainModel {
  constructor() {
    this.data = {
      balance: 750,
      notes: [
        {
          title: "title",
          body: "hello, how are u?",
        },
      ],
    };
  }

  getData() {
    return this.data;
  }
}

export default MainModel;
