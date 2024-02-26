// Import necessary modules
var JsonReader = require("JsonReader");
var ExcelReader = require("ExcelReader");

// Main function for Lead Page
function Lead_Page() {
  
    // Read JSON file path from TestData
    var jsonFilePath = "TestData\\Data.json";

    // Retrieve data from JSON file using JsonReader module
    var jsonData = JsonReader.readJsonFile(jsonFilePath);

    // Extract Excel file path and sheet name from JSON data
    var path = jsonData.Excelpath;
    var sheetName = jsonData.ExcelSheetName;

    // Read data from Excel using ExcelReader module
    var ExcelData = ExcelReader.readDataUsingHeaderFromExcel(path, sheetName, rowIndex = 2);

    // Extract specific data from ExcelData
    var placename = ExcelData.PlaceName;
    var CustomerName = ExcelData.CustomerName;
    var CustomerMobileNo = ExcelData.MobileNumber;
    var CustomerEmail = ExcelData.CustomerEmail;

    // Access the browser page
    var page = Aliases.browser.pageLogon;

    // Check if the leadCreateButton has the expected title
    aqObject.CheckProperty(page.leadContainer.leadCreateButton, "title", cmpEqual, "Create");
    Log.Message("Verify the + icon is visible on HomePage.");

    // Click on the leadCreateButton
    page.leadContainer.leadCreateButton.ClickButton();

    // Check if the leadOption has the expected contentText
    CheckProperty(page.sectionDialog.leadOption, "contentText", cmpEqual, "Lead");
    Log.Message("Verify the Lead option should be visible on the Create dialog card.");

    // Click on the leadOption
    page.sectionDialog.leadOption.Click();

    // Check if the newLeadText has the expected title
    aqObject.CheckProperty(page.leadContainer.newLeadText, "title", cmpEqual, "New Lead");
    Log.Message("Verified 'New Lead' text.");

    // Set the placeNameTextBox value
    page.leadContainer.placeNameTextBox.Click();
    Delay(3000);
    page.leadContainer.placeNameTextBox.SetText(placename);
    Log.Message("Set 'placeNameTextBox' value." + placename);

    // Click on the searchSiteButton
    page.leadContainer.searchSiteButton.ClickButton();
    Delay(5000);

    // Click on the addressCheckBox
    page.leadContainer.addressCheckBox.Click();
    Log.Message("Clicked on 'addressCheckBox'.");

    // Check if the lineOfBusiness is auto-filled as expected
    if (aqObject.CheckProperty(page.leadContainer.lineOfBusiness, "value", cmpEqual, "AP Living"))
        Log.Message("Verified the Line of Business is auto-filled with 'AP Living'");
    else
        Log.Error("Line of Business is not auto-filled as expected");

    // Check if the subLineOfBusiness is auto-filled as expected
    if (aqObject.CheckProperty(page.leadContainer.subLineOfBusiness, "value", cmpEqual, "Bath"))
        Log.Message("Verified the Sub Line of Business is auto-filled with 'Bath'");
    else
        Log.Error("Sub Line of Business is not auto-filled as expected");

    // Click on the segmentDropdownButton and select the last item
    page.leadContainer.segmentDropdownButton.Click();
    Delay(3000);
    page.leadContainer.segmentDropdownButton.Keys("[Down]");
    page.leadContainer.segmentDropdownButton.Keys("[Enter]");
    Log.Message("Selected the last item from 'segmentDropdownButton'.");

    // Click on the subSegmentDropdownButton and select the last item
    page.leadContainer.subSegmentDropdownButton.Click();
    Delay(3000);
    page.leadContainer.subSegmentDropdownButton.Keys("[Down]");
    page.leadContainer.subSegmentDropdownButton.Keys("[Enter]");
    Log.Message("Selected the last item from 'subSegmentDropdownButton'.");

    // Interact with various dropdowns
    InteractWithDropdown(page.leadContainer.stageDropdownButton);
    InteractWithDropdown(page.leadContainer.sourceDropdownButton);
    InteractWithDropdown(page.leadContainer.projectTypeDropdownButton);
    page.textboxInputfieldea86a0975eb9aa1.SetText("10");
    page.textboxInputfield525fd696933ac8d.SetText("5");
    InteractWithDropdown(page.textboxInputfieldn45wkuGmamkvScy);
    InteractWithDropdown(page.textboxDropdownlistbox650a22d43a);
     Aliases.browser.pageLogon.leadContainer.city.Click();
  //Sets the text ' Test' in the 'city' text editor.
  Aliases.browser.pageLogon.leadContainer.city.SetText("Test");
    InteractWithDropdown(page.leadContainer.jobTitleDropdownButton);

    // Check if the parentAccount is auto-filled as expected
  //  if (aqObject.CheckProperty(page.leadContainer.parentAccount, "value", cmpEqual, "1449291 - Delhi"))
      //  Log.Message("Verified the Parent Account is auto-filled with '1449291 - Delhi'");
 //   else
      //  Log.Error("Parent Account is not auto-filled as expected");

    // Set customer details
    page.leadContainer.contectNametTextBox.SetText(CustomerName);
    page.leadContainer.customerEmailTexBox.SetText(CustomerEmail);
    page.leadContainer.mobileNumberTextBox.SetText(CustomerMobileNo);

    // Check if the saveAndOpenButton is visible
    aqObject.CheckProperty(page.leadContainer.saveAndOpenButton, "contentText", cmpEqual, "Save and Open");
    Log.Message("Verified 'Save and Open' button is visible.");

    // Click on the saveAndOpenButton
    page.leadContainer.saveAndOpenButton.Click();
    Log.Message("Successfully Clicked on 'Save and Open' button.");
}

// Function to interact with the dropdown using arrow keys
function InteractWithDropdown(dropdownButton) {
    Log.Message("Interacting with dropdown using arrow keys.");

    // Log properties of the dropdownButton
    Log.Message("Dropdown Button Properties: " + aqObject.GetProperties(dropdownButton));

    // Check if dropdownButton supports the Click method
    if ("Click" in dropdownButton) {
        Log.Message("Click method is available for dropdownButton.");
        dropdownButton.Click();
        Delay(3000);
        dropdownButton.Keys("[Down]");
        dropdownButton.Keys("[Enter]");
        Log.Message("Selected the last item from dropdown.");
    } else {
        Log.Error("Click method is not available for dropdownButton. Check object identification and properties.");
    }
}

