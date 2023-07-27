// Wait for page to load
window.addEventListener('load', function() {
	// Set timer to show content element after 5 seconds
	var timer = setTimeout(function() {
		// Show content element
		document.querySelector('.content').style.visibility = 'visible';
		// Hide loading element
		document.querySelector('.loading-container').style.visibility = 'hidden';
	}, 200);
	// Cancel timer if page finishes loading before 5 seconds
	window.addEventListener('beforeunload', function() {
		clearTimeout(timer);
	});
});

function reloadPage() {
	// Show the loading container
	document.querySelector('.loading-container').style.display = 'flex';
	
	// Set a timer to hide the loading container and show the content after 1.5 seconds
	setTimeout(function() {
	  // Hide the loading container
	  document.querySelector('.loading-container').style.display = 'none';
	  
	  // Show the content
	  document.querySelector('.content').style.display = 'block';
	  
	  // Reload the page
	  location.reload();
	}, 200);
  }

  function analysis() {
    window.open("graph.html");
  }
