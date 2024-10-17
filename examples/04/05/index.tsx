import React, { useState } from "react";
import { Textbox } from "../components/Textbox";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";
import { Switch } from "../components/Switch";
import styles from "./styles.module.css";

export const Component = () => {
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        if (!name) {
          setError("名前を入力してください");
        }
        console.log(name);
      }}
    >
      <div>
        <label className={styles.name}>
          名前 {error && <ErrorMessage>{error}</ErrorMessage>}
          <Textbox
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label className={styles.agreement}>
          利用規約に同意する
          <Switch
            name="agreement"
            className={styles.switch}
            onChange={(event) => {
              setAgreed(event.target.checked);
            }}
          />
        </label>
      </div>
      <Button disabled={!agreed}>送信</Button>
    </form>
  );
};
