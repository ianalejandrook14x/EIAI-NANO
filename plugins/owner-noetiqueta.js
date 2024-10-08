let handler = async (m, { conn, usedPrefix, isOwner }) => {
await m.react('☁')
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} ʂσʅσ ƈσɳʂυʅƚαʂ σ ρɾσზʅҽɱαʂ ƈσɳ Eιαι\n*- Sσʅσ αʂυɳƚσʂ ιɱρσɾƚαɳƚҽʂ -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Iαɳαʅҽʝαɳԃɾσσƙ15x⁩;;\nFN:Iαɳαʅҽʝαɳԃɾσσƙ15x\nORG:Iαɳαʅҽʝαɳԃɾσσƙ15x⁩\nTITLE:\nitem1.TEL;waid=5493876639332:5493876639332\nitem1.X-ABLabel:Iαɳαʅҽʝαɳԃɾσσƙ15x\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おDanịel.xyz⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Iαɳαʅҽʝαɳԃɾσσƙ15x', contacts: [{ vcard }] }}, {quoted: m})
}
handler.customPrefix = /^(@5493876639332|@5493876639332|@5493876639332)$/i
handler.command = new RegExp
export default handler
