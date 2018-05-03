import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { last, startsWith, toLower, toUpper } from 'ramda'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { CheckBox } from './select-section-modal.check'
import { ModalStore } from '../../../../models/modal-store'
import { ExamStore } from '../../../../models/exam-store'
import { NavigationStore } from '../../../../views/navigation'
import * as screenStyles from './select-section-modal.styles'

export interface SelectSectionModalProps {
  modalStore?: ModalStore
  navigationStore?: NavigationStore
  examStore?: ExamStore
}

export interface SelectSectionModalState {
  math: boolean
  reading: boolean
  writing: boolean
  essay: boolean
}

@inject('modalStore')
@inject('navigationStore')
@inject('examStore')
@observer
export class SelectSectionModal extends React.Component<
  SelectSectionModalProps,
  SelectSectionModalState
> {
  constructor(props) {
    super(props)
    this.state = {
      math: false,
      reading: false,
      writing: false,
      essay: false,
    }
  }

  onDone = async () => {
    const { showModal, close } = this.props.modalStore
    const { setCurrentSection } = this.props.examStore
    const { math, reading, writing, essay } = this.state
    let section = ''
    if (math) section = section.concat('1')
    if (reading) {
      section.length > 0 ? (section = section.concat(',2')) : (section = section.concat('2'))
    }
    if (writing) {
      section.length > 0 ? (section = section.concat(',3')) : (section = section.concat('3'))
    }
    if (essay) {
      section.length > 0 ? (section = section.concat(',4')) : (section = section.concat('4'))
    }
    setCurrentSection(section)
    await close()
    showModal('new-test')
  }

  render() {
    const { math, reading, writing, essay } = this.state

    return (
      <View style={screenStyles.ROOT}>
        <Text preset="title" text="SELECT SECTIONS" />
        <ScrollView
          style={screenStyles.container}
          contentContainerStyle={screenStyles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Button
              preset="secondary"
              text="MATH"
              stretch
              renderRight={<CheckBox checked={math} />}
              style={screenStyles.testButton}
              onPress={() => this.setState({ math: !math })}
            />
            <Button
              preset="secondary"
              text="READING"
              stretch
              renderRight={<CheckBox checked={reading} />}
              style={screenStyles.testButton}
              onPress={() => this.setState({ reading: !reading })}
            />
            <Button
              preset="secondary"
              text="WRITING"
              stretch
              renderRight={<CheckBox checked={writing} />}
              style={screenStyles.testButton}
              onPress={() => this.setState({ writing: !writing })}
            />
            <Button
              preset="secondary"
              text="ESSAY"
              stretch
              renderRight={<CheckBox checked={essay} />}
              style={screenStyles.testButton}
              onPress={() => this.setState({ essay: !essay })}
            />
            <Button text="DONE" style={screenStyles.doneButton} onPress={this.onDone} stretch />
          </View>
        </ScrollView>
      </View>
    )
  }
}
