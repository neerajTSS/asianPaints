
var Quote  = require("Quote");
var Logout = require("Logout")
var login  = require("Login")

let ExcelReader = require("ReadDataFromExcel");
let workflowUtility = require("WorkflowUtility");
 
const selectors = {

      buttons :
      {
       searchButton:"//div[@title='Search']",
       tickButton:"//div[@class='sapUiHLayout sapClientMCoreEmiliaStackPanelWidth']//span[@title='Approve']",
      checkApproved:"//span[text()='Approved']",
      },
     inputs:
     {
  enterRequestID:"//input[@type='search']",
     },
     }
function requestApprovals(){
 


 var overAllInput ="-2.78";
if (overAllInput < 15) {
   login.doLogin("P00114704","Welcome@01");
    Log.Message("Logging in as: SH - Arun Nair - P00114704");
    approvalProcess();
    
} else if (overAllInput >= 45 && overAllInput <= 52) {
   login.doLogin("P00103890","Welcome@01");
    Log.Message("Logging in as: DGM - Deepesh Menon - P00103890");
    approvalProcess();
} else if (overAllInput > 52) {
    login.doLogin("P00103890","Welcome@01");
   Log.Message("Logging in as: DGM - Deepesh Menon - P00103890");
    Logout.doLogOut();
    login.doLogin("P00100796","Welcome@01");
Log.Message("Logging in as: CM - Vikram Singh Dhingra - P00100796");
    Logout.doLogOut();
    login.doLogin("P00104996","Welcome@01");
    Log.Message("Logging in as: GM - Ashish Rae - P00104996");
    Logout.doLogOut();
    
} else {
   
    console.log("Invalid condition");
}
}
function approvalProcess(){
  let Browser = Sys.Browser();
  let Page = Browser.Page("*");
  Page.Wait();
   var requestID = "11387";
  Page.FindElement(selectors.buttons.searchButton).Click();
  Page.FindElement(selectors.inputs.enterRequestID).SetText(requestID);
  // Page.FindElement(selectors.inputs.enterRequestID).WaitProperty("contentDocument.readyState", "complete");
 // Page.FindElement(selectors.buttons.searchButton).Click();
 // Page.FindElement("//a[contains(text(),'" + requestID + "')]").Click();
 // Page.FindElement(selectors.buttons.tickButton).Click();
  
}
module.exports.requestApprovals = requestApprovals;