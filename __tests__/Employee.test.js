const Employee = require("../lib/employee");

describe("Employee", () => {
  // Test for all use cases when initializing a new employee object
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("Bob", 95210, "bob@gmail.com");

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual("Bob");
      expect(employee.id).toEqual(95210);
      expect(employee.email).toEqual("bob@gmail.com");
      expect(employee.role).toEqual("Employee");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Employee();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an id or email", () => {
      const cb = () => new Employee("Sarah");

      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameters 'name' and 'email' to be non-empty strings."
      );

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a name or email", () => {
      const cb = () => new Employee(8295);

      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameters 'name' and 'email' to be non-empty strings."
      );

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a name or id", () => {
      const cb = () => new Employee("sarah@gmail.com");

      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameters 'name' and 'email' to be non-empty strings."
      );

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an email", () => {
      const cb = () => new Employee("Sarah", 8295);

      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameters 'name' and 'email' to be non-empty strings."
      );

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
      const cb = () => new Employee("Sarah", '',"sarah@gmail.com");
      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number."
      );

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a name", () => {
      const cb = () => new Employee(8295, "sarah@gmail.com");
      const err = new Error(
        "Expected parameters 'name' and 'email' to be non-empty strings."
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(90, 8295, "sarah@gmail.com");
      const err = new Error(
        "Expected parameters 'name' and 'email' to be non-empty strings."
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'email' is not a string", () => {
      const cb = () => new Employee("Sarah", 8295, 75);
      const err = new Error(
        "Expected parameters 'name' and 'email' to be non-empty strings."
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is not a number", () => {
      const cb = () => new Employee("Sarah", "hello", 75);
      const err = new Error(
        "Expected parameters 'name' and 'email' to be non-empty strings."
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is less than 0", () => {
      const cb = () => new Employee("Sarah", -1, "sarah@gmail.com");
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number."
      );

      expect(cb).toThrowError(err);
    });
  });

  describe("getName", () => {
    it("retrieve 'name' of employee", () => {
      // Create new objects to test with
      const employee = new Employee("Joe", 1568, "joe@gmail.com");
      const name = "Joe";

      // Add the child object to the dayCare object
      const retrievedName = employee.getName();

      // Verify that the 'name' was properly retrieved
      expect(retrievedName).toEqual(name);
    });
  });

  describe("getId", () => {
    it("retrieve 'id' of employee", () => {
      // Create new objects to test with
      const employee = new Employee("Joe", 1568, "joe@gmail.com");
      const id = 1568;

      // Add the child object to the dayCare object
      const retrievedId = employee.getId();

      // Verify that the 'id' was properly retrieved
      expect(retrievedId).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("retrieve 'email' of employee", () => {
      // Create new objects to test with
      const employee = new Employee("Joe", 1568, "joe@gmail.com");
      const email = "joe@gmail.com";

      // Add the child object to the dayCare object
      const retrievedEmail = employee.getEmail();

      // Verify that the 'name' was properly retrieved
      expect(retrievedEmail).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("retrieve 'role' of employee", () => {
      // Create new objects to test with
      const employee = new Employee("Joe", 1568, "joe@gmail.com");
      const role = "Employee";

      // Add the child object to the dayCare object
      const retrievedRole = employee.getRole();

      // Verify that the 'name' was properly retrieved
      expect(retrievedRole).toEqual(role);
    });
  });
});
