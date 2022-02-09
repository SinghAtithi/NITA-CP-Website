import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

function Editorr() {
	const snippet = `#include <bits/stdc++.h>
using namespace std;

void solve(){
      // Lets write some broken code
}

int main() {
      int TC=1;
      // cin>>TC;
      while(TC--){
            solve();
      }
      return 0;
}
      `;

      const [value, setValue] = useState(snippet);


	return (
		<div className="home ">
			<Navbar />
			<Editor
				className=""
				height="90vh"
                        defaultLanguage="cpp"
                        value={value}
                        onChange={(value) => console.log(value) }
				theme="vs-dark"
				options={{
					acceptSuggestionOnCommitCharacter: true,
					acceptSuggestionOnEnter: "on",
                              contentWidth: 200,
                              fontSize:20,
					accessibilitySupport: "auto",
					autoIndent: false,
					automaticLayout: true,
					codeLens: true,
					colorDecorators: true,
					contextmenu: true,
					cursorBlinking: "blink",
					cursorSmoothCaretAnimation: false,
					cursorStyle: "line",
					disableLayerHinting: false,
					disableMonospaceOptimizations: false,
					dragAndDrop: true,
					fixedOverflowWidgets: false,
					folding: true,
					foldingStrategy: "auto",
					fontLigatures: false,
					formatOnPaste: true,
					formatOnType: true,
					hideCursorInOverviewRuler: false,
					highlightActiveIndentGuide: true,
					links: true,
					mouseWheelZoom: false,
					multiCursorMergeOverlapping: true,
					multiCursorModifier: "alt",
					overviewRulerBorder: true,
					overviewRulerLanes: 2,
					quickSuggestions: true,
					quickSuggestionsDelay: 100,
					readOnly: false,
					renderControlCharacters: false,
					renderFinalNewline: true,
					renderIndentGuides: true,
					renderLineHighlight: "all",
					renderWhitespace: "none",
					revealHorizontalRightPadding: 30,
					roundedSelection: true,
					rulers: [],
					scrollBeyondLastColumn: 5,
					scrollBeyondLastLine: true,
					selectOnLineNumbers: true,
					selectionClipboard: true,
					selectionHighlight: true,
					showFoldingControls: "mouseover",
					smoothScrolling: false,
					suggestOnTriggerCharacters: true,
					wordBasedSuggestions: true,
					wordSeparators: "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
					wordWrap: "on",
					wordWrapBreakAfterCharacters: "\t})]?|&,;",
					wordWrapBreakBeforeCharacters: "{([+",
					wordWrapBreakObtrusiveCharacters: ".",
					wordWrapColumn: 80,
					wordWrapMinified: true,
					wrappingIndent: "none",
				}}
			/>
		</div>
	);
}

export default Editorr;
