function validateElementsWithExcel() {
    // Load Excel driver
    var excelDriver = DDT.ExcelDriver("C:\\Users\\ChinnamaniG\\Desktop\\AsianPaintData.xlsx", "Sheet2");
   // Aliases.browser.pageLogon.menuContainer1.segmentDropdownButton.Click();

    // Check if validation has already been performed
    if (excelDriverExecuted) {
        Log.Warning("Validation already executed. Exiting function.");
        return;
    }

    // Find all elements
    var elements = Aliases.browser.pageLogon.FindElements("/html/body/div[1]/div[2]/div/div/div/ul/li");

    // Load all Excel values into an array
    var excelValues = [];
    while (!excelDriver.EOF()) {
        var excelValue = excelDriver.Value(0);
        excelValues.push(excelValue);
        //Log.Message("Excel Value: " + excelValue); // Log Excel value
        excelDriver.Next();
    }

    // Iterate through elements
    for (var i = 0; i < elements.length; i++) {
        // Get element text
        var elementText = elements[i].contentText;
      //  Log.Message("Element " + (i + 1) + " Text: " + elementText); // Log element text

        // Flag to check if the element text is found in Excel
        var found = false;

        // Iterate through Excel values array
        for (var j = 0; j < excelValues.length; j++) {
            // Check if element text matches Excel value
            if (elementText == excelValues[j]) {
                Log.Message("Verified excel value is present in Dropdown." + "That dropdown Element is : "+ elementText);
                found = true;
                break;
            }
        }

        // If the element text is not found in Excel
        if (!found) {
            Log.Warning("Validation Failed: Dropdown element " + elementText + " does not match any value in Excel");
        }
    }

    // Set the flag to indicate that the validation has been executed
    excelDriverExecuted = true;

    // Close Excel driver
    DDT.CloseDriver(excelDriver.Name);

    // Click the "Infra (New Projects)" element
    var infraElement = Aliases.browser.pageLogon.FindElement("/html/body/div[1]/div[2]/div/div/div/ul/li[9]");
    infraElement.Click();
}

// Flag to track if the Excel driver has been executed
var excelDriverExecuted = false;

// Call the function to validate elements against Excel values
validateElementsWithExcel();
// Install the exceljs library using npm
// npm install exceljs

const ExcelJS = require('exceljs');

// Function to read data from Excel
async function readDataFromExcel(filePath, sheetName, row, column) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(sheetName);
    const cell = worksheet.getCell(row, column);

    return cell.value;
}

// Example usage
async function exampleUsage() {
    const excelFilePath = 'path/to/your/excel/file.xlsx';
    const sheetName = 'Sheet1';
    const row = 1;
    const column = 1;

    const data = await readDataFromExcel(excelFilePath, sheetName, row, column);
    console.log('Data from Excel:', data);
}

// Call the example usage function
exampleUsage();

