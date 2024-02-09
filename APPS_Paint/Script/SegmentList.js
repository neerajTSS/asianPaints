function SegmentList()
{
 //Double-clicks the 'segmentDropdownButton' object.
   Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Click();
   Delay(1000);

// Simulate pressing the down arrow key
   Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Keys("[Down]");

// Log the text of the currently selected item
  var selectedItemText = Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Text;
  Log.Message("Selected Item: " + selectedItemText);

// Loop through pressing the down arrow key and logging the text
    var numberOfItemsToNavigate = 20; // Adjust as needed
    for (var i = 0; i < numberOfItemsToNavigate; i++) 
    {
        // Simulate pressing the down arrow key
    Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var currentItemText = Aliases.browser.loginPage.pageLeadCreation.MmiAddressSection.segmentDropdownButton.Text;
    Log.Message("Item " + (i + 1) + ": " + currentItemText);

    // If it's the last iteration, remember the last item's text
    if (i === numberOfItemsToNavigate - 1) {
        var lastItemText = currentItemText;
    }
    
  }
  
}