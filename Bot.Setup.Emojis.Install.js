const { Client, Message} = require("discord.js");

module.exports = {
    Isim: "emojikur",
    Komut: ["emkur"],
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
    const emojis = [

            // Penal & Require
            { name: "pass_tik", url: "https://cdn.discordapp.com/emojis/817508162231205919.gif" },
            { name: "pass_ret", url: "https://cdn.discordapp.com/emojis/817508163103227904.gif" },
            { name: "pass_yasaklandi", url: "https://cdn.discordapp.com/emojis/817508162454159382.gif" },
            { name: "pass_cmute", url: "https://cdn.discordapp.com/emojis/1033429886448177283.pngs"},
            { name: "pass_uncmute", url: "https://cdn.discordapp.com/emojis/1032778672098246787.png"},
            { name: "pass_vmute", url: "https://cdn.discordapp.com/emojis/1037428446151856238.png" },
            { name: "pass_cezalandirildi", url: "https://cdn.discordapp.com/emojis/817508161447264267.png" },
            { name: "pass_unvmute", url: "https://cdn.discordapp.com/emojis/1037422176996958298.png" },
            { name: "pass_erkek", url: "https://cdn.discordapp.com/emojis/842526029913260082.gif" },
            { name: "pass_kadin", url: "https://cdn.discordapp.com/emojis/842526029184237568.gif" },
            { name: "pass_uye", url: "https://cdn.discordapp.com/emojis/842526025216688158.png" },
            { name: "pass_konfeti", url: "https://cdn.discordapp.com/emojis/1047930886433275914.gif"},
            { name: "pass_gold", url: "https://cdn.discordapp.com/emojis/838240527862333460.gif"},
            { name: "pass_passenger", url: "https://cdn.discordapp.com/emojis/856932407431921684.gif"},
            { name: "pass_rubyBit", url: "https://cdn.discordapp.com/emojis/1009169235706138776.gif"},
            { name: "pass_emeraldBit", url: "https://cdn.discordapp.com/emojis/780808253017686037.gif"},
            { name: "pass_voiceDeaf", url: "https://cdn.discordapp.com/emojis/911967815651700796.png"},
            { name: "pass_nitro", url: "https://cdn.discordapp.com/emojis/1044248528999960617.png"},
            { name: "pass_exxen", url: "https://cdn.discordapp.com/emojis/1062430362317357116.png"},
            { name: "pass_spotify", url: "https://cdn.discordapp.com/emojis/1044248522771402822.png"},
            { name: "pass_netflix", url: "https://cdn.discordapp.com/emojis/990506820948869132.png"},
            { name: "pass_youtube", url: "https://cdn.discordapp.com/emojis/1058818055918067752.png"},
            { name: "pass_blutv", url: "https://cdn.discordapp.com/emojis/1044248532372160532.png"},
            
            { name: "pass_degnek", url: "https://cdn.discordapp.com/emojis/843809647675834398.gif"},
            { name: "pass_yildiz", url: "https://cdn.discordapp.com/emojis/909164076570116167.gif"},
    
                // UpStaff
            { name: "baslangicBar", url: "https://cdn.discordapp.com/emojis/826970314340433950.png" },
            { name: "baslamaBar", url: "https://cdn.discordapp.com/emojis/907344840587624548.gif" },
            { name: "doluBar", url: "https://cdn.discordapp.com/emojis/907344806525669407.gif" },
            { name: "doluBitisBar", url: "https://cdn.discordapp.com/emojis/907344808123695105.gif" },
            { name: "bosBar", url: "https://cdn.discordapp.com/emojis/817567181080494080.png" },
            { name: "bosBitisBar", url: "https://cdn.discordapp.com/emojis/817567181210517554.png" },
            { name: "icon", url: "https://cdn.discordapp.com/emojis/1012785793959473263.png" },
    
                // Task
            { name: "pass_tamamlandi", url: "https://cdn.discordapp.com/emojis/740698065660543127.gif" },
            { name: "pass_sandik", url: "https://cdn.discordapp.com/emojis/1062430372840865802.png" },
            { name: "pass_para", url: "https://cdn.discordapp.com/emojis/1042532691154849912.gif" },
            { name: "pass_xp", url: "https://cdn.discordapp.com/emojis/844119157943042059.gif" },
            { name: "pass_chat", url: "https://cdn.discordapp.com/emojis/844119158069526548.gif" },
            { name: "pass_muhabbet", url: "https://cdn.discordapp.com/emojis/844119158223536138.gif" },
            { name: "pass_777", url: "https://cdn.discordapp.com/emojis/844120308897677342.gif" },
            { name: "pass_cookie", url: "https://cdn.discordapp.com/emojis/844121947515519016.gif" },    
            { name: "pass_staff", url: "https://cdn.discordapp.com/emojis/1048848022907387926.png" },   
            { name: "pass_gift", url: "https://cdn.discordapp.com/emojis/997610389858684938.png" },
            { name: "pass_tagged", url: "https://cdn.discordapp.com/emojis/842563648597131304.gif"},
            { name: "pass_sandikodul", url: "https://cdn.discordapp.com/emojis/907344860485386290.gif"},
            { name: "pass_pat", url: "https://cdn.discordapp.com/emojis/931686717902192660.png"},
            { name: "pass_heart", url: "https://cdn.discordapp.com/emojis/931686698138603610.png"},
            { name: "pass_vis", url: "https://cdn.discordapp.com/emojis/931686708037185546.png"},
            { name: "pass_slot", url: "https://cdn.discordapp.com/emojis/931686726567612426.gif?v=1"},
            { name: "pass_cf", url: "https://cdn.discordapp.com/emojis/932325559051096084.gifS"},
            { name: "pass_cfwin", url: "https://cdn.discordapp.com/emojis/932326782223417455.png"},
            { name: "pass_cflose", url: "https://cdn.discordapp.com/emojis/932328417196671026.png"},
      ];
  
      const numEmojis = [
        { name: "sifir", url: "https://cdn.discordapp.com/emojis/1048725066600419489.gif" },
        { name: "bir", url: "https://cdn.discordapp.com/emojis/1048725055099654164.gif" },
        { name: "iki", url: "https://cdn.discordapp.com/emojis/1048725049701572700.gif" },
        { name: "uc", url: "https://cdn.discordapp.com/emojis/1048697202354159727.gif" },
        { name: "dort", url: "https://cdn.discordapp.com/emojis/1048725061718245386.gif" },
        { name: "bes", url: "https://cdn.discordapp.com/emojis/1048725059419766936.gif" },
        { name: "alti", url: "https://cdn.discordapp.com/emojis/1048725064134185070.gif" },
        { name: "yedi", url: "https://cdn.discordapp.com/emojis/1048725047788961903.gif" },
        { name: "sekiz", url: "https://cdn.discordapp.com/emojis/1048725052125880350.gif" },
        { name: "dokuz", url: "https://cdn.discordapp.com/emojis/1048725057247137852.gif" }
      ];
  
      emojis.forEach(async (x) => {
        if (message.guild.emojis.cache.find((e) => x.name === e.name)) return;
        const emoji = await message.guild.emojis.create(x.url, x.name);
        message.channel.send(`\`${x.name}\` isimli emoji oluşturuldu! (${emoji.toString()})`);
      });
      numEmojis.forEach(async (x) => {
        if (message.guild.emojis.cache.find((e) => x.name === e.name)) return;
        const emoji = await message.guild.emojis.create(x.url, x.name);
        message.channel.send(`\`${x.name}\` isimli sayı emojisi oluşturuldu! (${emoji.toString()})`);
      });

    }
};