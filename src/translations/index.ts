import I18n from 'react-native-i18n'
import { NativeModules, Platform } from 'react-native'

I18n.fallbacks = true
I18n.translations = {
    en: require('./en.json')
}

I18n.locale = Platform.OS === 'ios' ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier

export default I18n