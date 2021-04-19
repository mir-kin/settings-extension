console.log('Background')
var fbTabId;

const fbUrl = "https://www.facebook.com/settings?tab=privacy&section=canfriend&view";
chrome.tabs.create({"url": fbUrl, active: false}, function(newTab) {
    fbTabId = newTab.id;
    console.log(fbTabId);



    chrome.tabs.executeScript(fbTabId, {"code" : `document.querySelector('[rel="toggle"]').click();`}) ;







    chrome.tabs.remove(fbTabId);
});


// chrome.windows.getAll({populate:true},function(windows){
//   windows.forEach(function(window){
//     window.tabs.forEach(function(tab){
//         switch (tab.url) {
//             case 'https://www.facebook.com/':
//                 console.log(tab.id);
//         }
//        console.log(`${tab.url} under id: ${tab.id}`); //log all tabs
//     });
//   });
// });
