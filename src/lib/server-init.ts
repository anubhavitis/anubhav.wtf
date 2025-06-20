// Server-side initialization file
// This will be executed when the server starts

import cron from 'node-cron';
import axios from 'axios';

let isInitialized = false;

const TL_BOT_TOKEN = process.env.TL_BOT_TOKEN;
const TL_CHAT_ID = process.env.TL_CHAT_ID;
const max_news_to_send = 10;


async function fetchTopNewsFromHn(): Promise<number[]> {
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const response = await axios.get(url);
    const topStories = response.data;
    return topStories;
}

async function fetchTopNewsFromYc(): Promise<String[]> {
    const tops_news = await fetchTopNewsFromHn();
    const top_news_ids = tops_news.slice(0, max_news_to_send);
    let result: String[] = [];
    await Promise.all(top_news_ids.map(async (newsId) => {
        const url = `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`;
        const response = await axios.get(url);
        const story = response.data;

        const title = story.title;
        const id = story.id;
        const author = story.by;
        const time = story.time;

        // get date from epoch time
        const date = new Date(time * 1000).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

        const storyUrl = `https://news.ycombinator.com/item?id=${id}`;

        result.push(`${title} - ${storyUrl} - by ${author} - published at ${date}`);
    }));
    return result;
}

async function dailyCronTask(): Promise<void> {
    const url = `https://api.telegram.org/bot${TL_BOT_TOKEN}/sendMessage`;
    const top_news_yc = await fetchTopNewsFromYc();

    for (let i = 0; i < top_news_yc.length; i++) {
        try {
            await axios.post(url, {
                chat_id: TL_CHAT_ID,
                text: `${i+1}. ${top_news_yc[i]}`,
            });
        } catch (error: any) {
            console.error('Error sending message:', error.response ? error.response.data : error.message);
        }
    }
}

// Initialize cron job
function initializeCronJob(): void {

  if (isInitialized) {
    return;
  }
    
    if(TL_BOT_TOKEN === undefined || TL_CHAT_ID === undefined){
        console.error('TL_BOT_TOKEN or TL_CHAT_ID is not set');
        return;
    }
  
  // Schedule cron job to run daily at 6:00 AM IST (UTC+5:30)
  // Cron expression: 0 0 6 * * * (seconds minutes hours day month day-of-week)
  // Since IST is UTC+5:30, we need to run at 00:30 UTC to get 6:00 AM IST
  cron.schedule('0 30 0 * * *', async () => {
      console.log('🕕 Running daily cron job...');
      await dailyCronTask();
    }, {
    timezone: 'Asia/Kolkata' // IST timezone
  });
    
    cron.schedule('*/1 * * * *', async () => {
      console.log('🕕 Running every 1 min cron job...');
      await dailyCronTask();
    });
    
    console.log('📅 Cron jobs initialized successfully');
    isInitialized = true;
}

// Auto-initialize when this module is imported
initializeCronJob();

// Export for manual triggering if needed
export { dailyCronTask }; 