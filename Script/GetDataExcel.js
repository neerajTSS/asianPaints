// Helper function to get all Excel data
function getAllExcelData() {
    try {
        var excelFile = Excel.Open("C:\\Users\\ChinnamaniG\\Desktop\\Data.xlsx");
        if (excelFile) {
            var sheetIndex = 1; // Replace with your actual sheet index (1-based)
            excelFile.Sheet(sheetIndex); // Activate the desired sheet
            var lastRowIndex = excelFile.CurrentWorksheet.UsedRange.Rows.Count;
            var allData = [];

            // Create a temporary sheet in TestComplete to store the Excel data
            var tempSheet = Excel.CurrentSuite.Variables.AddVariable("ExcelData", false, true);
            tempSheet = Excel.CreateSheet("TempSheet");

            // Iterate through each row in the sheet and retrieve data
            for (var rowIndex = 2; rowIndex <= lastRowIndex; rowIndex++) {
                var cellValue = excelFile.CurrentWorksheet.Cell(rowIndex, 1).Value;
                tempSheet.Cell(rowIndex - 1, 1).Value = cellValue;
                allData.push(cellValue);
            }

            excelFile.Close();
            return allData;
        }
        Log.Warning("Failed to open Excel workbook.");
        return null;
    } catch (e) {
        Log.Error("Error accessing Excel: " + e.message);
        return null;
    }
}

// Helper function to print all Excel data
function printAllExcelData() {
    var allData = getAllExcelData();
    if (allData) {
        Log.Message("All Excel Data:");
        for (var i = 0; i < allData.length; i++) {
            Log.Message("Row " + (i + 2) + ": " + allData[i]); // Adding 2 to match Excel row index
        }
    }
}

// Example of printing all Excel data
printAllExcelData();
