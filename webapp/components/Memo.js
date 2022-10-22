import React from 'react';
import { Box, Text } from '@chakra-ui/react'

const Memo = ({currentAccount, memos}) => {
    return (
        <Box>
        {currentAccount &&
          memos.map((memo, idx) => {
            return (
              <Box
                key={idx}
                bgColor="white"
                borderRadius="lg"
                p={2}
                m={2}
              >
                <Text>"{memo.message}"</Text>
                <Text>
                  From: {memo.name} at {memo.timestamp.toString()}
                </Text>
              </Box>
            );
          })}
      </Box>
    );
};

export default Memo;