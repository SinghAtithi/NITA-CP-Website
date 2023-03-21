import React from "react";
import { useState } from "react";
import Editorr from "../components/Editor/code";
import Input from "../components/Editor/Input";
import Output from "../components/Editor/Output";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import axios from "axios";

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

function Editor() {
  const [code, setCode] = useState(snippet);
  const [formattedCode, setFormattedCode] = useState(snippet);
  const [input, setInput] = useState("Paste Your inputs here");
  const [output, setOutput] = useState("Here comes your result");
  const [effect, setEffect] = useState(false);
  const [cpu, setCpu] = useState("");
  const [memory, setMemory] = useState("");

  useEffect(() => {
    var dp = localStorage.getItem("code");
    if (dp) {
      setCode(localStorage.getItem("code"));
    }
    // setFormattedCode(code.replaceAll("\n", " "));
  }, []);

  useEffect(() => {
    localStorage.setItem("code", code);
  }, [code]);

  const runCode = () => {
    var program = {
      script: code,
      language: "cpp17",
      versionIndex: "0",
      stdin: input,
      clientId: "857e060c5620048e16181c905d8a0688",
      clientSecret:
        "9a13c9c01218dc5e882f62afc4ccb5b8d2b23a85d2f9b731e93c85356fbcbeae",
    };
    axios
      .post(
        "https://immense-woodland-00664.herokuapp.com/" +
          "https://api.jdoodle.com/v1/execute",
        program
      )
      .then((res) => {
        console.log(res);
        setOutput(res.data.output);
        setCpu(res.data.cpuTime);
        setMemory(res.data.memory);
        console.log(res.data);
      });
  };

  return (
    <div className="home">
      <Navbar />
      <div className="w-full flex">
        <div className="aalu relative">
          <Editorr code={code} setCode={setCode} />
          <button
            className="p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300 fixed right-10 bottom-6"
            onClick={runCode}
          >
            RUN
          </button>
        </div>
        <div className="flex-grow flex flex-col w-full justify-start">
          <Input input={input} setInput={setInput} />
          <Output
            output={output}
            setOutput={setOutput}
            cpu={cpu}
            memory={memory}
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;
