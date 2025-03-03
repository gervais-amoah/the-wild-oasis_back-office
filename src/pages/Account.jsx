import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        {/* <Heading as="h3">Update user data</Heading> */}
        <p>Update user data</p>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update your password</Heading>
        <p>Update user password form</p>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
