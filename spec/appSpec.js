describe('greet', function () {
    // Arrange
    const { main } = require('../src/app.js');

    it('function greet person', function () {
        // Act
        const result = main.greet(['Bob']);
        // Assert
        expect(result).toBe('Hello, Bob.');
    });

    it('function greet when name is NULL', function () {
        // Act
        const result = main.greet(null);
        // Assert
        expect(result).toBe('Hello, my friend.');
    });

    it('function greet when name is void', function () {
        // Act
        const result = main.greet(['']);
        // Assert
        expect(result).toBe('Hello, my friend.');
    });

    it('function greet when name is undefined', function () {
        // Act
        const result = main.greet(undefined);
        // Assert
        expect(result).toBe('Hello, my friend.');
    });

    it('function greet when name is in upperCase', function () {
        // Act
        const result = main.greet(['BOB']);

        // Assert
        expect(result).toBe('HELLO, BOB!');
    });

    it('function greet when there is 2 names', function () {
        // Act
        const result = main.greet(['Bob', 'Patrick']);

        // Assert
        expect(result).toBe('Hello, Bob and Patrick.');
    });

    it('function greet when there is 2 names in UpperCase', function () {
        // Act
        const result = main.greet(['BOB', 'PATRICK']);
        // Assert
        expect(result).toBe('HELLO, BOB AND PATRICK!');
    });

    it('function greet when there is more than 2 names', function () {
        // Act
        const result = main.greet(['Bob', 'Patrick', 'Carlo']);
        // Assert
        expect(result).toBe('Hello, Bob, Patrick and Carlo.');
    });

    it('function greet when there is more than 2 names and an void name', function () {
        // Act
        const result = main.greet(['Bob', '', 'Carlo', 'Patrick']);
        // Assert
        expect(result).toBe('Hello, Bob, Carlo and Patrick.');
    });

    it('function greet when there is more than 2 names in upperCase', function () {
        // Act
        const result = main.greet(['BOB', 'CARLO', 'PATRICK']);
        // Assert
        expect(result).toBe('HELLO, BOB, CARLO AND PATRICK!');
    });

    it('function greet when there are 3 names: 2 normal and 1 upperCase', function () {
        // Act
        const result = main.greet(['Bob', 'Carlo', 'PATRICK']);
        // Assert
        expect(result).toBe('Hello, Bob and Carlo. AND HELLO, PATRICK!');
    });

    it('function greet return 3 names: 2 normal and 1 upperCase with void', function () {
        // Act
        const result = main.greet(['Bob', 'Carlo', 'PATRICK', '']);
        // Assert
        expect(result).toBe('Hello, Bob and Carlo. AND HELLO, PATRICK!');
    });

    it('function greet when selected language is in french', function () {
        // Act
        const result = main.greet(['Bob', 'Carlo', 'PATRICK', '', 'fr']);
        // Assert
        expect(result).toBe('Bonjour, Bob et Carlo. ET BONJOUR, PATRICK!');
    });

    it('function greet when selected language is in french with no names', function () {
        // Act
        const result = main.greet(['fr']);
        // Assert
        expect(result).toBe('Bonjour, mon ami.');
    });
});
