var onRun = function(context) {
  function runCommand(command, args) {
    var task = NSTask.alloc().init();
    task.setLaunchPath_(command);
    task.arguments = args;
    task.launch()
  }

  var sketch = require('sketch');
  var document = require('sketch/dom').getSelectedDocument();
  var rootPath = context.scriptPath
          .stringByDeletingLastPathComponent()
          .stringByDeletingLastPathComponent()
          .stringByDeletingLastPathComponent();
  console.log(rootPath);
  var shScriptPath = rootPath + "/Contents/Resources/test.sh"
  console.log(shScriptPath);
  var currentDocumentPath = decodeURIComponent(document.path);
  console.log(currentDocumentPath);

  runCommand("/bin/bash", [shScriptPath,currentDocumentPath])
};
