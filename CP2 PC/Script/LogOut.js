function LogOut()
{
  Aliases.browser.BrowserWindow.Maximize();
  Aliases.browser.pageLogon.headerMainshellNRJ.textnodeCustomer.Click();
  Aliases.browser.pageLogon.headerMainshellNRJ.buttonSignOut.Click();
  Aliases.explorer.wndShell_SecondaryTrayWnd.DesktopWindowXamlSource.Click(1212, 23);
  aqObject.CheckProperty(Aliases.browser.pageLogon.textnodeMbox0Title, "VisibleOnScreen", cmpEqual, true);
  Log.Message("SignOut popUp is visible on the Screen\r\n", "");
  Aliases.browser.BrowserWindow.Maximize();
  Aliases.browser.pageLogon.headerMainshellNRJ.buttonYes.ClickButton();
  Aliases.browser.BrowserWindow.Close();
}