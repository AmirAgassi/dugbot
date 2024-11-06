import cron from 'node-cron';
import { WebhookClient } from 'discord.js';

const webhook = new WebhookClient({ url: process.env.DISCORD_WEBHOOK });

// runs at specific times
cron.schedule('0 17,20 * * 3', () => {  // 5pm and 8pm on Wednesday
  webhook.send({
    content: '<@&1277747166911139945> DEV MEETING REMINDER! 🔔'
  });
});