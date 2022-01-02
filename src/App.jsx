import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
import NFTCreate from "components/NFTCreate";
import Home from "components/Home";
import background from "../src/components/images/blueback.png";
import logo from 'components/images/Logo.png'
const { Header, Footer } = Layout;
//document.body.style.backgroundColor = "#57dcf9";

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "50px",
    padding: "100px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#116779",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    background: "#116779",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();



  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout  style={{ height: "10vh", overflow: "auto" }} style={{ backgroundImage: `url(${background})` }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <SearchCollections setInputValue={setInputValue}/>
          <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "15px",
              fontWeight: "500",
              marginLeft: "100px",
              marginRight:"10px",
              width: "100%",
              background: "#116779",
            }}
            defaultSelectedKeys={["home"]}

          > 

            <Menu.Item key="home">
              <NavLink to="/Home">🏠 Home</NavLink>
            </Menu.Item>
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/NFTMarketPlace" >🛒 Collections</NavLink>
            </Menu.Item>
            <Menu.Item key="create">
              <NavLink to="/create">👍 Create</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">✨ Your Collection</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/Transactions">📑 Your Transactions</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue}/>
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
            <Route path="/create">
              <NFTCreate />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
          <Redirect to="/Home" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center",background: "#57dcf9", }}>
        <Text style={{ display: "block" }}>
        🌈 Built For the Avalache Moralis Hackathon{" "}
          <a
            href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            by The Outsiders
          </a>
          , Happy Selling!
        </Text>

      </Footer>
    </Layout>
  );
};

export const Logo = () => ( 

  <div style={{ display: "flex" }}>
    <img  src={logo}/>
  </div>
  
);

export default App;
