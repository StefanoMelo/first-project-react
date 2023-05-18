import React from 'react';
import ReactDom from "react-dom"
import App from './App'; 
import GlobalStyle from './globalStyled'


ReactDom.render(<>
<App/> <GlobalStyle/> 
</>, 
document.getElementById("root"));
