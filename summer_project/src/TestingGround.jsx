import { useState } from 'react';
import BCRecipients from './Pages/Broadcasts/Recipient/BCRecipients';


const TestingGround = () => {
  const [recipientTitle, setRecipientTitle] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [email, setEmail] = useState("");
  const [blacklist, setBlacklist] = useState("");

  return (
    <div>
      <h1>Newsletter Management</h1>
      <BCRecipients
        setRecipientTitle={setRecipientTitle}
        setSelectedLevel={setSelectedLevel}
        email={email}
        setEmail={setEmail}
        blacklist={blacklist}
        setBlacklist={setBlacklist}
      />
      <div>
        <h2>Selected Options:</h2>
        <p>Recipient Title: {recipientTitle}</p>
        <p>Selected Level: {selectedLevel}</p>
        <p>Email: {email}</p>
        <p>Blacklist: {blacklist}</p>
      </div>
    </div>
  );
};

export default TestingGround;