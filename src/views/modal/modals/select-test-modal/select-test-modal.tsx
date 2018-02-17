import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { startsWith, toLower, toUpper, toString } from 'ramda'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { CheckBox } from './select-test-modal.check'
import { ModalStore } from '../../../../models/modal-store'
import { ExamStore } from '../../../../models/exam-store'
import { NavigationStore } from '../../../../views/navigation'
import { last } from 'ramda'
import * as screenStyles from './select-test-modal.styles'

export interface SelectTestModalProps {
  modalStore: ModalStore
  navigationStore: NavigationStore
  examStore: ExamStore
}

export interface SelectTestModalState {
  selectedTest: string
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

  onSelect = test => {
    const { showModal, close } = this.props.modalStore
    const { routes } = this.props.navigationStore.state

    this.setState({ selectedTest: test })

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
    const { filters, exams } = this.props.examStore
    const { selectedTest } = this.state

    return (
      <View style={screenStyles.ROOT}>
        <Text preset="title" text="SELECT TEST" />
        <ScrollView
          style={screenStyles.container}
          contentContainerStyle={screenStyles.content}
          keyboardShouldPersistTaps="handled"
        >
          {filters.map((filter, index) => (
            <View key={`block${index}`}>
              <View key={`ft-${index}`} style={screenStyles.boderLine}>
                <Text text={toUpper(filter)} />
              </View>
              {exams.map((exam, idx) => {
                if (startsWith(filter, toLower(exam.title))) {
                  return (
                    <Button
                      key={`${index}-${idx}`}
                      preset="secondary"
                      text={exam.title}
                      stretch
                      renderRight={<CheckBox checked={selectedTest === exam.id} />}
                      style={screenStyles.testButton}
                      onPress={() => this.onSelect(exam.id)}
                    />
                  )
                }
                return null
              })}
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}
