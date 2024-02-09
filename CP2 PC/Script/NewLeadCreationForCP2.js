﻿function Lead_Page(PlaceName,LastPaintingCycle,CustomerName,CustomerMobileNo,CustomerEmail) {
 // Click on the lead button
   Aliases.browser.pageLogon.menuContainer.leadsButton.Click();
   Log.Message("Verified clicking on the lead button.");
   Delay(500)
   aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.leadCreateButton, "title", cmpEqual, "Create");
   Aliases.browser.pageLogon.leadContainer.leadCreateButton.click();
   aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.newLeadText, "title", cmpEqual, "New Lead"); 
 //Clicks the 'placeName' control
   Aliases.browser.pageLogon.leadContainer.placeNameTextBox.Click();
   Aliases.browser.pageLogon.leadContainer.placeNameTextBox.SetText(PlaceName);
   aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.searchSiteButton, "contentText", cmpEqual, "Search Site");
 //Clicks the 'searchSiteButton' button.
   Aliases.browser.pageLogon.leadContainer.searchSiteButton.ClickButton();
   Delay(1000);
 //Clicks the 'addressCheckBox' control.
  Aliases.browser.pageLogon.leadContainer.addressCheckBox.Click();
 //Double-clicks the 'segmentDropdownButton' object.
   Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Click();
   Delay(1000);

   Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Keys("[Down]");
var selectedItemText = Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Text;
Log.Message("Selected Item: " + selectedItemText);

// Loop through pressing the down arrow key and logging the text
var numberOfItemsToNavigate = 10; 
for (var i = 0; i < numberOfItemsToNavigate; i++) {
    // Simulate pressing the down arrow key
    Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var currentItemText = Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Text;
    Log.Message("Item " + (i + 1) + ": " + currentItemText);

    // If it's the last iteration, remember the last item's text
    if (i === numberOfItemsToNavigate - 1) {
        var lastItemText = currentItemText;
    }
}
// Simulate pressing the Enter key to select the last item
Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Keys("[Enter]");
Log.Message("Last item selected: " + lastItemText);
 Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Click();
Delay(1000);

// Simulate pressing the down arrow key
Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Keys("[Down]");

// Log the text of the currently selected item
var selectedItemText = Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Text;
Log.Message("Selected Item: " + selectedItemText);

// Loop through pressing the down arrow key and logging the text
var numberOfItemsToNavigate = 64; 
var lastItemText;
for (var i = 0; i < numberOfItemsToNavigate; i++) {
    Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var currentItemText = Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Text;
    Log.Message("Item " + (i + 1) + ": " + currentItemText);

    // If it's the last iteration, remember the last item's text
    if (i === numberOfItemsToNavigate - 1) {
        lastItemText = currentItemText;
    }
}

// Simulate pressing the Enter key to select the last item
Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Keys("[Enter]");
Log.Message("Last item selected: " + lastItemText);

 // Click and interact with the 'stageDropdownButton'
InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.stageDropdownButton);

// Function to interact with the dropdown using arrow keys
function InteractWithDropdown(stageDropdownButton) {
    stageDropdownButton.Click();
    Delay(1000);

    // Simulate pressing the down arrow key
    stageDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var selectedItemText = stageDropdownButton.Text;
    Log.Message("Selected Item: " + selectedItemText);

    // Loop through pressing the down arrow key and logging the text
    var numberOfItemsToNavigate = 3; // Adjust as needed
    var lastItemText;
    for (var i = 0; i < numberOfItemsToNavigate; i++) {
        // Simulate pressing the down arrow key
        stageDropdownButton.Keys("[Down]");

        // Log the text of the currently selected item
        var currentItemText = stageDropdownButton.Text;
        Log.Message("Item " + (i + 1) + ": " + currentItemText);

        // If it's the last iteration, remember the last item's text
        if (i === numberOfItemsToNavigate - 1) {
            lastItemText = currentItemText;
        }
    }

    // Simulate pressing the Enter key to select the last item
    stageDropdownButton.Keys("[Enter]");
    Log.Message("Last item selected: " + lastItemText);
}
 // Click and interact with the 'sourceDropdownButton'
InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.sourceDropdownButton);

// Function to interact with the dropdown using arrow keys
function InteractWithDropdown(sourceDropdownButton) {
    sourceDropdownButton.Click();
    Delay(1000);

    // Simulate pressing the down arrow key
    sourceDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var selectedItemText = sourceDropdownButton.Text;
    Log.Message("Selected Item: " + selectedItemText);

    // Loop through pressing the down arrow key and logging the text
    var numberOfItemsToNavigate = 16; // Adjust as needed
    var lastItemText;
    for (var i = 0; i < numberOfItemsToNavigate; i++) {
        // Simulate pressing the down arrow key
        sourceDropdownButton.Keys("[Down]");

        // Log the text of the currently selected item
        var currentItemText = sourceDropdownButton.Text;
        Log.Message("Item " + (i + 1) + ": " + currentItemText);

        // If it's the last iteration, remember the last item's text
        if (i === numberOfItemsToNavigate - 1) {
            lastItemText = currentItemText;
        }
    }

    // Simulate pressing the Enter key to select the last item
    sourceDropdownButton.Keys("[Enter]");
    Log.Message("Last item selected: " + lastItemText);
}

// Click and interact with the 'projectTypeDropdownButton'
InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.projectTypeDropdownButton);

// Function to interact with the dropdown using arrow keys
function InteractWithDropdown(projectTypeDropdownButton) {
    projectTypeDropdownButton.Click();
    Delay(1000);

    // Simulate pressing the down arrow key
    projectTypeDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var selectedItemText = projectTypeDropdownButton.Text;
    Log.Message("Selected Item: " + selectedItemText);

    // Loop through pressing the down arrow key and logging the text
    var numberOfItemsToNavigate = 3; // Adjust as needed
    var lastItemText;
    for (var i = 0; i < numberOfItemsToNavigate; i++) {
        // Simulate pressing the down arrow key
        projectTypeDropdownButton.Keys("[Down]");

        // Log the text of the currently selected item
        var currentItemText = projectTypeDropdownButton.Text;
        Log.Message("Item " + (i + 1) + ": " + currentItemText);

        // If it's the last iteration, remember the last item's text
        if (i === numberOfItemsToNavigate - 1) {
            lastItemText = currentItemText;
        }
    }

    // Simulate pressing the Enter key to select the last item
    projectTypeDropdownButton.Keys("[Enter]");
    Log.Message("Last item selected: " + lastItemText);
}
 //Clicks the 'lastPaintingCycleButton' control.
  Aliases.browser.pageLogon.leadContainer.lastPaintingCycleButton.SetText(LastPaintingCycle);
  // Click and interact with the 'stateDropdownButton'
InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.stateDropdownButton);

// Function to interact with the dropdown using arrow keys
function InteractWithDropdown(stateDropdownButton) {
    stateDropdownButton.Click();
    Delay(1000);

    // Simulate pressing the down arrow key
    stateDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var selectedItemText = stateDropdownButton.Text;
    Log.Message("Selected Item: " + selectedItemText);

    // Loop through pressing the down arrow key and logging the text
    var numberOfItemsToNavigate = 38; 
    var lastItemText;
    for (var i = 0; i < numberOfItemsToNavigate; i++) {
        // Simulate pressing the down arrow key
        stateDropdownButton.Keys("[Down]");

        // Log the text of the currently selected item
        var currentItemText = stateDropdownButton.Text;
        Log.Message("Item " + (i + 1) + ": " + currentItemText);

        // If it's the last iteration, remember the last item's text
        if (i === numberOfItemsToNavigate - 1) {
            lastItemText = currentItemText;
        }
    }

    // Simulate pressing the Enter key to select the last item
    stateDropdownButton.Keys("[Enter]");
    Log.Message("Last item selected: " + lastItemText);
}
// Click and interact with the 'jobTitleDropdownButton'
InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.jobTitleDropdownButton);

// Function to interact with the dropdown using arrow keys
function InteractWithDropdown(jobTitleDropdownButton) {
    jobTitleDropdownButton.Click();
    Delay(1000);

    // Simulate pressing the down arrow key
    jobTitleDropdownButton.Keys("[Down]");

    // Log the text of the currently selected item
    var selectedItemText = jobTitleDropdownButton.Text;
    Log.Message("Selected Item: " + selectedItemText);

    // Loop through pressing the down arrow key and logging the text
    var numberOfItemsToNavigate = 18; // Adjust as needed
    var lastItemText;
    for (var i = 0; i < numberOfItemsToNavigate; i++) {
        // Simulate pressing the down arrow key
        jobTitleDropdownButton.Keys("[Down]");

        // Log the text of the currently selected item
        var currentItemText = jobTitleDropdownButton.Text;
        Log.Message("Item " + (i + 1) + ": " + currentItemText);

        // If it's the last iteration, remember the last item's text
        if (i === numberOfItemsToNavigate - 1) {
            lastItemText = currentItemText;
        }
    }

    // Simulate pressing the Enter key to select the last item
    jobTitleDropdownButton.Keys("[Enter]");
    Log.Message("Last item selected: " + lastItemText);
}
//Drags the 'customerEmailTexBox' object.
 Aliases.browser.pageLogon.leadContainer.contectNametTextBox.SetText(CustomerName);
  //Drags the 'customerEmailTexBox' object.
 Aliases.browser.pageLogon.leadContainer.customerEmailTexBox.SetText(CustomerEmail);
  //Clicks the 'mobileNumberTextBox' control.
 Aliases.browser.pageLogon.leadContainer.mobileNumberTextBox.SetText(CustomerMobileNo);
  
  aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.saveAndOpenButton, "contentText", cmpEqual, "Save and Open");
  Aliases.browser.pageLogon.leadContainer.saveAndOpenButton.Click();
}