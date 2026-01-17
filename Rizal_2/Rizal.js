function showTab(event, tabId) {
  // If the element is an <a> tag, this stops the page from refreshing/jumping
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  // 1. Hide all tab content
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  // 2. Show the specific tab
  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = 'flex';
  }
}






