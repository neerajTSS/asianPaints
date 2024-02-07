function validateDropdownWithExcel() {
    // Click on subSegmentDropdownButton
    Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Click();
    Delay(1000); // Add delay if needed to ensure dropdown is fully loaded

    // Get the dropdown list object
    var dropdownList = Aliases.browser.pageLogon.leadContainer.subSegmentDropdownList;

    // Check if the dropdown list is found
    //if (dropdownList.Exists) {
        // Get the number of items in the dropdown
        var numberOfItems = 5;

        // Iterate through each item in the dropdown
        for (var i = 0; i < numberOfItems; i++) {
            // Click on the Down Arrow
            Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Keys("[Down]");

            // Get the text of the currently selected item
            var selectedItemText = Aliases.browser.pageLogon.leadContainer.subSegmentDropdownButton.Text;

            // Log the data
            Log.Message("Item " + (i + 1) + ": " + selectedItemText);

            // Check if the text is equal to the corresponding Excel data
            var excelText = getExcelTextForIndex(i); // Corrected function name
            if (selectedItemText !== excelText) {
                Log.Warning("Mismatch with Excel data for Item " + (i + 1));
            }
        }
}
// Helper function to get Excel text based on index (replace with your logic)
function getExcelTextForIndex(index) {
    try {
        var excelFile = Excel.Open("C:\\Users\\ChinnamaniG\\Desktop\\Data.xlsx");
        if (excelFile) {
            var sheetName = "Sheet1"; // Replace with your actual sheet name
            var sheet = excelFile.Worksheets(sheetName);
            if (sheet) {
                var cellValue = sheet.Cell(index + 2, 1).Value; // Assuming Excel data starts from the second row (index + 2)
                excelFile.Close();
                return cellValue;
            }
        }
        Log.Warning("Failed to open Excel worksheet or worksheet not found.");
        return null;
    } catch (e) {
        Log.Error("Error accessing Excel: " + e.message);
        return null;
    }
}

// Example of using the method
validateDropdownWithExcel();

