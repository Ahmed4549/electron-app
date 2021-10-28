const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Your electron app was started. Click to continue'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE
