import { Button } from "antd";
import React from "react";
import * as NetworkConfig from "../configs/networkConfigs";
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="text-center">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={() => {
              window.location.href = NetworkConfig.shopifyAppstoreUrl;
            }}
          >
            Log in
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
