function validateAndSelectSegmentAndSubsegment(segment) {
    // Click on the segment dropdown button
    Aliases.browser.pageLogon.menuContainer1.segmentDropdownButton.Click();

    // Click on the specified segment button (e.g., first, second, etc.)
    var segmentElement = Aliases.browser.pageLogon.FindElement("/html/body/div[1]/div[2]/div/div/div/ul/li/div/div/div[contains(text(),'" + segment + "')]");
    segmentElement.Click();

    // Click on the subsegment dropdown button
    Aliases.browser.pageLogon.subsegmentDropdownButton.Click();

    // Load Excel driver for subsegments
    var excelDriverSubsegments = DDT.ExcelDriver("C:\\Users\\ChinnamaniG\\Desktop\\AsianPaintData.xlsx", "Sheet1");
    var excelValuesSubsegments = [];

    // Load all Excel values for subsegments into an array
    while (!excelDriverSubsegments.EOF()) {
        var excelValueSubsegment = excelDriverSubsegments.Value(0);
        excelValuesSubsegments.push(excelValueSubsegment);
        excelDriverSubsegments.Next();
    }

    // Validate subsegment dropdown values against Excel values
    var subsegmentDropdownElements = Aliases.browser.pageLogon.FindElements("/html/body/div[1]/div[2]/div/div/div/ul/li/div/div/div");
    for (var i = 0; i < subsegmentDropdownElements.length; i++) {
        var elementTextSubsegment = subsegmentDropdownElements[i].contentText;

        // Check if the element text is found in Excel
        if (excelValuesSubsegments.indexOf(elementTextSubsegment) !== -1) {
            Log.Message("Verified Excel value is present in Subsegment Dropdown. Element is: " + elementTextSubsegment);
        } else {
            Log.Warning("Validation Failed: Subsegment Dropdown element '" + elementTextSubsegment + "' does not match any value in Excel");
        }
    }

    // Click on the second segment dropdown button
    Aliases.browser.pageLogon.menuContainer1.segmentDropdownButton.Click();

    // Click on the specified second segment button (e.g., first, second, etc.)
    segmentElement.Click();

    // Click on the subsegment dropdown button again for the second segment
    Aliases.browser.pageLogon.subsegmentDropdownButton.Click();
}

// Example usage:
var firstSegment = "YourFirstSegment";
var secondSegment = "YourSecondSegment";

validateAndSelectSegmentAndSubsegment(firstSegment);

validateAndSelectSegmentAndSubsegment(secondSegment);
