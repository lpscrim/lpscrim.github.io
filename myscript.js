    let timeSince = (date) => {

    let secs = Math.floor((new Date() - date) / 1000);
  

    let y = "";
    let m = "";
    let d = "";
    let h = "";
    let mi = "";
    let sx = "";

    let interval = secs / 31536000;


    if (interval > 1) {
      y = Math.floor(interval) + " years,";
      interval = secs %= 31536000;
    }
    interval = secs / 2592000;
    if (interval > 1) {
      m =  Math.floor(interval) + " months,";
      interval = secs %= 2592000;
    }
    interval = secs / 86400;
    if (interval > 1) {
      d = Math.floor(interval) + " days,";
      interval = secs %= 86400;
    }
    interval = secs / 3600;
    if (interval > 1) {
      h = Math.floor(interval) + " hours,";
      interval = secs %= 3600;
    }
    interval = secs / 60;
    if (interval > 1) {
      mi = Math.floor(interval) + " minutes";
      interval = secs %= 60;
    }
      sx = Math.floor(secs) + " seconds";

    return ` ${y} ${m} ${d} ${h} ${mi} and ${sx}`;
    
  }

    let counter = () => document.getElementById("counter").innerHTML = `I have been coding for ${timeSince(1656675676000)}.`;
    
    setInterval(counter, 1000);
    