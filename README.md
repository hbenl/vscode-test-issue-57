This sample extension demonstrates a problem when running vscode-test in a child process started from the extension host process.

Open this folder in VS Code and press F5.
In the Extension Development Host open the helloworld-test-sample from https://github.com/microsoft/vscode-extension-samples and run the command "Run vscode-test tests".
A child process will be started that runs the workspace script 'out/test/runTest.js' and its output will be shown in the Debug Console.
