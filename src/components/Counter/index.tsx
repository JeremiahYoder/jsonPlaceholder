import React from 'react'
import { View, Button, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getCount, decrement, increment } from '../../slices/counterSlice'

function Counter() {
  const count = useSelector(getCount)
  const dispatch = useDispatch()

  return (
    <View>
      <View>
        <Button
          title='Increment'
          onPress={() => dispatch(increment())}
        />

        <View>
          <Text>
            {count}
          </Text>

        </View>
        <Button
          title='Decrement'
          onPress={() => dispatch(decrement())}
        />
      </View>
    </View>
  )
}

export default Counter;