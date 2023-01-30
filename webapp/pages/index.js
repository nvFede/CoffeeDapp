import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  Box,
  VStack,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  ButtonGroup,
  Heading,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import contractAbi from "../../hardhat/artifacts/contracts/Coffee.sol/Coffee.json";
import Navbar from "../components/Navbar";
import FormTip from "../components/FormTip";
import Memo from "../components/Memo";

const Home = () => {
  // Contract Address & ABI
  const contractAddress = "0x418CE20A77dC3AC3dFec018B9185783A548186E7";
  const contractABI = contractAbi.abi;
  const ContractDeployerAddress = "0x1f33f06ae95a7c566F7C0B7c544909b9fC9cbC58";

  // Component state
  const [currentAccount, setCurrentAccount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [memos, setMemos] = useState([]);
  const [balance, setBalance] = useState("");
  const [owner, setOwner] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setCurrentAccount(accounts[0]);

        setOwner(ContractDeployerAddress);

        const bal = await provider.getBalance(contractAddress);
        setBalance(ethers.utils.formatEther(bal));

        const a = contractAbi.contractName;
        console.log("🚀 ~ file: index.js ~ line 25 ~ Home ~ a", a);
        console.log(
          "🚀 ~ file: index.js ~ line 25 ~ Home ~ contractAbi",
          contractAbi
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  const buyCoffee = async (eth) => {
    console.log("coffee bought OK!");

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
      const buyMeACoffee = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      console.log(
        "🚀 ~ file: index.js ~ line 81 ~ buyCoffee ~ buyMeACoffee",
        buyMeACoffee
      );
      console.log("buying coffee..");
      const coffeeTxn = await buyMeACoffee.buyCoffee(
        name ? name : "anon",
        message ? message : "Enjoy your coffee!",
        { value: ethers.utils.parseEther(eth) }
      );
      await coffeeTxn.wait();

      console.log("mined ", coffeeTxn.hash);

      console.log("coffee purchased!");

      // Clear the form fields.
      setName("");
      setMessage("");

      const bal = await provider.getBalance(contractAddress);
      setBalance(bal.toString());
    } else {
    }
  };
  // Function to fetch all memos stored on-chain.
  const getMemos = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("fetching memos from the blockchain..");
        const memos = await buyMeACoffee.getMemos();
        console.log("fetched!");
        setMemos(memos);
      } else {
        console.log("Metamask is not connected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const withdrawBalance = async () => {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const buyMeACoffee = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const currentSigner = await signer.getAddress();

      if (owner == currentSigner) {
        console.log("current owner");
        const withdrawTx = await buyMeACoffee.withdraw();
        await withdrawTx.wait();
        console.log("Funds Withdrawed");
        const bal = await provider.getBalance(contractAddress);
        console.log(bal.toString());
        setBalance(bal.toString());
      } else {
        alert("only the owner can withdraw the balance");
      }
    }

    console.log();
  };

  useEffect(() => {
    let buyMeACoffee;
    isWalletConnected();
    getMemos();

    // Create an event handler function for when someone sends
    // us a new memo.
    const onNewMemo = (from, timestamp, name, message) => {
      console.log("Memo received: ", from, timestamp, name, message);
      setMemos((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message,
          name,
        },
      ]);
    };

    const { ethereum } = window;

    // Listen for new memo events.
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
      buyMeACoffee = new ethers.Contract(contractAddress, contractABI, signer);

      buyMeACoffee.on("NewMemo", onNewMemo);
    }

    return () => {
      if (buyMeACoffee) {
        buyMeACoffee.off("NewMemo", onNewMemo);
      }
    };
  }, []);

  return (
    <Flex direction="column" justify="center" align="center" h="calc(100vh)">
      <Navbar
        currentAccount={currentAccount}
        owner={owner}
        connectWallet={connectWallet}
        withdrawBalance={withdrawBalance}
      />

      <Spacer />

      <Flex
        width="100%"
        alignItems="center"
        justify="center"
        bgColor="gray.100"
        height="100%"
      >
        {currentAccount ? (
          <Flex>
            <Box
              maxW="lg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={3}
              bgColor="white"
            >
              <FormTip
                onNameChange={onNameChange}
                onMessageChange={onMessageChange}
                buyCoffee={buyCoffee}
              />
            </Box>

            <Memo memos={memos} currentAccount={currentAccount} />
          </Flex>
        ) : (
          <Box maxW="lg" bgColor="white" borderRadius="lg" p={5}>
            <Heading mb={5}>Buy me a Coffee Dapp!</Heading>

            <Text
              mb={2}
              borderBottom={1}
              borderBottomColor={"gray.300"}
              fontSize="md"
              textUnderlineOffset={1}
              casing="uppercase"
            >
              Prices
            </Text>

            <Divider />
            <Text mt={2} fontSize="sm">
              1 Coffee 0.001 ETH
            </Text>
            <Text fontSize="sm">1 Large coffee 0.002 ETH</Text>
            <Text fontSize="sm">1 Coffee And 1 Muffin 0.005 ETH</Text>
          </Box>
        )}
      </Flex>

      <Spacer />

      <Flex
        direction="row"
        width="100%"
        p={4}
        bgcolor="#F1239A"
        height="80px"
        bgColor="white"
        align="center"
      >
        <Text>
          {" "}
          Built with ❤ by <a href="https://github.com/nvFede/">Federico</a>
        </Text>

        <Spacer />
        <VStack>
          {currentAccount ? (
            <Box align="right">
              <Text as="span" fontSize="sm">
                {" "}
                Contract Balance:{" "}
              </Text>
              <Text as="span" fontSize="sm" color="cyan.600">
                {balance} ETH
              </Text>
              <Text fontSize="sm"> Contract Address: {contractAddress}</Text>
            </Box>
          ) : (
            <Text>Welcome</Text>
          )}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Home;
