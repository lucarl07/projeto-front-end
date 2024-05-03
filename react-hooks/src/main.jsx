import React from 'react';
import ReactDOM from 'react-dom/client';
import Input from './form/Input';
import TextArea from './form/TextArea';
import Select from './form/Select';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Input/>
    <TextArea/>
    <Select/>
  </React.StrictMode>,
)
