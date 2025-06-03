// Add this in your message handler or event listener
module.exports = async function antiSticker(m, conn) {
    // Check if the message is a sticker
    if (m.mtype === 'stickerMessage') {
        // You can customize the reply message
        await conn.sendMessage(m.chat, { 
            text: "⚠️ Stickers are not allowed in this group!\nPlease avoid sending stickers."
        }, { quoted: m });
        
        // Optionally delete the sticker
        try {
            await conn.sendMessage(m.chat, { 
                delete: m.key 
            });
        } catch (error) {
            console.error("Failed to delete sticker:", error);
        }
        
        // Return true to indicate sticker was detected and handled
        return true;
    }
    // Return false if not a sticker
    return false;
}
