
import  { BackgroundSyncPlugin } from "workbox-background-sync"
import  { StaleWhileRevalidate }  from "workbox-strategies"
import { registerRoute } from "workbox-routing";

// Create an instance of the BackgroundSyncPlugin
const bgSyncPlugin = new BackgroundSyncPlugin('myQueue', {
  maxRetentionTime: 24 * 60 // Retry for up to 24 hours
});

// Register the route with the StaleWhileRevalidate strategy
registerRoute(
  new RegExp('^https://firebasestorage.googleapis.com/'), // Modify the regular expression to match your desired URLs
  new StaleWhileRevalidate({
    plugins: [bgSyncPlugin]
  })
);