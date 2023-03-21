import React from 'react'
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useState, useEffect } from 'react';

function Input(props) {


  return (
        <div className="input">
              <textarea
                    className='input-text'
                    placeholder={props.input}
                    onChange={(e) => props.setInput(e.target.value)}
              ></textarea>
        </div>
        
  )
}

export default Input