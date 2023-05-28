module.exports = {
    testEnvironment: 'jest-environment-jsdom',// Indicamos a Jest como renderizar el componente FirstApp! Instalamos jest-jest-environment
    setupFiles: ['./jest.setup.js'] // Es util a la hora de hacer cierta configuración global a la hora de hechar a andar el testsuite con Jest.
}