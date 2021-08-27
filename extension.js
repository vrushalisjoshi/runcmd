const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "runcmd" is now active!');

  let disposable = vscode.commands.registerCommand(
    "runcmd.helloWorld",
    function () {
      vscode.window.showInformationMessage("Hello World from runcmd!");
    }
  );

  context.subscriptions.push(disposable);

  context.subscriptions.push(
    vscode.commands.registerCommand("runcmd.createAndSend", () => {
      const command = "echo 'Hello VSCODE!!'";
      const term = vscode.window.createTerminal("New Terminal");
      term.show();
      term.sendText(`${command}`);
    })
  );
}
        
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
