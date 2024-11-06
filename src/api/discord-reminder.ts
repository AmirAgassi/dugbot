import { WebhookClient } from 'discord.js'

// discord webhook setup
const webhookClient = new WebhookClient({ 
  url: process.env.DISCORD_WEBHOOK_URL 
})

// handler for the cron job
export default async function handler(req, res) {
  try {
    await webhookClient.send({
      content: '🔔 Reminder: Dev meeting starting soon!'
    })
    
    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
