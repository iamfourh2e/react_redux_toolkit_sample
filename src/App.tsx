import { Button, Col, Row } from "antd";
import { FC } from "react";
import { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { setUser, unSetUser, UserState } from "./features/user/user";

const App: FC = () => {
  const user: UserState = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  if (user.username) {
    const handleLogout = () => {
      dispatch(unSetUser());
    };
    return (
      <>
        <Row justify="center">
          <Col span={24}>
            <h1>Welcome to the app baby</h1>
            <Button onClick={handleLogout}>Logout now</Button>
          </Col>
        </Row>
      </>
    );
  }

  return (
    <>
      <Login />
    </>
  );
};

const Login: FC = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    const user: UserState = {
      username: "kevin musk",
      token: "123",
    };
    dispatch(setUser(user));
  };
  return (
    <>
      <Row gutter={24}>
        <Col span={6}></Col>
        <Col span={12}>
          <h1>Welcome to Login</h1>
          <Button onClick={handleLogin}>Login now</Button>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default App;
