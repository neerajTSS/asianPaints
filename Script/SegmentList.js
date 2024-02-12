function validateElementsWithExcel() {
    // Load Excel driver
    var excelDriver = DDT.ExcelDriver("C:\\Users\\ChinnamaniG\\Desktop\\AsianPaintData.xlsx", "Sheet2");

    // Find all elements
    var elements = Aliases.browser.pageLogon.FindElements("//div[@id='dropdownlistbox8d1033a88ed231847248f1761eeea1c7_1141-popup-cont']//div//li");

    // Load all Excel values into an array
    var excelValues = [];
    while (!excelDriver.EOF()) {
        var excelValue = excelDriver.Value(0); // Use 0 to always get the value from the first column
        excelValues.push(excelValue);
        excelDriver.Next();
    }

    // Iterate through elements
    for (var i = 0; i < elements.length; i++) {
        // Get element text
        var elementText = elements[i].contentText;

        // Flag to check if the element text is found in Excel
        var found = false;

        // Iterate through Excel values array
        for (var j = 0; j < excelValues.length; j++) {
            // Check if element text matches Excel value
            if (elementText == excelValues[j]) {
                Log.Message("Validation Passed: Element text matches Excel value");
                found = true;
                break;
            }
        }

        // If the element text is not found in Excel
        if (!found) {
            Log.Warning("Validation Failed: Element text does not match any value in Excel");
        }
    }

    // Close Excel driver
    DDT.CloseDriver(excelDriver.Name);
}

// Call the function to validate elements against Excel values
validateElementsWithExcel();
