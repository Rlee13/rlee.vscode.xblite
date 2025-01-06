// 'use strict';
const vscode = require('vscode');
const xbk = require('./xblite-data');
const fs = require('fs').promises;
const path = require("path");
const net = require('node:net');

const xblite_tabSize = 2; // Replace with the desired tabSize value
// Update the configuration
vscode.workspace.getConfiguration().update('editor.tabSize', xblite_tabSize, vscode.ConfigurationTarget.Workspace);
vscode.workspace.getConfiguration().update('editor.quickSuggestions', true, vscode.ConfigurationTarget.Workspace);

let client;

exports.activate = function(context) {


    //
    // HOVER SECTION
    //
    // CTRL+K, CTRL+I
    //
	let disposable = vscode.languages.registerHoverProvider('xl', {
		// @ts-ignore
		provideHover: (document, position, token) => {
            
            let ret = ""; let xret = ""; let xrem = ""; let xexp = ""; let xsea = ""; let xpar;
            let funcname = "";
            let xdoc = xrem = xret = xexp = xsea = xpar = "";
            let hline = "\n ___ \n";
            const hoverLineText = document.lineAt(position.line).text;

            // if token is a function
            if (/\b\w+(?=\(.*\))/g.test(hoverLineText)) {
                funcname = /\b\w+(?=\(.*\))/g.exec(hoverLineText)[0];
                
                if (xbk.xlHelpFiles.hasOwnProperty(funcname)) {
                    xdoc = xbk.xlHelpFiles[funcname].Definition;
                    xrem = xbk.xlHelpFiles[funcname].Remarks;
                    xret = xbk.xlHelpFiles[funcname].ReturnValues;
                    xexp = xbk.xlHelpFiles[funcname].Example;
                    xsea = xbk.xlHelpFiles[funcname].SeeAlso;
                    xpar = xbk.xlHelpFiles[funcname].Parameters;
                }
            }
            // if token is a statement
            if (!xdoc) {
                const range = document.getWordRangeAtPosition(position);
                const word = document.getText(range);
                if (word.length > 40 ) return "";  // range too big (40 max no of chars in functions name)
                if (xbk.xlHelpFiles.hasOwnProperty(word)) {
                    xdoc = xbk.xlHelpFiles[word].Definition;
                    xrem = xbk.xlHelpFiles[word].Remarks;
                    xret = xbk.xlHelpFiles[word].ReturnValues;
                    xexp = xbk.xlHelpFiles[word].Example;
                    xsea = xbk.xlHelpFiles[word].SeeAlso;
                    xpar = "";
                }
            }

            ret = (xdoc) ?? "";
            ret = ret + ((xrem) ? (hline + "**Remarks:** " + xrem + "\n ") : "");
            // parameters
            if (xpar instanceof Array) {
                ret = ret + hline;
                xpar.forEach(function(el){
                    ret = ret + "\n\n*@param* ```" + el.name + "```" + "--" + el.text + ".\n"; 
                })
            }
            //
            ret = ret + ((xret) ? (hline + "**@return:** " + xret + ".\n") : "");
            ret = ret + ((xexp) ? (hline + "**Example:** \n\n ```xl \n" + xexp + "\n```") : "");
            ret = ret + ((xsea) ? (hline + "**See also:** " + xsea) : "");
            // @ts-ignore
            ret.isTrusted = true;
            return new vscode.Hover(new vscode.MarkdownString(ret));
		}
	});

    //
    // TASKS SECTION
    //

    let disposable0 = vscode.tasks.registerTaskProvider("compile_XL", {
        provideTasks() {
            var execution = new vscode.ShellExecution("xblite ${fileBasename}");
            return [
                new vscode.Task({type: 'compile_XL', task: "Build"}
                    , vscode.TaskScope.Workspace
                    , "Compile XBLite Code"
                    , "XL"
                    , execution
                )
            ];
        },
        resolveTask(task) {
            return task;
        }
    });

	let disposable1 = vscode.tasks.registerTaskProvider("build_XL", {
        provideTasks() {
            var execution = new vscode.ShellExecution("./${fileBasenameNoExtension}.bat");
            return [
                new vscode.Task({type: 'build_XL', task: "Build"}
                    , vscode.TaskScope.Workspace
                    , "Build XBLite Code"
                    , "XL"
                    , execution
                )
            ];
        },
        resolveTask(task) {
            return task;
        }
    });

    //
    // AUTOCOMPLETION SECTION
    //
    let disposable2 = vscode.languages.registerCompletionItemProvider('xl', {
        provideCompletionItems(document, position, token) {
            let xlist = []; let xdoc = ""; let xprm; let xtxt = "";
            let data_list = [xbk.xlBuiltInKeywords0, xbk.xlBuiltInKeywords1, xbk.xlSupportKeywords0, xbk.xlSupportKeywords1];
            xbk.xlBuiltInKeywords0.forEach(function(element){
                if (xbk.xlHelpFiles.hasOwnProperty(element)) {
                    xdoc = xbk.xlHelpFiles[element].Definition;
                    xprm = xbk.xlHelpFiles[element].Parameters;
                    if ((xprm !== "") && (typeof xprm !== "undefined")) {
                        xtxt = "(";
                        xprm.forEach(function (params) {
                            xtxt = xtxt + params.name + ", ";
                        })
                        xtxt = element + xtxt.slice(0, -2) + ")";
                    } else {
                        xtxt = element;
                    };
                    xlist.push({label:element, 
                                kind: vscode.CompletionItemKind.Keyword,
                                documentation: xdoc,
                                insertText: xtxt
                    })
                } else {
                    xlist.push({label:element, 
                                kind: vscode.CompletionItemKind.Keyword
                    })
                }
            });
            xbk.xlBuiltInKeywords1.forEach(function(element){
                if (xbk.xlHelpFiles.hasOwnProperty(element)) {
                    xdoc = xbk.xlHelpFiles[element].Definition;
                    xprm = xbk.xlHelpFiles[element].Parameters;
                    if ((xprm !== "") && (typeof xprm !== "undefined")) {
                        xtxt = "(";
                        xprm.forEach(function (params) {
                            xtxt = xtxt + params.name + ", ";
                        })
                        xtxt = element + xtxt.slice(0, -2) + ")"
                    } else {
                        xtxt = element;
                    }
                    xlist.push({label:element, 
                                kind: vscode.CompletionItemKind.Function,
                                documentation: xdoc,
                                insertText: xtxt
                    })                     
                } else {
                    xlist.push({label:element, 
                                kind: vscode.CompletionItemKind.Function
                    })                    
                }
            });
            xbk.xlSupportKeywords0.forEach(function(element){
                if (xbk.xlHelpFiles.hasOwnProperty(element)) {
                    xdoc = xbk.xlHelpFiles[element].Definition;
                    xprm = xbk.xlHelpFiles[element].Parameters;
                    if ((xprm !== "") && (typeof xprm !== "undefined")) {
                        xtxt = "(";
                        xprm.forEach(function (params) {
                            xtxt = xtxt + params.name + ", ";
                        })
                        xtxt = element + xtxt.slice(0, -2) + ")"
                    } else {
                        xtxt = element;
                    }
                    xlist.push({label:element, 
                                kind: vscode.CompletionItemKind.Function,
                                documentation: xdoc,
                                insertText: xtxt
                    })                     
                } else {
                    xlist.push({label:element, 
                                kind: vscode.CompletionItemKind.Function
                    })                    
                }                
            });
            xbk.xlSupportKeywords1.forEach(function(element){
                if (xbk.xlHelpFiles.hasOwnProperty(element)) {
                    xdoc = xbk.xlHelpFiles[element].Definition;
                    xprm = xbk.xlHelpFiles[element].Parameters;
                    if ((xprm !== "") && (typeof xprm !== "undefined")) {
                        xtxt = "(";
                        xprm.forEach(function (params) {
                            xtxt = xtxt + params.name + ", ";
                        })
                        xtxt = element + xtxt.slice(0, -2) + ")"
                    } else {
                        xtxt = element;
                    }
                    xlist.push({label:element, 
                                kind: vscode.CompletionItemKind.Function,
                                documentation: xdoc,
                                insertText: xtxt
                    })                     
                } else {
                    xlist.push({label:element, 
                                kind: vscode.CompletionItemKind.Function
                    })                    
                }
            });
            // add the words used in the document till the cursor. Remove commented lines
            // TODO: parse for comments inside a line
            //
            let lines = document.getText(new vscode.Range(0, 0, position.line, position.character)).split('\n');
            lines = lines.filter(ln => !ln.startsWith('\''));
            let text = lines.join("\r\n");

            const words = text.match(/\$?\$?\w+\$?/g); // Use a regex to extract words from the document
            const uniqueWords = [...new Set(words)]; // Remove duplicates
            let xwords = xlist.map(x => x.label);
            let difference = uniqueWords.filter(x => !xwords.includes(x));
            xwords = difference.map((word) => ({
                label: word,
                kind: vscode.CompletionItemKind.Text,
                insertText: word
              }));
            xlist = [... xlist, ...xwords];
            return xlist;
        }
    });

    //
    // Command section
    //
    //
 

    //
    // SERVER-CLIENT
    // 
    // here goes the client-server code

    // Push the disposable to the context's subscriptions so that the
    // client can be deactivated on extension deactivation
    context.subscriptions.push(disposable, disposable0, disposable1, disposable2);
};

exports.deactivate = function () {
    if (!client) {
		return undefined;
	}
	// @ts-ignore
	return client.stop();
};
