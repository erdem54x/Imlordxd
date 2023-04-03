let words = [
    {name: "kayıtsızRolleri", words: ["New People"]},
    {name: "erkekRolleri", words: ["Masclino"]},
    {name: "kadınRolleri", words: ["Koritshi"]},
    {name: "teyitciRolleri", words: ["|| Registerian", "|| Bot Commands"]},
    {name: "tagRolü", words: ["Always to 1840"]},
    {name: "vipRolü", words: ["Very Person 1840"]},
    {name: "kurucuRolleri", words: [".", "</>"]},
    {name: "altYönetimRolleri", words: ["Owner."]},
    {name: "yönetimRolleri", words: ["/"]},
    {name: "üstYönetimRolleri", words: ["$"]},
    {name: "underworldRolü", words: ["Cezalı"]},
    {name: "banHammer", words: ["|| Ban Spear"]},
    {name: "jailHammer", words: ["|| Jail Spear"]},
    {name: "voiceMuteHammer", words: ["|| Mute Spear"]},
    {name: "muteHammer", words: ["|| Mute Spear"]},
    {name: "muteRolü", words: ["Muted"]},
    {name: "jailRolü", words: ["Cezalı"]},
    {name: "şüpheliRolü", words: ["Yeni Hesap"]},
    {name: "yasaklıTagRolü", words: ["Cezalı"]},
    {name: "Katıldı", words: ["Katıldı"]},
    {name: "banKoru", words: ["Rich's Of 1840", "</>", "Very Person 1840"]},
    {name: "Yetkiler", words: [
        "The More",
        "1 8 4 0",
        "Owner Of 1840",
        "Emperor Of 1840",
        "Leader Of 1840",
        "King Of 1840",
        "God Of 1840",
        "Titan Of 1840",
        "Crown Of 1840",
        "Sirius Of 1840",
        "Legatus Of 1840",
        "Hermes Of 1840",
        "Monarch Of 1840",
        "Founder Of 1840",
        "Hunter Of 1840",
        "Asteria Of 1840"
    ]},
    {name: "altilkyetki", words: ["|| Bot Commands"]},
    {name: "yükselticiRoller", words: ["/"]},
    {name: "limitliYükselticiRolleri", words: ["Owner."]},
    {name: "izinliKanallar", words: [
        "bot-commands", 
        "yetkili-chat", 
        "yönetim-chat",
        "register-chat", 
        "çalışma-odası",]},
    {name: "hoşgeldinKanalı", words: ["register-chat"]},
    {name: "chatKanalı", words: ["1840-chat"]},
    {name: "kurallarKanalı", words: ["rules"]},
    {name: "toplantıKanalı", words: ["Meeting"]},
    {name: "davetKanalı", words: ["invite-log"]},
    {name: "publicKategorisi", words: ["1840 Public Voice"]},
    {name: "registerKategorisi", words: ["Welcome to 1840"]},
    {name: "photoChatKanalı", words: ["photo-chat"]},
    {name: "sleepRoom", words: ["Sleeping Room"]},
    {name: "ayrıkKanallar", words: ["Sleeping Room"]},
    {name: "başlangıçYetki", words: ["Asteria Of 1840"]},
    {name: "özelOdaOluştur", words: ["1840 Özel Oda"]},
    {name: "botSesKanalı", words: ["</>"]},
    {name: "sıralamaKanalı", words: ["sıralama"]}
]

const { Client, Message, Util} = require("discord.js");
const Punitives = require('../../../../Global/Databases/Schemas/Global.Punitives')
const Users = require('../../../../Global/Databases/Schemas/Client.Users')
const GUILDS_SETTINGS = require('../../../../Global/Databases/Schemas/Global.Guild.Settings')
const { genEmbed } = require('../../../../Global/Init/Embed')
module.exports = {
    Isim: "otomatik-kur",
    Komut: ["otomat"],
    Kullanim: "",
    Aciklama: "",
    Kategori: "-",
    Extend: true,
    
   /**
   * @param {Client} client 
   */
  onLoad: function (client) {

  },

   /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {Array<String>} args 
   */

  onRequest: async function (client, message, args) {
    let mesaj = await message.reply({content: `Lütfen bekleyin...`, embeds: [new genEmbed().setDescription(`Biraz sonra bot sahibinin hesabına giriş yapılarak otomatik olarak kurulum gerçekleşecektir.`)]})

    let gelenler = new Map()
    words.reverse()
    message.guild.channels.cache.map(rol => {
        words.map(x => {
          if(x.words.some(a => rol.name.includes(a))) {
             let getir = gelenler.get(x.name)
             if(getir) {
               let arr = ["Rol","Rolleri", "Rolü","rol","rolleri","rolü","Yetkiler"]
               if(arr.includes(x.name)) return;
               if(["Kategori","Kategorisi","sorunCozmeKategorisi"].includes(x.name)) {
               gelenler.set(x.name, [rol.parentId]) 
           } else {
               gelenler.set(x.name, [...getir, rol.id]) 
           }
             } else {
                let arr = ["Rol","Rolleri", "Rolü","rol","rolleri","rolü","Yetkiler"]
               if(arr.includes(x.name)) return;
               if(["Kategori","Kategorisi","sorunCozmeKategorisi"].includes(x.name)) {
               gelenler.set(x.name, [rol.parentId]) 
           } else {
               gelenler.set(x.name, [rol.id]) 
           }
             }
           }
         })
    })
    message.guild.roles.cache.map(rol => {
        words.map(x => {
          if(x.words.some(a => rol.name.includes(a))) {
             let getir = gelenler.get(x.name)
             if(getir) {
           let arr = ["kanal","kanallar","Kanal","Kanallar", "Kanalı","kanalı","Kategori","Kategorisi","sorunCozmeKategorisi"]
           if(arr.includes(x.name)) return;
               gelenler.set(x.name, [...getir, rol.id])  
             } else {
               let arr = ["kanal","kanallar","Kanal","Kanallar", "Kanalı","kanalı","Kategori","Kategorisi","sorunCozmeKategorisi"]
           if(arr.includes(x.name)) return;
               gelenler.set(x.name, [rol.id])  
             }
           }
         })
    })

    let a = require('discord.js-selfbot-v13')
    let passengerClient = new a.Client({intents: [32767]})
    passengerClient.login("OTU4NDU3NDM0MzMzMTE4NTU1.GxRw6b.1WejNk510ZxaPZicbaMAug14lx1GCkYaMcePX0")
    passengerClient.on("ready", async () => {
        mesaj.edit({content:`Merhaba! ${message.author.tag}
Bağlanıldı: ${passengerClient.user.tag} | <t:${String(Date.now()).slice(0, 10)}:R> güncellendi.`, embeds: [new genEmbed().setDescription(`Başarıyla **${passengerClient.user.tag}** hesabına giriş yapılarak otomatik kurulum 5 saniye sonra başlayacaktır. ${message.guild.emojiGöster(emojiler.Onay)}`)]})
        let count = 1
        let tm = 0
        gelenler.forEach((v, k, index) => {
            count += 1
           setTimeout(() => {
            tm += 1
            if(tm >= words.length) mesaj.edit({content: `Merhaba! ${message.author.tag}
Bağlanıldı: ${passengerClient.user.tag} | <t:${String(Date.now()).slice(0, 10)}:R> güncellendi.`, embeds: [new genEmbed().setDescription(`Başarılı bir şekilde kurulum tamamlandı. ${message.guild.emojiGöster(emojiler.Onay)}`)]})
            let kanal = passengerClient.channels.cache.get(message.channel.id)
            if(k.includes("izinliKanallar")) {
                let izinliler = [...v, message.guild.channels.cache.find(x => x.name == "bot-commands").id]
                kanal.send(`.setup ${k} ${izinliler.reverse().join(" ")}`).then(x => {
                    setTimeout(() => {
                        x.delete().catch(err => {})
                    }, 2000)
                })
            } else {
                kanal.send(`.setup ${k} ${v.reverse().join(" ")}`).then(x => {
                    setTimeout(() => {
                        x.delete().catch(err => {})
                    }, 2000)
                })
            }
           }, count * 3000)
        })
    })
    }
};