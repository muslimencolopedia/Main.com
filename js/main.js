// Buttons
let onlineDownload = document.getElementById("online-download");
let fullofflineDownload = document.getElementById("full-offline-download");
let offlineDownload = document.getElementById("offline-download");

// API base URL
const baseURL = "https://counting-api.onrender.com";

// API endpoints
let onlineIncrementURL = `${baseURL}/downloads/online/increment`;
let offlineIncrementURL = `${baseURL}/downloads/offline/increment`;
let onlineCountURL = `${baseURL}/downloads/online/count`;
let offlineCountURL = `${baseURL}/downloads/offline/count`;

// URLs for downloads
let offlineURL = "https://www.mediafire.com/file/orhjvbyzbpb3sap/MuslimEncyclopedia.rar/file";
let fullofflineURL = "https://www.mediafire.com/file/5wfpj29uq0ru15a/MuslimEncyclopedia_6_Reader.rar/file";
let onlineURL = "https://www.mediafire.com/file/d8pk428lzfalgxa/Muslim_Encyclopedia_Lite.exe/file";

// Default counters values
let onlineCount = 41;
let offlineCount = 40;
let fullofflineCount = 40;

// Counters showers
let onlineCountShower = document.getElementById("onlineCountShower");
let offlineCountShower = document.getElementById("offlineCountShower");
let fullofflineCountShower = document.getElementById("fullofflineCountShower");

// Fetch initial download counts using Axios GET requests
axios.get(onlineCountURL)
    .then((response) => {
        onlineCount = response.data.count;
        onlineCountShower.innerHTML = `عدد التحميلات: ${onlineCount}`;
    })
    .catch((error) => console.error("Error fetching online download count:", error));

axios.get(offlineCountURL)
    .then((response) => {
        offlineCount = response.data.count;
        offlineCountShower.innerHTML = `عدد التحميلات: ${offlineCount}`;
    })
    .catch((error) => console.error("Error fetching offline download count:", error));

// Handle online download click
onlineDownload.addEventListener("click", () => {
    axios.post(onlineIncrementURL, { type: "online" })
        .then(() => {
            onlineCount++;
            onlineCountShower.innerHTML = `عدد التحميلات: ${onlineCount}`;
            window.open(onlineURL);
        })
        .catch((error) => console.error("Error incrementing online download count:", error));
});

// Handle offline download click
offlineDownload.addEventListener("click", () => {
    axios.post(offlineIncrementURL, { type: "offline" })
        .then(() => {
            offlineCount++;
            offlineCountShower.innerHTML = `عدد التحميلات: ${offlineCount}`;
            window.open(offlineURL);
        })
        .catch((error) => console.error("Error incrementing offline download count:", error));
});

// Handle full offline download click (no API call since it's unavailable)
fullofflineDownload.addEventListener("click", () => {
    fullofflineCount++;
    fullofflineCountShower.innerHTML = `عدد التحميلات: ${fullofflineCount}`;
    window.open(fullofflineURL);
});
