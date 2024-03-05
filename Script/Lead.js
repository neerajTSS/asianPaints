// Import necessary modules
var JsonReader = require("JsonReader");
var ExcelReader = require("ReadDataFromExcel");
var webElementWaits = require("WebElementWaits");


function LeadCreation() {
  
    var jsonFilePath = "Data.json";
    var jsonData = JsonReader.readJsonFile(jsonFilePath);
    var path = jsonData.Excelpath;
    var sheetName = jsonData.ExcelSheetName;
    var ExcelData = ExcelReader.readDataUsingHeaderFromExcel(path, sheetName, rowIndex = 2);
    
    // Extract specific data from ExcelData
    var placename = ExcelData.PlaceName;
    var CustomerName = ExcelData.CustomerName;
    var CustomerMobileNo = ExcelData.MobileNumber;
    var CustomerEmail = ExcelData.CustomerEmail;
    var Discount = ExcelData.Discount;
    var BathRoomsCount = ExcelData.BathRoomsCount;
    var Address = ExcelData.Address;
    var page = Aliases.browser.pageLogon;
    var createButton = page.leadContainer.leadCreateButton;
    
    aqObject.CheckProperty(createButton, "title", cmpEqual, "Create");
     webElementWaits.waitForElementVisible(createButton).ClickButton();
    Log.Message("Verify the + icon is visible on HomePage.");
    
    CheckProperty(page.sectionDialog.leadOption, "contentText", cmpEqual, "Lead");
    Log.Message("Verify the Lead option should be visible on the Create dialog card.");
    
    var leadOption = page.sectionDialog.leadOption;
    webElementWaits.waitForElementVisible(leadOption).Click();
    aqObject.CheckProperty(page.leadContainer.newLeadText, "title", cmpEqual, "New Lead");
    Log.Message("Verified 'New Lead' text.");
    
    page.leadContainer.placeNameTextBox.Click();
    page.leadContainer.placeNameTextBox.SetText(placename);
    Log.Message("Set 'placeNameTextBox' value." + placename);
    
    page.leadContainer.searchSiteButton.ClickButton();
    
    var checkBox = page.leadContainer.addressCheckBox;
    webElementWaits.waitForElementVisible(checkBox,20000).Click();
    Log.Message("Clicked on 'addressCheckBox'.");

    aqObject.CheckProperty(page.leadContainer.lineOfBusiness, "value", cmpEqual, "AP Living");    
    aqObject.CheckProperty(page.leadContainer.subLineOfBusiness, "value", cmpEqual, "Bath");
       
    InteractWithDropdown(page.leadContainer.segmentDropdownButton);
    InteractWithDropdown(page.leadContainer.subSegmentDropdownButton);
    InteractWithDropdown(page.leadContainer.stageDropdownButton);
    InteractWithDropdown(page.leadContainer.sourceDropdownButton);
    InteractWithDropdown(page.leadContainer.projectTypeDropdownButton);
    page.textboxInputfieldea86a0975eb9aa1.SetText(Discount);
    page.textboxInputfield525fd696933ac8d.SetText(BathRoomsCount);
    InteractWithDropdown(page.textboxInputfieldn45wkuGmamkvScy);
    InteractWithDropdown(page.textboxDropdownlistbox650a22d43a);
    Aliases.browser.pageLogon.leadContainer.city.Click();
    Aliases.browser.pageLogon.leadContainer.city.SetText(Address);
    InteractWithDropdown(page.leadContainer.jobTitleDropdownButton);
    page.leadContainer.contectNametTextBox.SetText(CustomerName);
    page.leadContainer.customerEmailTexBox.SetText(CustomerEmail);
    page.leadContainer.mobileNumberTextBox.SetText(CustomerMobileNo);
   
    aqObject.CheckProperty(page.leadContainer.saveAndOpenButton, "contentText", cmpEqual, "Save and Open");
    Log.Message("Verified 'Save and Open' button is visible.");
    page.leadContainer.saveAndOpenButton.Click();
    Log.Message("Successfully Clicked on 'Save and Open' button.");
    
     var container = Aliases.browser.pageLogon.leadContainer;
    
  aqObject.CheckProperty(container.buttonActions, "contentText", cmpEqual, "Actions");
  Aliases.browser.pageLogon.Keys("[F5]");
  Delay(10000);
  webElementWaits.waitForElementVisible(container.buttonActions).ClickButton();
}

// Function to interact with the dropdown using arrow keys
function InteractWithDropdown(dropdownButton) {
    
    Log.Message("Dropdown Button Properties: " + aqObject.GetProperties(dropdownButton));

    // Check if dropdownButton supports the Click method
    if ("Click" in dropdownButton) {
        Log.Message("Click method is available for dropdownButton.");
        dropdownButton.Click();
        dropdownButton.WaitProperty("contentDocument.readyState", "complete");
        dropdownButton.Keys("[Down]");
        dropdownButton.Keys("[Enter]");
        Log.Message("Selected the last item from dropdown.");
    } else {
        Log.Error("Click method is not available for dropdownButton. Check object identification and properties.");
    }
    
   
  
}
module.exports.LeadCreation = LeadCreation;
