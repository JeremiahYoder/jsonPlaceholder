import React from 'react'
import { View, Button, Text } from 'react-native'
import { getCount } from '../../selectors/counter'
import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

import { incrementCounter, decrementCounter } from '../../thunks/counter'

function Counter() {
  const count = useAppSelector(getCount)
  const dispatch = useAppDispatch()

  return (
    <View>
      <View>
        <Button
          title='Increment'
          onPress={() => dispatch(incrementCounter())}
        />

        <View>
          <Text>
            {count}
          </Text>
        </View>

        <Button
          title='Decrement'
          onPress={() => dispatch(decrementCounter())}
        />
      </View>
    </View>
  )
}

export default Counter;