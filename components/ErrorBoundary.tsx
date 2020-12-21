import * as React from "react";
import { ErrorInfo } from "react";
import styled from "styled-components";
import { navFrontend } from "../styles/navFarger";

interface Props {
  boundaryName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

const Style = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${navFrontend.navBlaDarken80};
  color: white;
`;

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <Style>Beklager, det skjedde en teknisk feil 🤷‍♀️</Style>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
