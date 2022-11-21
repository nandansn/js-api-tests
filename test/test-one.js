before('Before Suite Once', () => {
    console.log('Before Hook')
});

after('After Suite', () => {
    console.log("After Hook");
});


beforeEach('Before Test', () => {
    console.log("Before test case");
});

afterEach('After test ', () => {
    console.log("After test case");
});


describe('First Sample Test Suite -1', () => {
    it('Test Case - 1', () => {
        console.log('Hello Test !!!');
    });

    it("Test Case - 2", () => {
      console.log("Hello Test !!!");
    });

    it("Test Case - 3", () => {
      console.log("Hello Test !!!");
    });

    it("Test Case - 4", () => {
      console.log("Hello Test !!!");
    });
});


describe("Second Sample Test Suite -2", () => {
  it("Test Case - 1", () => {
    console.log("Hello Test !!!");
  });

  it("Test Case - 2", () => {
    console.log("Hello Test !!!");
  });

  it("Test Case - 3", () => {
    console.log("Hello Test !!!");
  });

  it("Test Case - 4", () => {
    console.log("Hello Test !!!");
  });
});