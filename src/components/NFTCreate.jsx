import React from "react";
import { Card, Image, Tooltip, Modal, TextArea, Input, Button } from "antd";
import { useMoralis } from "react-moralis";
import Preview from "./preview";



const styles = {
  card: {
    width: "50%",
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
  },
};


function CreateNFT() {
  const { Moralis, web3 } = useMoralis();
  let nftContractAddress = "0x55c30B939AEDe26401e4169973469bc06cc7F42a"; // avax testnet address
  const minting = async () => {
    // Storing the file

    const fileInput = document.getElementById("file");
    const data = fileInput.files[0];
    const imageFile = new Moralis.File(data.name, data);
    await imageFile.saveIPFS();

    // Storing the metadata

    const imageURI = imageFile.ipfs();
    const metadata = {
      name: document.getElementById("metadataName").value,
      description: document.getElementById("metadataDescription").value,
      image: imageURI,
    };
    const metadataFile = new Moralis.File("metadata.json", {
      base64: btoa(JSON.stringify(metadata)),
    });
    await metadataFile.saveIPFS().then((result) => {
        let secondsToGo = 5;
        const modal = Modal.success({
          title: "Success!",
          content: `Metadata saved successfully!`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
      
    });
    const metadataURI = metadataFile.ipfs();
    console.log("MetadataURI ",metadataURI);

    // minting
    await mintToken(metadataURI).then((result) => {
      let secondsToGo = 5;
      const modal = Modal.success({
        title: "Success!",
        content: `Token minting sent successfully!`,
      });
      setTimeout(() => {
        modal.destroy();
      }, secondsToGo * 1000);
    });
  };

  async function mintToken(_uri) {
    const encodedFunction = web3.eth.abi.encodeFunctionCall(
      {
        name: "createToken",
        type: "function",
        inputs: [
          {
            type: "string",
            name: "tokenURI",
          },
        ],
      },
      [_uri]
    );

    const transactionParameters = {
      to: nftContractAddress,
      // eslint-disable-next-line no-undef
      from: ethereum.selectedAddress,
      data: encodedFunction,
    };
    // eslint-disable-next-line no-undef
    const txt = await ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return txt;
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Card
        style={styles.card}
        bodyStyle={{ padding: "18px" }}
        title={<div>CREATE A NFT</div>}
        size="large"
      >
        Details:
        <br />
        <br></br>
        <Input
          type="text"
          name="metadataName"
          id="metadataName"
          placeholder="Name of the NFT"
        />
        <br />
        <br />
        <br></br>
        <br></br>
        <textarea
          style={{
            width: "100%",
            height: "100%",
            resize: "none",
            border: "none",
            outline: "none",
          }}
          placeholder="Description of the NFT"
          name="metadataDescription"
          id="metadataDescription"
        />
        <br />
        <br />
        <Preview />
        <br />
        <br />
        <br />
        <Button type="primary" onClick={minting}>Mint</Button>
      </Card>
      
    </div>
  );
}


export default CreateNFT;
