const Engineer = require("../lib/engineer");

describe("engineer", () => {
  // Test for all use cases when initializing a new employee object
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github if provided valid arguments", () => {
      const engineer = new Engineer("Bob", 95210, "bob@gmail.com", "bobomb");

      // Verify that the new object has the correct properties
      expect(engineer.name).toEqual("Bob");
      expect(engineer.id).toEqual(95210);
      expect(engineer.email).toEqual("bob@gmail.com");
      expect(engineer.github).toEqual("bobomb");
      expect(engineer.role).toEqual("Engineer");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Engineer();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if not provided a github username", () => {
      const cb = () => new Engineer("Sarah", 5192, "sarah2@gmail.com");

      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'github' to be a non-empty string."
      );

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'github' is not a string", () => {
        const cb = () => new Engineer("Sarah", 5192, "sarah2@gmail.com", 512);
        const err = new Error(
          "Expected parameter 'github' to be a non-empty string."
        );
  
        expect(cb).toThrowError(err);
      });
  });

  describe("getGithub", () => {
    it("retrieve 'github' of engineer", () => {
        // Create new object to test with
        const engineer = new Engineer("Joe", 1568, "joe@gmail.com", "joejams");
        const github = "joejams";
  
        // get the 'github' of the engineer object
        const retrievedgithub = engineer.getGithub();
  
        // Verify that the 'github' was properly retrieved
        expect(retrievedgithub).toEqual(github);
      });
  });

  describe("getRole", () => {
    it("retrieve 'role' of engineer", () => {
        // Create new object to test with
        const engineer = new Engineer("Joe", 1568, "joe@gmail.com", "joejams");
        const role = "Engineer";
  
        // get the 'role' of the engineer object
        const retrievedRole = engineer.getRole();
  
        // Verify that the 'role' was properly retrieved
        expect(retrievedRole).toEqual(role);
      });
  });
});
