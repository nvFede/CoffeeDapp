import React from 'react';

import { FormControl, Input, Text, Button, ButtonGroup } from '@chakra-ui/react';

const FormTip = ({onNameChange, onMessageChange, buyCoffee}) => {
    return (
        <FormControl as="fieldset">
              <Input
                placeholder="Enter your name"
                type="text"
                id="name"
                onChange={onNameChange}
              />

              <Input
                type="text"
                mt={4}
                placeholder="Write me a message"
                id="message"
                onChange={onMessageChange}
              />

              <ButtonGroup gap={4}>
                <Button
                  mt={4}
                  colorScheme="cyan"
                  onClick={() => buyCoffee("0.001")}
                >
                  Buy Coffee
                </Button>
                <Button
                  mt={4}
                  colorScheme="cyan"
                  onClick={() => buyCoffee("0.002")}
                >
                  Buy Lg Coffee
                </Button>
                <Button
                  mt={4}
                  colorScheme="cyan"
                  onClick={() => buyCoffee("0.005")}
                >
                  Buy Coffee + Muffin
                </Button>
              </ButtonGroup>
            </FormControl>
    );
};

export default FormTip;