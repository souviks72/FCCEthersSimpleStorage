const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main(){
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD,
        process.env.PRIVATE_KEY
    );
    console.log(encryptedJsonKey);
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
    //This way we can encrypt our wallet's private key and store it locally.
    //This encryptedJsonKey can be used to create a wallet in ethersjs using the PRIVATE_KEY_PASSWORD
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    })