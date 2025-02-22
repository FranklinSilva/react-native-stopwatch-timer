function formatTimeString(time, showMsecs, showHours) {
  let msecs = time % 1000;

  if (msecs < 10) {
    msecs = `00${msecs}`;
  } else if (msecs < 100) {
    msecs = `0${msecs}`;
  }

  let seconds = Math.floor(time / 1000);
  let minutes = Math.floor(time / 60000);
  let hours = Math.floor(time / 3600000);
  seconds = seconds - minutes * 60;
  minutes = minutes - hours * 60;
  let formatted;
  if (showMsecs && showHours) {
    formatted = `${hours < 10 ? 0 : ""}${hours}:${
      minutes < 10 ? 0 : ""
    }${minutes}:${seconds < 10 ? 0 : ""}${seconds}:${msecs}`;
  } 

  if (!showMsecs && !showHours) {
    formatted = `${
      minutes < 10 ? 0 : ""
    }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
  } 


  if (!showMsecs && showHours) {
    formatted = `${hours < 10 ? 0 : ""}${hours}:${
      minutes < 10 ? 0 : ""
    }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
  } 

  if (showMsecs && !showHours) {
    formatted = `${
      minutes < 10 ? 0 : ""
    }${minutes}:${seconds < 10 ? 0 : ""}${seconds}:${msecs}`;
  } 


  
  
  

  return formatted;
}

export { formatTimeString };
