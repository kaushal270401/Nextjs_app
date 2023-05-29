import styles from "./fundtransfer.module.css";

const FundTransfer = () => {
  return (
    <div>
      <h1 className={styles.title}>Transfer Funds</h1>
      <br/>
      <div className={styles.title}>
        <form action="" className={styles.container}>
          <h1>Money transfer</h1>
          <div>
            <label htmlFor="Account">Account number</label>
            <input className={styles.inputfeild} type="text" name="Account" />
          </div>
          <div>
            <label htmlFor="Account">Money</label>
            <input className={styles.inputfeild} type="text" name="Account" />
          </div>
          <button className={styles.btn}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default FundTransfer;
