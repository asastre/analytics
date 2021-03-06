import AnalyticsProvider from './AnalyticsProvider'
import AnalyticsContext from './AnalyticsContext'
import withAnalytics from './withAnalytics'
import { useAnalytics, useTrack, usePage, useIdentify } from './hooks'

const AnalyticsConsumer = AnalyticsContext.Consumer

export {
  AnalyticsProvider,
  AnalyticsConsumer,
  AnalyticsContext,
  // Higher Order Component
  withAnalytics,
  // React Hooks
  useAnalytics,
  useTrack,
  usePage,
  useIdentify
}
