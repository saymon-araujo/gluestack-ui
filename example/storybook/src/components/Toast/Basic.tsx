import React from 'react';
import { Button } from '../Button/Button';
import { View } from 'react-native';
import Wrapper from '../Wrapper';

import { Root, Title, Description } from '../styled-components/toast';
import { createToast, createToastHook } from '@gluestack-ui/toast';

export const useToast = createToastHook();

export const ToastComponent = createToast({
  Root,
  Title,
  Description,
}) as any;

export function Basic(props: any) {
  return (
    <>
      <Wrapper>
        <ToastWithHook {...props} />
      </Wrapper>
    </>
  );
}

const ToastWithHook = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        {...props}
        onPress={() => {
          toast.show({
            placement: placement,
            render: ({ id }) => {
              return (
                <ToastComponent nativeId={id}>
                  <ToastComponent.Title>
                    Hello World Toast {id}
                  </ToastComponent.Title>
                </ToastComponent>
              );
            },
          });
        }}
      >
        <Button.Text>Press Me</Button.Text>
      </Button>
    </View>
  );
};
