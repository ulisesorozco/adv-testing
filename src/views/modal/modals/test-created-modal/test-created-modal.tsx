import * as React from 'react'
import { View } from 'react-native'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { ModalStore } from '../../../../models/modal-store'
import * as screenStyles from './test-created-modal.styles'

export interface TestCreatedModalProps {
  modalStore?: ModalStore
}

const testName = 'ACT v2'
const testDate = '10/12/2017'
const testTime = '10:10 AM'
const studentName = 'Ashely Bower'

@inject('modalStore')
@observer
export class TestCreatedModal extends React.Component<TestCreatedModalProps, {}> {
  render() {
    const { close } = this.props.modalStore

    return (
      <View style={screenStyles.ROOT}>
        <View>
          <View style={screenStyles.checked}>
            <Icon name="check" size={40} color="white" />
          </View>
        </View>
        <View style={screenStyles.infoContainer}>
          <Text preset="title" text="TEST CREATED!" style={screenStyles.centerText} />
          <Text
            preset="description"
            text={`${testName} has been scheduled on ${testDate} at ${testTime} by ${studentName}`}
            style={screenStyles.centerText}
          />
        </View>
        <View>
          <Button
            stretch
            text="EMAIL BUBBLE SHEET"
            onPress={close}
            style={screenStyles.marginVertical}
          />
          <Button stretch text="PRINT BUBBLE SHEET" onPress={close} />
        </View>
        <View>
          <Button
            style={screenStyles.doneButton}
            textStyle={screenStyles.doneButtonText}
            text="I'm done"
            onPress={close}
          />
        </View>
      </View>
    )
  }
}
