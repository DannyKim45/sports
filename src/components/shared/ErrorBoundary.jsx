import React from "react";
import { motion } from "framer-motion";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <motion.div
            className="error-boundary-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="error-icon">⚠️</div>
            <h1>문제가 발생했습니다</h1>
            <p className="error-message">
              예상치 못한 오류가 발생했습니다. 걱정하지 마세요. 이 오류는 기록되었으며 해결하도록 하겠습니다.
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="error-details">
                <summary>오류 상세 정보 (개발 모드)</summary>
                <pre className="error-stack">
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}

            <div className="error-actions">
              <button onClick={this.handleReset} className="error-button primary">
                홈으로 이동
              </button>
              <button
                onClick={() => window.location.reload()}
                className="error-button secondary"
              >
                페이지 새로고침
              </button>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
