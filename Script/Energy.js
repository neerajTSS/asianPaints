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
var JsonReader = require("JsonReader");
var ExcelReader = require("ReadDataFromExcel");
var webElementWaits = require("WebElementWaits");
var excelDriverExecuted = false; // Declare the flag outside the function

function validateElementsWithExcel() {
   var jsonFilePath = "Data.json";
    var jsonData = JsonReader.readJsonFile(jsonFilePath);
    var path = jsonData.Excelpath;
    var sheetName = jsonData.ExcelSheetName;
    var ExcelData = ExcelReader.readDataUsingHeaderFromExcel(path, sheetName, rowIndex = 2);
  
//    var jsonFilePath = "TestData\\Data.json";
//    Retrieve username, password, and URL from JSON file
//    var jsonData = readJsonFile(jsonFilePath);
//    var excelpath = jsonData.Excelpath;
//  var sheetname = jsonData.SegmentSheetName;
//    var segment = jsonData.SegmentItemName;
//    // Load Excel driver for segments
    var excelDriverSegments = DDT.ExcelDriver(path,sheetName);
    var excelValuesSegments = [];
    // Check if validation has already been performed for segments
    if (excelDriverExecuted) {
        Log.Warning("Validation for segments already executed. Exiting function.");
        return;
    }
    // Click on the segment dropdown button
    var segment = "Energy";
    Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Click();
    var segmentElement = Aliases.browser.pageLogon.FindElement("//li[contains(@class,'sapMSLI') and .//div[@class='sapMSLITitleOnly' and contains(text(),'" + segment + "')]]");
    segmentElement.Click();
    Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Click();
    Delay(3000);
    // Find all elements in the segment dropdown
    var subsegmentElements = Aliases.browser.pageLogon.leadContainer.FindElements("//ul[starts-with(@id, 'dropdownlistboxca597c13fe7214b57208b2ec262c7e0e_68-popup-list-listUl') and contains(@class, 'sapMListUl') and @role='listbox']/li[contains(@class, 'sapMSLI')]");
    Log.Warning("count is " + subsegmentElements.length);
    // Clear the array before loading new values
    excelValuesSegments = [];
    // Load all Excel values for segments into an array
        while (!excelDriverSegments.EOF()) {
        var excelValueSegment = excelDriverSegments.Value(0);
        excelValuesSegments.push(excelValueSegment);
        excelDriverSegments.Next();
    }

    // Iterate through segment elements
    for (var i = 0; i < subsegmentElements.length; i++) {
        var elementTextSegment = subsegmentElements[i].contentText;
        Log.Message("elements" + elementTextSegment);

        // Flag to check if the element text is found in Excel
        var foundSegment = false;

        // Iterate through Excel values array for segments
        for (var j = 0; j < excelValuesSegments.length; j++) {
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

    // Click on the last subsegment element
    Delay(3000);
    var lastSubsegmentElement = subsegmentElements[subsegmentElements.length - 1];
    lastSubsegmentElement.Click();
    // Set the flag to indicate that the validation for segments has been executed
    excelDriverExecuted = true;
}

// Call the function to validate elements against Excel values for segments
    validateElementsWithExcel();
