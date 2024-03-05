

let ExcelReader = require("ReadDataFromExcel");
let workflowUtility = require("WorkflowUtility");
 
const selectors = {

      buttons :
      {
        quoteAndPRF:"//div[text()='Quote & PRF']",
        newButton:"//bdi[text()='New']",
        primaryDealer:"//div[.='Primary Dealer']//div[@class='sapMInputBaseIconContainer']",
        search:"//button[.='Search']",
        selectDealerOption:"//span[text()='299199']",
        more:"//button[@class='sapMBtnBase sapMBtn sapClientMHeaderMoreLessButton']",
        sku:"//span[@title='SKU']/following::span",
        selectSkuOption:"//span[text()='ALPC101CPFL']",
        add:"//bdi[text()='Add']",
        getPrice:"//bdi[text()='Get Price']",
        save:"//bdi[text()='Save']",
        actions:"//bdi[text()='Actions']",
        submitForApproval:"//bdi[text()='Submit for Approval']",
      },
     inputs:
     {
     projectSiteDiscount:"//span[@title='Project Site Discount (%)']//following-sibling::div//input",
     searchInput:"//input[@type='search']",  
     quantity:"//tr/td[7]//input[contains(@class, 'sapMInputBaseInner')]",
     },
     getText:
     { 
     overAllInput :"//span[@title='Overall Input (%)']//following-sibling::div//span",
     requestID:"//span[@title='ID']/..//div//span",
     },
};  
function clickOnQuoteAndPRF()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
  Page.FindElement(selectors.buttons.quoteAndPRF).Click();
}
function clickOnNew()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
  Page.FindElement(selectors.buttons.newButton).Click();
}
function enterProjectSiteDiscount()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
  let rowData = ExcelReader.readDataUsingHeaderFromExcel("AsianPaintData.xlsx", "Sheet1")
  Page.FindElement(selectors.buttons.more).Click();
  Page.FindElement(selectors.inputs.projectSiteDiscount).SetText(rowData.ProjectSiteDiscount);
}
function enterPrimaryDealerDetails()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
  let rowData = ExcelReader.readDataUsingHeaderFromExcel("AsianPaintData.xlsx", "Sheet1")
  Page.FindElement(selectors.buttons.primaryDealer).Click();
  Page.FindElement(selectors.buttons.search).Click();
  Page.FindElement(selectors.inputs.searchInput).SetText(rowData.Dealer);
  Page.FindElement(selectors.buttons.selectDealerOption).Click();
}
function enterSkuDetails()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
  let rowData = ExcelReader.readDataUsingHeaderFromExcel("AsianPaintData.xlsx", "Sheet1")
  Page.FindElement(selectors.buttons.add).Click();
  Page.FindElement(selectors.buttons.sku).Click();
  Page.FindElement(selectors.buttons.search).Click();
  Page.FindElement(selectors.inputs.searchInput).SetText(rowData.SKU);
  Page.FindElement(selectors.buttons.selectSkuOption).Click();
  Page.FindElement(selectors.buttons.add).Click();
}
function enterQuantity()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
  let rowData = ExcelReader.readDataUsingHeaderFromExcel("AsianPaintData.xlsx", "Sheet1")
  Page.FindElement(selectors.inputs.quantity).SetText(rowData.Quantity);
}
 function clickOnGetPrice()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
  Page.FindElement(selectors.buttons.getPrice).Click();
  Page.FindElement(selectors.buttons.getPrice).WaitProperty("contentDocument.readyState", "complete");
  Page.FindElement(selectors.buttons.save).Click();
}
 function getOverallInputAndID()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait(); 
  var overAllInput = Page.FindElement(selectors.getText.overAllInput).textContent;
  Log.Message("Overall Input Percentage is : " + overAllInput);
  var requestID = Page.FindElement(selectors.getText.requestID).textContent;
  Log.Message("Approval Request ID is : " + requestID);
}
function submitForApproval()
{
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
  Page.FindElement(selectors.buttons.actions).WaitProperty("contentDocument.readyState", "complete");
  Page.FindElement(selectors.buttons.actions).Click();
  Page.FindElement(selectors.buttons.submitForApproval).WaitProperty("contentDocument.readyState", "complete");
  Page.FindElement(selectors.buttons.submitForApproval).Click();
}
 module.exports.clickOnGetPrice = clickOnGetPrice;  
 module.exports.submitForApproval = submitForApproval;
 module.exports.clickOnQuoteAndPRF = clickOnQuoteAndPRF;
 module.exports.getOverallInputAndID = getOverallInputAndID;
 module.exports.clickOnNew = clickOnNew;
 module.exports.enterProjectSiteDiscount = enterProjectSiteDiscount;
 module.exports.enterPrimaryDealerDetails = enterPrimaryDealerDetails;
 module.exports.enterSkuDetails = enterSkuDetails;
 module.exports.enterQuantity = enterQuantity;
 