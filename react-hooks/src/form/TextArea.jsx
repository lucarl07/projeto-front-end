import React from "react";

const TextArea = () => {
  const [message, setMessage] = React.useState();

  return (
    <form>
      <p>
        <strong>Sua mensagem:</strong> {message}
      </p>
      <textarea 
        id="msg"
        cols="28"
        rows="7"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
    </form>
  );
}

export default TextArea;