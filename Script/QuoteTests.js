  var Quote = require("Quote");
 function BathQuoteAndPRF()
 {
    Browsers.Item(btChrome).Navigate("https://my349520.crm.ondemand.com/sap/ap/ui/clogin?saml2=disabled&app.component=%2fSAP_UI_CT%2fMain%2froot.uiccwoc&rootWindow=X&redirectUrl=%2fsap%2fpublic%2fbyd%2fruntime&supressAutoLogon=true#Nav/1/eyJ0aGluZ3BhcmFtcyI6eyJLZXkiOiJPYm5LZXkkPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLTE2XCI/PjxPYm5LZXk+PFNvdXJjZT48U291cmNlUGF0aD4vQllEX0NPRC9TYWxlc09uRGVtYW5kL09wcG9ydHVuaXR5L1VJL0NPRF9PcHBvcnR1bml0eV9TQURMLk9XTC51aWNvbXBvbmVudDwvU291cmNlUGF0aD48L1NvdXJjZT48UGF0aD4vUm9vdC9PcHBvcnR1bml0eVtDRDkzQkY3OEE1NEUxRURFQjVEOEY4MTkyNEMzQzhFQV0vSURfTmFtZU9XTDwvUGF0aD48RGF0YT48SURfTmFtZU9XTD42MDMwNzc5MjQ8L0lEX05hbWVPV0w+PC9EYXRhPjwvT2JuS2V5PiIsIlNvdXJjZVBhdGgiOiIvUm9vdC9PcHBvcnR1bml0eVtDRDkzQkY3OEE1NEUxRURFQjVEOEY4MTkyNEMzQzhFQV0vSURfTmFtZU9XTCJ9LCJpblBvcnQiOiJJbnNwZWN0IiwidGFyZ2V0IjoiL0JZRF9DT0QvU2FsZXNPbkRlbWFuZC9PcHBvcnR1bml0eS9VSS9DT0RfT3Bwb3J0dW5pdHlfVEkuVEkudWljb21wb25lbnQiLCJ3aW5JZCI6ImVjNDJkMTkzMGI4YzE3MmVmOTZmNTM1MmJmZjY0NmQ2In0=");
    Quote.clickOnQuoteAndPRF();
    Quote.clickOnNew();
    Quote.enterPrimaryDealerDetails();
    Quote.enterSkuDetails();
    Quote.enterProjectSiteDiscount();
    Quote.enterQuantity();
    Quote.clickOnGetPrice();  
    Quote.submitForApproval();
    Quote.getOverallInputAndID();
  }
  
  module.exports.BathQuoteAndPRF =BathQuoteAndPRF;