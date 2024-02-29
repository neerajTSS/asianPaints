function waitForElementVisible(object, timeout = 10000) {
    let result = object.WaitProperty("Visible", true, timeout);
    if (result) {
      Log.Message("Verified that button is visible on the screen");
      return object;
    }else {
      Log.Error("The element didn't become visible within " + timeout + " seconds.");
      return result;
    }
}
function waitForElementInVisible(object, timeout = 10000) {
    let result = object.WaitProperty("Visible", false, timeout);
    if (result) {
      Log.Message("Verified that button is invisible on the screen");
      return object;
    }else {
      Log.Error("The element didn't become invisible within " + timeout + " seconds.");
      return result;
    }
}
function waitForElementExists(object, timeout = 10000) {
    let result = object.WaitProperty("Exists", true, timeout);
    if (result) {
      Log.Message("Verified that button exists on the screen");
      return object;
    }else {
      Log.Error("The element didn't become exists within " + timeout + " seconds.");
      return result;
    }
}

module.exports.waitForElementVisible = waitForElementVisible;
module.exports.waitForElementInVisible = waitForElementInVisible;
module.exports.waitForElementExists = waitForElementExists;