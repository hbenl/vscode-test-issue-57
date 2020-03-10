// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { fork } from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-test-issue-57" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.runTests', () => {
		// The code you place here will be executed every time your command is executed

		const workspacePath = vscode.workspace.workspaceFolders![0].uri.fsPath;

		console.log('Creating child process');

		const cp = fork(
			path.resolve(workspacePath, 'out/test/runTest.js'),
			[],
			{
//				execPath: '/usr/bin/node',
				execArgv: [],
				stdio: 'pipe'
			}
		);

		cp.stdout?.on('data', data => console.log(data.toString()));
		cp.stderr?.on('data', data => console.log(data.toString()));
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
