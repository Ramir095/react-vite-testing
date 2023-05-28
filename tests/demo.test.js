
describe('Pruebas en <DemoComponent />', () => { // Agrupador, un describe por archivo (recomendable)
    // Creamos las pruebas con tres pasos
    test('Esta prueba no debe de fallar', () => {
    
        // 1. inicialización
        const message1 = 'Hola Mundo';
    
        // 2. estímulo
        const message2 = message1.trim(); //trim quita los espacios al inicio y al final
        
        // 3. Observar el comportamiento... esperado
        expect( message1 ).toBe( message2 );
    
    });
    
});