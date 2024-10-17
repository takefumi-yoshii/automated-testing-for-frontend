//# examples/03/06/Form.tsx
import React from "react";
type Props = {
  name: string;
};

export const Form = ({ name }: Props) => {
  return (
    <div>
      <form>
        <h2>アカウント情報</h2>
        <p>{name}</p>
        <div>
          <button>編集する</button>
        </div>
      </form>
    </div>
  );
};
