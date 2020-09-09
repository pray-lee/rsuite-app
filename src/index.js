import React from 'react';
import ReactDOM from 'react-dom';
import baseRoutes from "./route/base";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

// 国际化设置
import {IntlProvider} from 'rsuite'
import zhCN from 'rsuite/lib/IntlProvider/locales/zh_CN'

ReactDOM.render(
    <IntlProvider locale={zhCN}>
        <Router>
            <Switch>
                {
                    baseRoutes.map(item => {
                        return (
                            <Route
                                key={item.pathname}
                                exact={item.exact ? item.exact : false}
                                path={item.pathname}
                                component={item.component}
                            />
                        )
                    })
                }
                <Redirect to="/404"/>
            </Switch>
        </Router>
    </IntlProvider>,
    document.getElementById('root')
)
;
