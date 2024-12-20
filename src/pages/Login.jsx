import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 2rem;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 576px) {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    padding: 1rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
