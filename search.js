searchReddit = function(query) {
	var searchQuery = query.selectionText;
	chrome.tabs.create({url : "https://www.reddit.com/search?q=" + searchQuery});
};

searchFacebook = function(query) {
	var searchQuery = query.selectionText;
	chrome.tabs.create({url : "https://www.facebook.com/search/top/?q=" + searchQuery});
};

searchYouTube = function(query) {
	var searchQuery = query.selectionText;
	chrome.tabs.create({url : "https://www.youtube.com/results?search_query=" + searchQuery});
};

searchTwitter = function(query) {
	var searchQuery = query.selectionText;
	chrome.tabs.create({url : "https://twitter.com/search?q=" + searchQuery});
};

chrome.contextMenus.create({
	title : "Search Reddit",
	contexts: ["selection"],
	onclick: searchReddit
});

chrome.contextMenus.create({
	title : "Search Facebook",
	contexts: ["selection"],
	onclick: searchFacebook
});

chrome.contextMenus.create({
	title : "Search YouTube",
	contexts: ["selection"],
	onclick: searchYouTube
});

chrome.contextMenus.create({
	title : "Search Twitter",
	contexts: ["selection"],
	onclick: searchTwitter
});
