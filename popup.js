document.addEventListener('DOMContentLoaded', function () {

  //classe + instancia
  document.getElementById('fullNameButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

      const tabId = tabs[0].id;
      const currentUrl = tabs[0].url;
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: (currentUrl) => {



          console.log('currentUrl', currentUrl);
          const titleElements = document.getElementsByClassName('title-text');
          if (titleElements.length > 0) {
            const lastTitleElement = titleElements[titleElements.length - 1];
            const spanElement = lastTitleElement.querySelector('span');
            if (spanElement) {
              let newTitle = spanElement.textContent;
              document.title = newTitle;
            }
          }
        },
        args:[currentUrl]
      });
    });
  });


  //instancia
  document.getElementById('instanceButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id;
      const currentUrl = tabs[0].url;

      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: (currentUrl) => {

          const titleElements = document.getElementsByClassName('title-text');
          if (titleElements.length > 0) {
            const lastTitleElement = titleElements[titleElements.length - 1];
            const spanElement = lastTitleElement.querySelector('span');
            if (spanElement) {
              let newTitle = spanElement.textContent;
              let instanceString = newTitle.split(':');
              if(instanceString.length && instanceString.length > 1){
                newTitle = instanceString[1];
                document.title = newTitle;
              }

            }
          }
        },
        args:[currentUrl]
      });
    });
  });

});