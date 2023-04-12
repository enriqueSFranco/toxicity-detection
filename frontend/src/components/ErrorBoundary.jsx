import { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  }

  componentDidCatch (error, errorInfo) {
    console.log()
  }
}
