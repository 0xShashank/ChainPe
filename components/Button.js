import React from 'react'
import { Button, Pressable, Text } from 'react-native';

const ButtonCustom = (props) => {
  return (
    <>
        {/* <Button
            title="Continue"
            color='#6100ff'
            style={{
                width: 100,
            }}
        /> */}
        <Pressable
            style={{
                backgroundColor: '#6100ff',
                width: 364,
                height: 60,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '500',
            }}>
                {props.title}
            </Text>
        </Pressable>
    </>
  )
}

export default ButtonCustom