module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ], // Indicamos a babel como renderizar el componente FirstApp! Instalamos babel/preset-react. Ya tenemos instalado babel/preset-env
    ],
};