const Manager = require("../lib/manager");

describe("Manager", () => {
  // Test for all use cases when initializing a new employee object
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and officeNumber if provided valid arguments", () => {
      const manager = new Manager("Bob", 95210, "bob@gmail.com", 102);

      // Verify that the new object has the correct properties
      expect(manager.name).toEqual("Bob");
      expect(manager.id).toEqual(95210);
      expect(manager.email).toEqual("bob@gmail.com");
      expect(manager.officeNumber).toEqual(102);
      expect(manager.role).toEqual("Manager");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Manager();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an office number", () => {
      const cb = () => new Manager("Sarah", 5192, "sarah2@gmail.com");

      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'officeNumber' to be a non-negative number."
      );

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'officeNumber' is not a number", () => {
        const cb = () => new Manager("Sarah", 5192, "sarah2@gmail.com", "executive suite");
        const err = new Error(
          "Expected parameter 'officeNumber' to be a non-negative number."
        );
  
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if 'id' is less than 0", () => {
        const cb = () => new Manager("Sarah", 5192, "sarah@gmail.com", -164);
        const err = new Error(
          "Expected parameter 'officeNumber' to be a non-negative number."
        );
  
        expect(cb).toThrowError(err);
      });
  });

  describe("getRole", () => {
    it("retrieve 'role' of manager", () => {
        // Create new object to test with
        const manager = new Manager("Joe", 1568, "joe@gmail.com", 101);
        const role = "Manager";
  
        // get the 'role' of the manager object
        const retrievedRole = manager.getRole();
  
        // Verify that the 'role' was properly retrieved
        expect(retrievedRole).toEqual(role);
      });
  });
});
