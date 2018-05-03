import * as React from 'react'
import { Alert, Button, Platform, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import RNPrint from 'react-native-print'
import RNHTMLtoPDF from 'react-native-html-to-pdf'
import { ExamStore } from '../../../models/exam-store'
import * as screenStyles from './print-screen.styles'

export interface PrintScreenProps extends NavigationScreenProps<{}> {
  examStore: ExamStore
}

export interface PrintScreenState {
  selectedPrinter: any
}

@inject('examStore')
@observer
export class PrintScreen extends React.Component<PrintScreenProps, PrintScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      selectedPrinter: null,
    }
  }

  selectPrinter = async () => {
    const selectedPrinter = await RNPrint.selectedPrinter()
    this.setState({ selectedPrinter })
  }

  silentPrint = async () => {
    if (!this.state.selectedPrinter) {
      Alert.alert('Must select Printer First')
    }

    const jobName = await RNPrint.print({
      printerURL: this.state.selectedPrinter.url,
      html: '<h1>Silent Print<h1>',
    })
  }

  async printHTML() {
    await RNPrint.print({
      html: '<h1>Heading 1</h1><h2>Heading 2</h2>',
    })
  }

  async printPDF() {
    const results = await RNHTMLtoPDF.convert({
      html: '<h1>Custom converted PDF Document</h1>',
      fileName: 'test',
      base64: true,
    })
    await RNPrint.print({ filePath: results.filePath })
  }

  async printRemotePDF() {
    const { currentExam } = this.props.examStore
    await RNPrint.print({
      filePath: `http://advtesting.trippple.co/exams/${currentExam.id}/results`,
    })
  }

  customOptions = () => {
    return (
      <View>
        {this.state.selectedPrinter && (
          <View>
            <Text>{`Selected Printer Name: ${this.state.selectedPrinter.name}`}</Text>
            <Text>{`Selected Printer URI: ${this.state.selectedPrinter.url}`}</Text>
          </View>
        )}
        <Button onPress={this.selectPrinter} title="Select Printer" />
        <Button onPress={this.silentPrint} title="Silent Print" />
      </View>
    )
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        {Platform.OS === 'ios' && this.customOptions()}
        <Button onPress={this.printHTML} title="Print HTML" />
        <Button onPress={this.printPDF} title="Print PDF" />
        <Button onPress={this.printRemotePDF} title="Print Remote PDF" />
        <Button onPress={() => this.props.navigation.goBack()} title="GO BACK" />
      </View>
    )
  }
}
