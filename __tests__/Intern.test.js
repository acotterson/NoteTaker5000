const Intern = require("../lib/intern");

describe("Intern", () => {
  // Test for all use cases when initializing a new employee object
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and school if provided valid arguments", () => {
      const intern = new Intern("Bob", 95210, "bob@gmail.com", "Harvard");

      // Verify that the new object has the correct properties
      expect(intern.name).toEqual("Bob");
      expect(intern.id).toEqual(95210);
      expect(intern.email).toEqual("bob@gmail.com");
      expect(intern.school).toEqual("Harvard");
      expect(intern.role).toEqual("Intern");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Intern();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if not provided a school", () => {
      const cb = () => new Intern("Sarah", 5192, "sarah2@gmail.com");

      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'school' to be a non-empty string."
      );

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'school' is not a string", () => {
        const cb = () => new Intern("Sarah", 5192, "sarah2@gmail.com", 512);
        const err = new Error(
          "Expected parameter 'school' to be a non-empty string."
        );
  
        expect(cb).toThrowError(err);
      });
  });

  describe("getSchool", () => {
    it("retrieve 'school' of intern", () => {
        // Create new object to test with
        const intern = new Intern("Joe", 1568, "joe@gmail.com", "MIT");
        const school = "MIT";
  
        // get the 'school' of the intern objecdt
        const retrievedSchool = intern.getSchool();
  
        // Verify that the 'github' was properly retrieved
        expect(retrievedSchool).toEqual(school);
      });
  });

  describe("getRole", () => {
    it("retrieve 'role' of intern", () => {
        // Create new object to test with
        const intern = new Intern("Joe", 1568, "joe@gmail.com", "MIT");
        const role = "Intern";
  
        // get the 'role' of the intern
        const retrievedRole = intern.getRole();
  
        // Verify that the 'role' was properly retrieved
        expect(retrievedRole).toEqual(role);
      });
  });
});
