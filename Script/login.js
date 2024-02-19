function Login()
{
  const credentials = getLoginCredential();
 
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate(credentials.url);
  Aliases.browser.BrowserWindow.Maximize();
  //Enter username
  const username = Aliases.browser.pageHomeSapCloudForCustomer.formLoginForm.textboxUsernameFieldInner
  username.WaitProperty('Visible',true,Project.Variables.PageLoadTimeout)
  username.SetText(credentials.username);
  //Enter password
  const password = Aliases.browser.pageHomeSapCloudForCustomer.formLoginForm.passwordboxPasswordFieldInner;
  password.WaitProperty('Visible',true,Project.Variables.Timeout);
  password.SetText(credentials.password);
 
  //Clicks the 'buttonLoginLink' button.
  const signin = Aliases.browser.pageHomeSapCloudForCustomer.formLoginForm.buttonLoginLink;
  signin.WaitProperty('Visible',true,Project.Variables.Timeout);
  signin.ClickButton();
  //Revisit
  Browsers.Item(btChrome).Navigate(credentials.url);
 
  //Checks Home header
  const header = Aliases.browser.pageHomeSapCloudForCustomer.titleHomePage.WaitProperty('Visible',true,Project.Variables.PageLoadTimeout);
}
 
function getLoginCredential()
{
  var excelFile = Excel.Open("TestData\\Login.xlsx");
  var excelSheet = excelFile.SheetByTitle("Login");
  var url = excelSheet.CellByName("A2").Value;
  var username = excelSheet.CellByName("B2").Value;
  var password = excelSheet.CellByName("C2").Value;
  return {url:url,username:username,password:password};
}