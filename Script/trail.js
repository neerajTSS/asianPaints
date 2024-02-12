function performActionsForEachRow() {
    // Load Excel driver
    var excelDriver = DDT.ExcelDriver("C:\\Users\\ChinnamaniG\\Desktop\\AsianPaintData.xlsx", "Sheet1");

    // Get the browser
    var browser = Sys.Browser("chrome"); // Use "chrome" for Google Chrome

    // Iterate through each row
    while (!excelDriver.EOF()) {
        // Read data from the first column of the current row
        var excelText = excelDriver.Value(0);

        // Construct dynamic XPath based on the Excel data
        var dynamicXPath = "/html/body/div[1]/div[2]/div/div/div/ul/li[contains(text(), '" + excelText + "')]";

        // Find the element and perform actions
        var element = aqUtils.Find(browser, dynamicXPath, 1);
        if (element) {
            // Perform your actions here, for example, click on the element
            aqObject.Click(element);
            Log.Message(`Clicked on element with text from Excel: ${excelText}`);
        } else {
            Log.Warning(`Element with text from Excel '${excelText}' not found.`);
        }

        // Move to the next row
        excelDriver.Next();
    }

    // Close Excel driver
    DDT.CloseDriver(excelDriver.Name);
}

// Example usage
performActionsForEachRow();
