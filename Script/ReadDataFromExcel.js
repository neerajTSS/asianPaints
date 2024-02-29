
function readDataUsingHeaderFromExcel(path, sheetName, rowIndex = 2) {
    const excelFile = Excel.Open(path);
 
    const excelSheet = excelFile.SheetByTitle(sheetName);
    const columnCount = excelSheet.ColumnCount;
    const headers = [];
    const value = {};
    for (let columnIndex = 1; columnIndex <= columnCount; columnIndex ++) {
       let header = excelSheet.Cell(columnIndex, 1).Value;
       let cellValue = excelSheet.Cell(columnIndex, rowIndex).Value;
       value[header] = cellValue;
       }
    return value;
}
 module.exports.readDataUsingHeaderFromExcel = readDataUsingHeaderFromExcel;
 
 
