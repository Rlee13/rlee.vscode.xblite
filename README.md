# XBLite Extension for Visual Studio Code

This is the VSCode extension for "XBLite" programming language.

This version of the code is in a very early stage of development, users who intend to try it are strongly encouraged to do a backup of the possible affected parts of their system. Read the extension code to identify the possible affected zones.

Hover messages were made using the help files provided by XBasic and XBLite packages. 

## Requirements and Installation

At this stage, there is no installer, and there is no package available through Marketplace. 

Repository: "https://github.com/Rlee13/rlee.vscode.xblite"

#### Installation:

In Windows, just copy the folder "rlee.vscode.xblite" in "C:\Users\\\<username>\\.vscode\extensions" folder. 

In Linux, copy the folder "rlee.vscode.xblite" in "Home\\.vscode\extensions". 

If the extension doesn't show up in the Extensions' menu, delete the `extensions.json` file from the `.vscode\extensions` folder - it will be re-generated automatically when VSCode restarts.

## Extension Settings

VS Code settings through the `contributes.configuration` extension point:

* `xblite_server.maxNumberOfProblems`: Used with XBLite LSP server - unavailable at this stage.
* `xblite_server.trace.server`: Used with XBLite LSP server - unavailable at this stage.

## Known Issues

No known issues, but this extension is in `alpha` stage of deveopment.

## Release Notes

### 0.0.2

Initial public release of XBLite VSCode extension for testing purposes only.

## References

* XBasic - https://en.wikipedia.org/wiki/XBasic

* XBLite - https://en.wikipedia.org/wiki/XBLite

**Enjoy!**
