// Function to perform actions for the first segment
function performActionsForFirstSegment() {
  
 var excelDriverSegments = DDT.ExcelDriver("C:\\Users\\ChinnamaniG\\Desktop\\AsianPaintData.xlsx", "Sheet2");
var excelDriverExecuted = false;

// Array to store Excel values for segments
var excelValuesSegments = [];
    // Check if validation has already been performed for segments
    if (excelDriverExecuted) {
        Log.Warning("Validation for segments already executed. Exiting function.");
        return;
    }
  // Flag to track if the Excel drivers have been executed
var excelDriverExecuted = false;

// Array to store Excel values for segments
var excelValuesSegments = [];
    // Click on the first segment element based on Excel data
    var firstSegmentText = excelValuesSegments[0]; // Assuming you want to click on the first element in the array
    var firstSegmentElement = Aliases.browser.pageLogon.FindElement("/html/body/div[1]/div[2]/div/div/div/ul/li/div/div/div[contains(text(),'" + firstSegmentText + "')]");
    firstSegmentElement.Click();
    Log.Message("Clicked on the first segment element with text from Excel: " + firstSegmentText);

    // Click on the sub-segment dropdown button
    Aliases.browser.pageLogon.menuContainer1.subSegmentDropdownButton.Click();

    // Load Excel driver for sub-segments
    var excelDriverSubSegments = DDT.ExcelDriver("C:\\Users\\ChinnamaniG\\Desktop\\AsianPaintData.xlsx", "Infra");

    // Find all elements in the sub-segment dropdown
    var elementsSubSegments = Aliases.browser.pageLogon.FindElements("/html/body/div[1]/div[3]/div/div/div/ul/li");

    // Load all Excel values for sub-segments into an array
    var excelValuesSubSegments = [];
    while (!excelDriverSubSegments.EOF()) {
        var excelValueSubSegment = excelDriverSubSegments.Value(0);
        excelValuesSubSegments.push(excelValueSubSegment);
        excelDriverSubSegments.Next();
    }

    // Iterate through sub-segment elements
    for (var l = 0; l < elementsSubSegments.length; l++) {
        var elementTextSubSegment = elementsSubSegments[l].contentText;

        // Flag to check if the element text is found in Excel
        var foundSubSegment = false;

        // Iterate through Excel values array for sub-segments
        for (var m = 0; m < excelValuesSubSegments.length; m++) {
            if (elementTextSubSegment == excelValuesSubSegments[m]) {
                Log.Message("Verified excel value is present in Sub-Segment Dropdown. Element is: " + elementTextSubSegment);
                foundSubSegment = true;

                // Add any additional actions for sub-segments based on Excel data
                break;
            }
        }

        // If the element text is not found in Excel
        if (!foundSubSegment) {
            Log.Warning("Validation Failed: Sub-Segment Dropdown element '" + elementTextSubSegment + "' does not match any value in Excel");
        }
    }

    // Close Excel driver for sub-segments
    DDT.CloseDriver(excelDriverSubSegments.Name);
}

// Call the function to perform actions for the first segment
performActionsForFirstSegment();
