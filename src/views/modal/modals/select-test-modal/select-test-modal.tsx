import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { last, startsWith, toLower, toUpper } from 'ramda'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { CheckBox } from './select-test-modal.check'
import { ModalStore } from '../../../../models/modal-store'
import { ExamStore } from '../../../../models/exam-store'
import { NavigationStore } from '../../../../views/navigation'
import * as screenStyles from './select-test-modal.styles'

export interface SelectTestModalProps {
  modalStore?: ModalStore
  navigationStore?: NavigationStore
  examStore?: ExamStore
}

export interface SelectTestModalState {
  selectedTest: number
}

@inject('modalStore')
@inject('navigationStore')
@inject('examStore')
@observer
export class SelectTestModal extends React.Component<SelectTestModalProps, SelectTestModalState> {
  constructor(props) {
    super(props)
    this.state = { selectedTest: null }
  }

  onSelect = type => {
    const { showModal, close } = this.props.modalStore
    const { setCurrentType } = this.props.examStore
    const { routes } = this.props.navigationStore.state

    this.setState({ selectedTest: type.id })
    setCurrentType(type)

    setTimeout(async () => {
      if (last(last(routes).routes).routeName === 'studentDetails') {
        await close()
        showModal('new-test')
      } else {
        close()
      }
    }, 800)
  }

  render() {
    const { types } = this.props.examStore
    const { selectedTest } = this.state

    return (
      <View style={screenStyles.ROOT}>
        <Text preset="title" text="SELECT TEST" />
        <ScrollView
          style={screenStyles.container}
          contentContainerStyle={screenStyles.content}
          keyboardShouldPersistTaps="handled"
        >
          {types.map((type, index) => (
            <Button
              key={`${index}`}
              preset="secondary"
              text={`${type.exam_type} ${type.exam_version}`}
              stretch
              renderRight={<CheckBox checked={selectedTest === type.id} />}
              style={screenStyles.testButton}
              onPress={() => this.onSelect(type)}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}
