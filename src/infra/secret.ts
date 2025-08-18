import Vault from "node-vault";

const options: Vault.VaultOptions = {
  apiVersion: "v1",
  endpoint: "http://127.0.0.1:8200",
  token: "root",
};

export default Vault(options);
