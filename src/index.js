import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 国际化设置
import {IntlProvider} from 'rsuite'
import zhCN from 'rsuite/lib/IntlProvider/locales/zh_CN'

ReactDOM.render(
    <IntlProvider locale={zhCN}>
        <App/>
    </IntlProvider>,
document.getElementById('root')
)
;
