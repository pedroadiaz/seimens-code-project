module.exports = {
    testMatch: ['**/*.spec.ts'],
    testEnvironment: 'node',
    modulePathIgnorePatterns:['node_modules'],
    moduleFileExtensions: ["js", "ts", "json", "node"], 
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
    }
}