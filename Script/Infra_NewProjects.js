var excelDriverExecuted = false; // Declare the flag outside the function

function validateElementsWithExcel(segment) {
    // Load Excel driver for segments
    var excelDriverSegments = DDT.ExcelDriver("C:\\Users\\ChinnamaniG\\Desktop\\AsianPaintData.xlsx", "Infra");
    var excelValuesSegments = [];

    // Check if validation has already been performed for segments
    if (excelDriverExecuted) {
        Log.Warning("Validation for segments already executed. Exiting function.");
        return;
    }

    // Array to store Excel values for segments

    // Click on the segment dropdown button
    Aliases.browser.pageLogon.leadContainer.segmentDropdownButton.Click();
     var segment="(New Projects)";

    var segmentElement = Aliases.browser.pageLogon.FindElement("//*[@id='dropdownlistbox8d1033a88ed231847248f1761eeea1c7_5202-popup-list-listUl']/li/div/div/div[contains(text(),'" + segment + "')]");
    segmentElement.Click();
    Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Click();
    Delay(3000);

    // Find all elements in the segment dropdown
      var subsegmentDropdownElements = Aliases.browser.pageLogon.subsegmentDropdownElements;
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

    // Set the flag to indicate that the validation for segments has been executed
    excelDriverExecuted = true;
}

// Call the function to validate elements against Excel values for segments
validateElementsWithExcel();
