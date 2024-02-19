function readJsonFile(jsonFilePath) {
    // Create a File object to read the JSON file
    var file = aqFile.OpenTextFile(jsonFilePath, aqFile.faRead, aqFile.ctANSI);

    // Read the entire content of the file
    var jsonContent = file.ReadAll();

    // Close the file
    file.Close();

    // Parse the JSON content into an object
    return JSON.parse(jsonContent);
}
function Lead_Page() {
  
   var jsonFilePath = "TestData\\Data.json";

    // Retrieve username, password, and URL from JSON file
    var jsonData = readJsonFile(jsonFilePath);
    var PlaceName = jsonData.PlaceName;
    var LastPaintingCycle = jsonData.LastPaintingCycle;
    var CustomerName = jsonData.CustomerName;
    var CustomerMobileNo = jsonData.CustomerMobileNo;
    var CustomerEmail = jsonData.CustomerEmail;
    
//Log: Verify the + icon is visible on HomePage.
 aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.leadCreateButton, "title", cmpEqual, "Create");
 Log.Message("Verify the + icon is visible on HomePage.");

// Clicks the 'leadCreateButton' button.
Aliases.browser.pageLogon.leadContainer.leadCreateButton.ClickButton();

// Log: Verify that after clicking the + icon on HomePage Create dialog card should appear on screen.
Log.Message("Verify that after clicking the + icon on HomePage Create dialog card should appear on screen.");

// Checkpoint: Verify that the 'contentText' property of the 'leadOption' object equals 'Lead'.
aqObject.CheckProperty(Aliases.browser.pageLogon.sectionDialog.leadOption, "contentText", cmpEqual, "Lead");

// Log: Verify the Lead option should be visible on the Create dialog card.
Log.Message("Verify the Lead option should be visible on the Create dialog card.");

// Clicks the 'textnodeLead' control.
Aliases.browser.pageLogon.sectionDialog.leadOption.Click();

    // Verify 'New Lead' text
    aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.newLeadText, "title", cmpEqual, "New Lead");
    Log.Message("Verified 'New Lead' text.");

    // Set placeNameTextBox value
    Aliases.browser.pageLogon.leadContainer.placeNameTextBox.Click();
    Aliases.browser.pageLogon.leadContainer.placeNameTextBox.SetText(PlaceName);
    Log.Message("Set 'placeNameTextBox' value.");

    // Click on 'Search Site' button
    Aliases.browser.pageLogon.leadContainer.searchSiteButton.ClickButton();
    Delay(5000);

    // Click on addressCheckBox
    Aliases.browser.pageLogon.leadContainer.addressCheckBox.Click();
    Log.Message("Clicked on 'addressCheckBox'.");
    
// Checkpoint: Verify that the 'value' property of the 'lineOfBusiness' object equals 'Color Protect 2'.
if (aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.lineOfBusiness, "value", cmpEqual, "Color Protect 2"))
    Log.Message("Verified the Line of Business is auto-filled with 'Color Protect 2'");
else
    Log.Error("Line of Business is not auto-filled as expected");

// Checkpoint: Verify that the 'value' property of the 'subLineOfBusiness' object equals 'PC Segment.'.
if (aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.subLineOfBusiness, "value", cmpEqual, "PC Segment."))
    Log.Message("Verified the Sub Line of Business is auto-filled with 'PC Segment.'");
else
    Log.Error("Sub Line of Business is not auto-filled as expected");


    // Click on segmentDropdownButton and select the last item
    Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Click();
    Delay(3000);
    Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Keys("[Down]");
    Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Keys("[Enter]");
    Log.Message("Selected the last item from 'segmentDropdownButton'.");

    // Click on subSegmentDropdownButton and select the last item
    Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Click();
    Delay(3000);
    Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Keys("[Down]");
    Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Keys("[Enter]");
    Log.Message("Selected the last item from 'subSegmentDropdownButton'.");

    // Interact with dropdowns
    InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.stageDropdownButton);
    InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.sourceDropdownButton);
    InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.projectTypeDropdownButton);
    //InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.stateDropdownButton);
    InteractWithDropdown(Aliases.browser.pageLogon.leadContainer.jobTitleDropdownButton);
    
 
// Checkpoint: Verify that the 'value' property of the 'parentAccount' object equals '1449291 - Delhi'.
if (aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.parentAccount, "value", cmpEqual, "1449291 - Delhi"))
    Log.Message("Verified the Parent Account is auto-filled with '1449291 - Delhi'");
else
    Log.Error("Parent Account is not auto-filled as expected");

// Checkpoint: Verify that the 'value' property of the 'city' object equals 'New Delhi'.
if (aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.city, "value", cmpEqual, "New Delhi"))
    Log.Message("Verified the City is auto-filled with 'New Delhi'");
else
    Log.Error("City is not auto-filled as expected");

// Checkpoint: Verify that the 'value' property of the 'postalCode' object equals '110037'.
if (aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.postalCode, "value", cmpEqual, "110037"))
    Log.Message("Verified the Postal Code is auto-filled with '110037'");
else
    Log.Error("Postal Code is not auto-filled as expected");

// Checkpoint: Verify that the 'value' property of the 'countryRegion' object equals 'IN - India'.
if (aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.countryRegion, "value", cmpEqual, "IN - India"))
    Log.Message("Verified the Country/Region is auto-filled with 'IN - India'");
else
    Log.Error("Country/Region is not auto-filled as expected");
    // Set customer details
    Aliases.browser.pageLogon.leadContainer.contectNametTextBox.SetText(CustomerName);
    Aliases.browser.pageLogon.leadContainer.customerEmailTexBox.SetText(CustomerEmail);
    Aliases.browser.pageLogon.leadContainer.mobileNumberTextBox.SetText(CustomerMobileNo);

    // Verify 'Save and Open' button
    aqObject.CheckProperty(Aliases.browser.pageLogon.leadContainer.saveAndOpenButton, "contentText", cmpEqual, "Save and Open");
    Log.Message("Verified 'Save and Open' button is visible.");

    // Click on 'Save and Open' button
   Aliases.browser.pageLogon.leadContainer.saveAndOpenButton.Click();
    Log.Message("Successfully Clicked on 'Save and Open' button.");
}
 
// Function to interact with the dropdown using arrow keys
function InteractWithDropdown(dropdownButton) {
    dropdownButton.Click();
    Delay(1000);
    dropdownButton.Keys("[Down]");
    dropdownButton.Keys("[Enter]");
    Log.Message("Selected the last item from dropdown.");
}
