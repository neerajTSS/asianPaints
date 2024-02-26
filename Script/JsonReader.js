function readJsonFile(jsonFilePath) {
   
    // Create a File object to read the JSON file
    var file = aqFile.OpenTextFile(jsonFilePath, aqFile.faRead, aqFile.ctANSI);

    // Read the entire content of the file
    var jsonContent = file.ReadAll();

    // Close the file
    file.Close();

    // Parse the JSON content into an object
    return JSON.parse(jsonContent);
    }
    module.exports.readJsonFile = readJsonFile;