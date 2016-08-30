searchReddit = function(query) {
	var searchQuery = query.selectionText;
	chrome.tabs.create({url : "https://www.reddit.com/search?q=" + searchQuery});
};

chrome.contextMenus.create({
	title : "Search Helper",
	contexts: ["selection"],
	onclick: searchReddit
});
