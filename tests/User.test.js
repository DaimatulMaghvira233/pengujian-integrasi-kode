const User = require('../src/User');

describe('User', () => {
  describe('when created with valid data', () => {
    let user;

    beforeEach(() => {
      // Arrange
      user = new User('John', 'john@test.com', 25);
    });

    test('should return correct name when getName is called', () => {
      // Act
      const result = user.getName();
      // Assert
      expect(result).toBe('John');
    });

    test('should return correct email when getEmail is called', () => {
      // Act
      const result = user.getEmail();
      // Assert
      expect(result).toBe('john@test.com');
    });

    test('should return correct age when getAge is called', () => {
      // Act
      const result = user.getAge();
      // Assert
      expect(result).toBe(25);
    });
  });

  describe('when created with invalid data', () => {
    test('should throw error when name is empty', () => {
      // Arrange
      const create = () => new User('', 'a@b.com', 25);
      // Act & Assert
      expect(create).toThrow('Name required');
    });

    test('should throw error when name is only whitespace', () => {
      const create = () => new User('   ', 'a@b.com', 25);
      expect(create).toThrow('Name required');
    });

    test('should throw error when email is invalid', () => {
      const create = () => new User('John', 'invalid', 25);
      expect(create).toThrow('Invalid email');
    });

    test('should throw error when email is empty', () => {
      const create = () => new User('John', '', 25);
      expect(create).toThrow('Invalid email');
    });

    test('should throw error when age is negative', () => {
      const create = () => new User('John', 'a@b.com', -1);
      expect(create).toThrow('Invalid age');
    });

    test('should throw error when age exceeds 150', () => {
      const create = () => new User('John', 'a@b.com', 200);
      expect(create).toThrow('Invalid age');
    });
  });
});


test('should fail intentionally', () => {
  expect(1).toBe(2);
});