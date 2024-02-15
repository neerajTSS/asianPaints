
function validateElementsWithExcel() {
    // Load Excel driver for segments
    var excelDriverSegments = DDT.ExcelDriver("C:\Users\ChinnamaniG\Desktop\AsianPaintData.xlsx", "Sheet2");
var excelDriverExecuted = false;

// Array to store Excel values for segments
var excelValuesSegments = [];
    // Check if validation has already been performed for segments
    if (excelDriverExecuted) {
        Log.Warning("Validation for segments already executed. Exiting function.");
        return;
    }

    // Click on the segment dropdown button
    Aliases.browser.pageLogon.menuContainer1.segmentDropdownButton.Click();

    // Find all elements in the segment dropdown
    var elementsSegments = Aliases.browser.pageLogon.FindElements("/html/body/div[1]/div[2]/div/div/div/ul/li");

    // Clear the array before loading new values
    excelValuesSegments = [];

    // Load all Excel values for segments into an array
    while (!excelDriverSegments.EOF()) {
        var excelValueSegment = excelDriverSegments.Value(0);
        excelValuesSegments.push(excelValueSegment);
        excelDriverSegments.Next();
    }

    // Iterate through segment elements
    for (var i = 0; i < elementsSegments.length; i++) {
        var elementTextSegment = elementsSegments[i].contentText;

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

    // Set the flag to indicate that the validation for segments has been executed
    excelDriverExecuted = true;
  
}

// Call the function to validate elements against Excel values for segments
validateElementsWithExcel();
