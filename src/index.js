import cron from 'node-cron';
import { WebhookClient } from 'discord.js';

const webhook = new WebhookClient({ url: process.env.DISCORD_WEBHOOK });

// runs every minute
cron.schedule('* * * * *', () => {
  webhook.send({
    content: '<@&1277747166911139945> test message every minute! 🔔'
  });
  console.log('Message sent at:', new Date().toLocaleString());
});

console.log('Bot started!'); 