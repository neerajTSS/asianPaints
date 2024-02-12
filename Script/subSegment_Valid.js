// Creates the driver (main routine)
function TestDriver()
{
  var Driver;
  
  // Creates the driver
  var elements = Aliases.browser.pageLogon.FindElements("/html/body/div[1]/div[2]/div/div/div/ul/li");
  Log.Message(elements.length);
  Driver = DDT.ExcelDriver("C:\\Users\\ChinnamaniG\\Desktop\\AsianPaintData.xlsx", "Sheet2");
  
  // Iterates through records
  RecNo = 0;
  while (!Driver.EOF())
  {
    for(var i = 0; i < Driver.ColumnCount; i++) {
      var columnValue = Driver.Value(i);
      
      // Log the column value
      Log.Message(aqConvert.VarToStr(columnValue));
    }
    
    Driver.Next(); // Goes to the next record
  }
  
  // Closing the driver
  DDT.CloseDriver(Driver.Name);
}
