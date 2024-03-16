import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  render () {
    const { hasError } = this.state
    if (hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default ErrorBoundary
