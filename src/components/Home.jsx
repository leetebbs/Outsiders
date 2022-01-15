import React from 'react'
import { Card, Divider, Row, Col } from "antd";
import home from '../components/images/banner.png';
import { NavLink } from 'react-router-dom';



function Home() {
    return (
<>
        
        <div>
    
            <Row gutter={16}>
                <Col span={24}>
                <img src={home}/>
                </Col>
            </Row>,
            <Row gutter={16} justify='center'>
                <Col span={2} justify='center'>
                <NavLink id="browse-nav"  to="/NFTMarketPlace" >Browse</NavLink>
                </Col>
            
                <Col span={2} justify='center'>
                <NavLink to="/create" >Create</NavLink>
                </Col>
            </Row>
    
            
    <Divider orientation="center" fontSize = "25px">Buy, Sell and Create NFTs.</Divider>
    <Row justify="center">
      <Col span={4} justify='center'>
      <Card align='center' title="💰 Buy" style={{ width: 240, border: "2px solid #e7eaf3" }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
    </Card>
      </Col>
      <Col span={4} justify='center'>      
      <Card align='center' title="🤑 Sell" style={{ width: 240, border: "2px solid #e7eaf3" }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
    </Card></Col>
      <Col span={4} justify='center'>      
      <Card align='center' title="🔨 Create" style={{ width: 240, border: "2px solid #e7eaf3" }}>
      <p>NFTs can represent essentially any type of digital file, with artists creating NFTs featuring pictures, videos, gifs, audio files, and mixtures of them all. There are also utility NFT tokens, which provide a good or service and contain inherent value coded within them, what's your vision?.</p>
    </Card></Col>
    </Row>,

    <Row gutter={16}>
                <Col span={24}>
                    <div></div>
                </Col>
            </Row>,
        </div>

</>
        

    )
}
export default Home
