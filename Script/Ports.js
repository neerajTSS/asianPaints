var JsonReader = require("JsonReader");
var ExcelReader = require("ReadDataFromExcel");
var webElementWaits = require("WebElementWaits");
var excelDriverExecuted = false; 

function validateElementsWithExcel() {
  
 var jsonFilePath = "TestData\\Data.json";
    var jsonData = JsonReader.readJsonFile(jsonFilePath);
    var path = jsonData.Excelpath;
    var sheetName = jsonData.ExcelSheetName;
    var excelDriverSegments = DDT.ExcelDriver(path,sheetName);
    var excelValuesSegments = [];
    if (excelDriverExecuted) {
        Log.Warning("Validation for segments already executed. Exiting function.");
        return;
    }

    // Array to store Excel values for segments

    // Click on the segment dropdown button
    Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Click();
    var segment ="Ports";
    var segmentElement = Aliases.browser.pageLogon.FindElement("//li[contains(@class,'sapMSLI') and .//div[@class='sapMSLITitleOnly' and contains(text(),'" + segment + "')]]");
    segmentElement.Click();
    Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Click();
    Delay(5000);

    // Find all elements in the segment dropdown
       var subsegmentDropdownElements = Aliases.browser.pageLogon.FindElements("//ul[starts-with(@id, 'dropdownlistboxca597c13fe7214b57208b2ec262c7e0e_68-popup-list-listUl') and contains(@class, 'sapMListUl') and @role='listbox']/li[contains(@class, 'sapMSLI')]");
    Log.Warning("count is " + subsegmentDropdownElements.length);

    // Clear the array before loading new values
    excelValuesSegments = [];

    // Load all Excel values for segments into an array
    while (!excelDriverSegments.EOF()) {
        var excelValueSegment = excelDriverSegments.Value(0);
        excelValuesSegments.push(excelValueSegment);
        excelDriverSegments.Next();
    }

    // Iterate through segment elements
    for (var i = 0; i < subsegmentDropdownElements.length; i++) {
        var elementTextSegment = subsegmentDropdownElements[i].contentText;

        // Flag to check if the element text is found in Excel
        var foundSegment = false;

        // Iterate through Excel values array for segments
        for (var j = 0; j < excelValuesSegments.length; j++) {
          var xceldata = excelValuesSegments[j];
          Log.Message("xcel values" + xceldata);
            if (elementTextSegment == excelValuesSegments[j]) {
                Log.Message("Verified excel value is present in Segment Dropdown. Element is: " + elementTextSegment);
                foundSegment = true;
                break;
            }
        }

        // If the element text is not found in Excel
        if (!foundSegment) {
            Log.Warning("Validation Failed: Segment Dropdown element '" + elementTextSegment + "' does not match any value in Excel");
        }
    }

    // Perform the click action after subsegment validation
    // Click on the last subsegment element
    var lastSubsegmentElement = subsegmentDropdownElements[subsegmentDropdownElements.length - 1];
    lastSubsegmentElement.Click();
    var page = Aliases.browser.pageLogon;
    aqObject.CheckProperty(page.leadContainer.saveAndOpenButton, "contentText", cmpEqual, "Save and Open");
    Log.Message("Verified 'Save and Open' button is visible.");
    page.leadContainer.saveAndOpenButton.Click();
    Log.Message("Successfully Clicked on 'Save and Open' button.");
    // Set the flag to indicate that the validation for segments has been executed
    excelDriverExecuted = true;
}
module.exports.validateElementsWithExcel = validateElementsWithExcel;
// Call the function to validate elements against Excel values for segments
validateElementsWithExcel();
