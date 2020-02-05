import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header'
import Home from './component/Home'
import Links from './component/Link'
import Footer from './component/footer'

export default class App extends Component {
    [{
        "product": "https://robohash.org/quototamoptio.bmp?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/fugaquisquamratione.jpg?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/arepudiandaedolorum.jpg?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/dignissimosipsadolor.jpg?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/deseruntverolaboriosam.bmp?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/inciduntoptiovoluptatem.png?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/distinctioeosnecessitatibus.jpg?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/quidelectusiste.jpg?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/consequaturmolestiaslibero.bmp?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/verobeataedistinctio.png?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/sequifaceresaepe.bmp?size=286x180&set=set1"
      }, {
        "product": "https://robohash.org/repellatistequi.bmp?size=286x180&set=set1"
      }]
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/link">
                        <Links />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        )
    }
}
