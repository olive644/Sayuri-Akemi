module.exports = {
    name: "ping", // Setar Nome Do Comando
    aliases: [ "p" ], // Setar Aliás Do Comando
    permissions: [], // Setar Permissão Do Comando
    ownerOnly: true, // Setar Para Apenas Donos
    enabled: true, // Setar Para Comando Ativado
    cooldown: 5, // Setar Cooldown
    exec: async (client, message, args) => {
        // Resto Do código
    }
}
