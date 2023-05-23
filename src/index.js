import React from 'react';
import ReactDom from "react-dom"


import GlobalStyle from './styles/globalStyled'
import Routes from './routes'


ReactDom.render(<>
<Routes/>
 <GlobalStyle/> 
</>, 
document.getElementById("root"));
