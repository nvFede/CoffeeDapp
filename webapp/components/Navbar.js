import React from 'react';
import { Heading, Spacer, Flex, Text, Button } from '@chakra-ui/react';

const Navbar = ({ currentAccount, owner, connectWallet, withdrawBalance}) => {
    return (
      <Flex
        direction="row"
        align="center"
        p={4}
        width="100%"
        height="80px"
        bgColor="white"
      >
        <Heading color="cyan.500">Crypto Coffee</Heading>
        <Spacer />
        {currentAccount ? (
              <Text color="cyan.500">
              Connected: {currentAccount.substring(0, 6)}...{" "}
              {currentAccount.substring(38)}
            </Text>
        )  : (
          <Button colorScheme="cyan" onClick={connectWallet}>
            CONNECT WALLET
          </Button>
        )}
        { currentAccount && owner ? 
          (<Button onClick={withdrawBalance}>Withdraw</Button>):( <span></span>)}
      </Flex>
        
    );
};

export default Navbar;